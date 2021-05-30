const jwt = require('jsonwebtoken');
const {secret} = require('../config/config');
const sec = require('../controllers/authController')

module.exports = function (roles) {
    return function (req, res, next) {

        try {
            let token = sec.tok;
            if (!token) {
                return res.status(403).render('403')
            }
            const user = jwt.verify(token, secret)
            req.user = user
            let hasRole = false
            if (roles.includes(req.user.role)) {
                hasRole = true;
            }

            if (!hasRole) {
                return res.status(403).render('403')
            }
            next();
        } catch (e) {
            console.log(e)
            return res.status(403).render('403')
        }


    };
};