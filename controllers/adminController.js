const Disciplines = require('../models/Disciplines');
const Groups = require('../models/Groups');


exports.getAll = function (req, res) {
    Disciplines.getAllDisciplines().then((allDiscipline) => {
        Groups.getAllGroups().then((allGroups)=>{
            res.render('admin', {
                allDiscipline: allDiscipline,
                allGroups:allGroups
            });
        })

    })

};

exports.getAll2 = function all(req, res) {
    Disciplines.getAllDisciplines().then((allDiscipline) => {
        console.log(allDiscipline)
        res.send(allDiscipline);
   });
}

exports.getAllGroups = function all(req, res) {
    Groups.getAllGroups().then((allGroups) => {
        res.send(allGroups);
    });
}


exports.getScheduleAdmin = function (req, res) {
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


exports.addDiscipline = function (req, res) {
    // console.log(req.body)
    Disciplines.addDisciplines(req.body).then(() =>
        res.send('OK!')
    )
};


exports.deleteDiscipline = async function (req, res) {
    await Disciplines.deleteDisciplines(req.body);
    res.send('ok!');
}

exports.addGroup = async function (req, res) {
    await Groups.addGroup(req.body);
    res.send('OK!')
};

exports.deleteGroup = async function (req, res) {
    await Groups.deleteGroup(req.body);
    res.send('OK!')
}


exports.getPageDiscipline = function (req, res) {
    Disciplines.getDisciplinesById(req.params.id).then((discipline) => {
        console.log(discipline);
        res.render('editDiscipline', {
            discipline: discipline
        });
    });

}