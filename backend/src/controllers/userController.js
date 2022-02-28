const db = require('../models');
const { hashPassword, matchPassword } = require('../utils/password');
const { sign, decode } = require('../utils/jwt');

module.exports.createUser = async (req,res) => {
  try{
      if(!req.body.firstName) throw new Error("firstName is Required")
      if(!req.body.lastName) throw new Error("lastName is Required")
      if(!req.body.email) throw new Error("Email is Required")
      if(!req.body.password) throw new Error("Password is Required")
      
      const existingUser = await db.User.findOne({
        where: {
          email: req.body.email
        }
      })
      if(existingUser)
          throw new Error('User aldready exists with this email')

      const password = await hashPassword(req.body.password);
      const user = await db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          password: password,
          email: req.body.email
      })
      
      if(user){
          if(user.dataValues.password) delete user.dataValues.password;
          user.dataValues.token = await sign(user)
          // user.dataValues.bio = null
          // user.dataValues.image = null
          res.status(201).json({user})
      }    
  }catch (e){
      res.status(422).json({errors: { body: [ 'Could not create user ', e.message ] }})
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
      throw new Error('No User with this email id')
    }

    //Check if password matches
    const passwordMatch = await matchPassword(user.password, req.body.password)

    if (!passwordMatch) {
      res.status(401)
      throw new Error('Invalid password or email id')
    }

    delete user.dataValues.password
    user.dataValues.token = await sign({ email: user.dataValues.email, username: user.dataValues.username })

    res.status(200).json({ user })
  } catch (e) {
    const status = res.statusCode ? res.statusCode : 500
    res.status(status).json({ errors: { body: ['Could not create user ', e.message] } })
  }
}
