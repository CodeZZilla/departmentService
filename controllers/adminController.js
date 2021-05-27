const Disciplines = require('../models/Disciplines');


exports.getAll = function (req,res){
    res.render('admin');
};

exports.getScheduleAdmin=function (req, res) {
    res.render('scheduleAdmin')
}

exports.addDiscipline=function (req, res) {
    // Disciplines.addDisciplines(req.body).then(r => )
}