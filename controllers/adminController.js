const Disciplines = require('../models/Disciplines');


exports.getAll = function (req,res){
    res.render('admin');
};

exports.getScheduleAdmin=function (req, res) {
    res.render('scheduleAdmin')
}

exports.addDiscipline=function (req, res) {
    console.log(req.body.discipline)
    const arr= [req.body.discipline, req.body.abbreviation]
    Disciplines.addDisciplines(req.body).then(()=>
    res.send('OK!'))
}