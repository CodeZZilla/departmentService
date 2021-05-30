const Cadets= require('../models/Cadets')
const username = require('../controllers/authController')


exports.getAll = function (req,res){
    console.log(username.username);
    Cadets.getOneById(username.username).then(result => {
        console.log(result[0].role);
        Cadets.getAllByUsername(result[0].username).then(all=>{
            console.log(all);
            res.render('student',{
                all:all
            });
        })
    });
};


exports.logOut = function (req, res, next) {
    req.logout();

    res.clearCookie('keyboard cat' , {path:'/'});

    req.session.destroy(function (err) {
       if (err)
           return next(err);

       req.session = null;

       res.redirect('/');
    });
};

