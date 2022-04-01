const db = require('../models');
require('dotenv').config();
const { hashPassword, matchPassword } = require('../utils/password');
const { createToken, verifyJwtToken } = require('../utils/jwt');

const tokenList = {};

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
    });

    if (user) {
      if (user.dataValues.password) delete user.dataValues.password;
      user.dataValues.token = await createToken(user, process.env.JWT_SECRET_TOKEN, process.env.TOKEN_LIFE)
      res.status(201).json({ user })
    }
  } catch (e) {
    res.status(422).json({ errors: { message: e.message } })
  }
}

module.exports.loginUser = async (req, res) => {
  try {
    if (!req.body.email) throw new Error('Email is Required')
    if (!req.body.password) throw new Error('Password is Required')

    const user = await db.User.findOne({
      where: {
        email: req.body.email
      }
    })

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

    const token = await createToken({ email: user.dataValues.email }, process.env.JWT_SECRET_TOKEN, process.env.TOKEN_LIFE);
    const refreshToken = await createToken({ email: user.dataValues.email }, process.env.JWT_SECRET_REFRESH_TOKEN, process.env.REFRESH_TOKEN_LIFE);

    delete user.dataValues.password
    user.dataValues.token = token;
    user.dataValues.refreshToken = refreshToken;

    tokenList[refreshToken] = {
      email: user.dataValues.email
    };
    res.status(200).json({ user })
  } catch (e) {
    const status = res.statusCode ? res.statusCode : 500
    res.status(status).json({ errors: { message: e.message } })
  }
}

module.exports.refreshToken = async (req, res) => {
  // refresh the damn token
  const { refreshToken } = req.body
  // if refresh token exists
  console.log(refreshToken)
  console.log(tokenList)
  if ((refreshToken) && (refreshToken in tokenList)) {
    try {
      await verifyJwtToken(refreshToken, process.env.JWT_SECRET_REFRESH_TOKEN);

      const user = tokenList[refreshToken];
      const token = await createToken(user, process.env.JWT_SECRET_TOKEN, process.env.TOKEN_LIFE);
      const response = {
        "token": token,
      };
      res.status(200).json(response);
    } catch (err) {
      console.error(err);
      res.status(403).json({
        message: 'Invalid refresh token',
      });
    }
  } else {
    res.status(400).send('Invalid request')
  }
};

module.exports.updateUserDetails = async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: {
        email: req.user.email
      }
    })

    if (!user) {
      res.status(401)
      throw new Error('No user with this email');
    }

    if (req.body.user) {
      const firstName = req.body.user.firstName ? req.body.user.firstName : user.firstName;
      const lastName = req.body.user.lastName ? req.body.user.lastName : user.lastName;
      const email = req.body.user.email ? req.body.user.email : user.email;
      const address = req.body.user.address ? req.body.user.address : user.address;
      const gender = req.body.user.gender ? req.body.user.gender : user.gender;
      const phoneNumber = req.body.user.phoneNumber ? req.body.user.phoneNumber : user.phoneNumber;
      const image = req.body.user.image ? req.body.user.image : user.image
      let password = user.password
      if (req.body.user.password)
        password = await hashPassword(req.body.user.password)

      const updatedUser = await user.update({ firstName, lastName, email, password, address, gender, phoneNumber, image })
      delete updatedUser.dataValues.password;
      updatedUser.dataValues.token = req.header('Authorization').split(' ')[1];
      res.json(updatedUser);
    } else {
      delete user.dataValues.password
      user.dataValues.token = req.header('Authorization').split(' ')[1]
      res.json(user)
    }
  } catch (e) {
    const status = res.statusCode ? res.statusCode : 500
    return res.status(status).json({
      errors: { body: [e.message] }
    })
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const { limit = 20, offset = 0 } = req.query;
    const users = await db.User.findAll({
      attributes: ['id', 'firstName', 'lastName', 'phoneNumber', 'address', 'email', 'gender', 'roleId', 'positionId'],
      limit: parseInt(limit),
      offset: parseInt(offset),
    }
    );
    if (!users) {
      res.status(401);
      throw new Error('No user found');
    };
    res.json(users);
  } catch (err) {
    const status = res.statusCode ? res.statusCode : 422
    res.status(status).json({ errors: { message: e.message } })
  }
};
module.exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
  if(!userId) {
    res.status(401);
    throw new Error('Missing user id');
  };
  const user = await db.User.findByPk(userId);
  if(!user) {
    res.status(401);
    throw new Error('No user found!')
  };
  await db.User.destroy({
    where: { id : userId}
  });
  res.status(200).json({ message: 'User deleted successfully'})
  } catch (error) {
    const code = res.statusCode ? res.statusCode : 422;
		return res.status(code).json({
			errors: { body: ['Could not delete user', error.message] },
		});
  }
}
