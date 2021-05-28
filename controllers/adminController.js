const Disciplines = require('../models/Disciplines');


exports.getAll = function (req,res){
    res.render('admin');
};

exports.getScheduleAdmin=function (req, res) {
    res.render('scheduleAdmin')
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

exports.addDiscipline=function (req, res) {
    // Disciplines.addDisciplines(req.body).then(r => )
}

