const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const {secret} = require('../config/config');
const mysql = require('mysql2');
const configDb = require('../config/config_mysql')

const pool = mysql.createPool(configDb);

const generateAccessToken = (id, role) => {
    const payload = {
        id,
        role
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

class authController {
    login(req, res) {
        try {
            const {username, password} = req.body;
            module.exports.username = username;
            pool.query('SELECT * FROM users WHERE username=?', username, function (err, user) {

                if (!user) {
                    return res.redirect('/').json({message: `Пользователь ${username} не найден`});
                }
                try {
                    if (user[0].password !== password || user[0].password === null) {
                        return res.redirect('/');
                    }
                } catch (e) {
                    return res.redirect('/');
                }

                let token = generateAccessToken(user[0].id, user[0].role)
                // res.json({token});
                module.exports.tok = token;

                if (user[0].role === 'ADMIN')
                    return res.redirect('/admin');
                else if (user[0].role === 'CADET')
                    return res.redirect('/student');
                else if (user[0].role === 'TEACHER')
                    return res.redirect('/teacher');
                return res.redirect('/');
            });


        } catch (e) {
            console.log(e);
            res.status(400);
        }
    }
}

module.exports = new authController();