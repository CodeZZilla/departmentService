'use strict'
const express = require('express');
const path = require("path");

// config mongodb
require('./config/config-mongodb');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');
// const session = require('express-session');
// const FileStore = require('session-file-store')(session);
// const passport = require('./config/passport');
// const connectEnsureLogin = require('connect-ensure-login');
const app = express();
const flash = require('express-flash');

app.use(express.json());
app.use(flash());
app.use(express.urlencoded({extended: true}));

app.use(
    session({
        secret: 'Dswfdd2ds',

        cookie: {
            path: '/',
            httpOnly: true,
            maxAge: 60 * 60 * 1000
        },
        resave: false,
        saveUninitialized: false
    })
);

// app.use(flash());

const PORT = 3088;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const mainRouter = require('./routes/mainRouter.js');
const guestRouter = require('./routes/guestRouter.js');
const adminRouter = require('./routes/adminRouter.js');
const teacherRouter = require('./routes/teacherRouter.js');
const studentRouter = require('./routes/studentRouter.js');

app.use('/', mainRouter);
app.use('/guest', guestRouter);
app.use('/admin', adminRouter);
app.use('/teacher', teacherRouter);
app.use('/student', studentRouter);

app.use(function (req, res, next) {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log('Server Start!!!!');
});