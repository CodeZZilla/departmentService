const passport = require('passport');

exports.getAll = function (req,res){
    res.render('index');
};

exports.auth = passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/',
    failureFlash:true,
    badRequestMessage: 'Некоректно введені дані'

});
