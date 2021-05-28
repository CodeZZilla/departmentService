const Disciplines = require('../models/Disciplines');


exports.getAll = function (req, res) {
    Disciplines.getAllDisciplines().then((allDiscipline) => {
        console.log(allDiscipline)
        res.render('admin', {
            allDiscipline: allDiscipline
        });
    })

};

exports.getAll2 = function all(req, res) {
    Disciplines.getAllDisciplines().then((allDiscipline) => {
        console.log(allDiscipline)
        res.send(allDiscipline);
   });
}


exports.getScheduleAdmin = function (req, res) {
    res.render('scheduleAdmin')
}

exports.addDiscipline = function (req, res) {
    console.log(req.body)
    Disciplines.addDisciplines(req.body).then(() =>
        res.send('OK!')
    )
};

exports.deleteDiscipline = async function (req, res) {
    await Disciplines.deleteDisciplines(req.body);
    res.send('ok!');
}