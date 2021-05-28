const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const userDB = {
    id: 1,
    username: 'admin',
    password: 'admin'
};

passport.serializeUser(function (user, done) {
    console.log('Serialize: ', user);
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    console.log('Deserialize: ', id);
    const user = (userDB.id === id) ? userDB : false;
    done(null, user);
});

passport.use(
    new LocalStrategy({usernameField: 'username'}, function (username, password, done) {

        if (username === userDB.username && password === userDB.password) {
            return done(null, userDB);
        } else {
            return done(null, false, {message: 'Невірні дані для авторизації'});
        }


    })
);