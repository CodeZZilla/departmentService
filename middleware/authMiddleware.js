const jwt = require('jsonwebtoken');
const {secret} = require('../config/config');
const sec = require('../controllers/authController')

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS")
      next();

  try {
      let token = sec.tok;
      console.log(token);
      if (!token) {
          return res.status(403).json({message: "Пользователь не авторизован"});
      }
      const decodedData = jwt.verify(token, secret);
      req.user = decodedData;
      next();

  } catch (e) {
      console.log(e);
      return res.status(403).json({message: "Пользователь не авторизован"});
  }

    // const authHeader = req.headers.authorization;
    //
    // if (authHeader) {
    //     const token = authHeader.split(' ')[1];
    //
    //     jwt.verify(token, secret, (err, user) => {
    //         if (err)
    //             return res.sendStatus(403);
    //
    //         req.user = user;
    //         next();
    //     });
    // } else {
    //     res.sendStatus(401);
    // }

};