const jwt = require('jsonwebtoken');

module.exports.createToken = async (user, jwtSecret, tokenLife) => {
  return new Promise((resolve, reject) => {
    jwt.sign({
      email: user.email
    }, jwtSecret, {
      expiresIn: tokenLife
    }, (err, token) => {
      if (err) return reject(err);
      return resolve(token)
    })
  })
}

module.exports.verifyJwtToken = (token, secretKey) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      return resolve(decoded);
    });
  });
};

module.exports.sendRefreshToken = (res, user) => {
  res.cookie(
    process.env.REFRESH_TOKEN_COOKIE_NAME,
    createToken('refreshToken', user),
    {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/refreshToken'
    }
  )
}