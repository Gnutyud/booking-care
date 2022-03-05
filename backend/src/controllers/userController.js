const db = require('../models');
const { hashPassword, matchPassword } = require('../utils/password');
const { sign, decode } = require('../utils/jwt');

module.exports.createUser = async (req, res) => {
  try {
    if (!req.body.firstName) throw new Error("firstName is Required")
    if (!req.body.lastName) throw new Error("lastName is Required")
    if (!req.body.email) throw new Error("Email is Required")
    if (!req.body.password) throw new Error("Password is Required")

    const existingUser = await db.User.findOne({
      where: {
        email: req.body.email
      }
    })
    if (existingUser)
      throw new Error('User already exists with this email')

    const password = await hashPassword(req.body.password);
    const user = await db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: password,
      email: req.body.email
    })

    if (user) {
      if (user.dataValues.password) delete user.dataValues.password;
      user.dataValues.token = await sign(user)
      res.status(201).json({ user })
    }
  } catch (e) {
    res.status(422).json({ errors: { message: e.message } })
  }
}

module.exports.loginUser = async (req, res) => {
  try {
    console.log('body', req.body)
    if (!req.body.email) throw new Error('Email is Required')
    if (!req.body.password) throw new Error('Password is Required')

    const user = await db.User.findOne({
      where: {
        email: req.body.email
      }
    })
    console.log("user", user)

    if (!user) {
      res.status(401)
      throw new Error('Incorrect email. Please try again.');
    }

    //Check if password matches
    const passwordMatch = await matchPassword(user.password, req.body.password)

    if (!passwordMatch) {
      res.status(401)
      throw new Error('Incorrect password. Please try again.')
    }

    delete user.dataValues.password
    user.dataValues.token = await sign({ email: user.dataValues.email, username: user.dataValues.username })

    res.status(200).json({ user })
  } catch (e) {
    const status = res.statusCode ? res.statusCode : 500
    res.status(status).json({ errors: { message: e.message } })
  }
}
