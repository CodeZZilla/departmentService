const Teachers= require('../models/Cadets')


exports.getAll = function (req,res){
    res.render('student');
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