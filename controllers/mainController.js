const passport = require('passport');

exports.getAll = function (req,res){
    res.render('index');
};

exports.auth = function (req, res, next) {
    passport.authenticate('local', function (err, user) {
        if (err)
            return next(err);
        if (!user)
            return res.redirect('/');

        req.logIn(user, function (err) {
            if (err)
                return next(err);

            return res.redirect('/admin');
        });
    })(req, res, next);
};
