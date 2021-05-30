const Teachers= require('../models/Teachers')
const mysql = require('mysql2');
const username = require('../controllers/authController')


exports.getAll = function (req,res){
    console.log(username.username);
    Teachers.getOneById(username.username).then(result => {
        console.log(result[0].role);
        Teachers.getAllByUsername(result[0].username).then(all=>{
            console.log(all);
            res.render('teacher',{
                all:all
            });
        })
    });

};

exports.logOut = function (req, res, next) {
    req.logout();

    res.clearCookie('keyboard cat' , {path:'/'});

    res.redirect('/');
};