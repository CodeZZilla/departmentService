'use strict'
const express = require('express');
const path = require("path");
// const session = require('express-session');
// const FileStore = require('session-file-store')(session);
// const passport = require('./config/passport');
// const connectEnsureLogin = require('connect-ensure-login');
const app = express();
const flash = require('express-flash');

// app.use(flash());

const PORT = 3088;

app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const mainRouter = require('./routes/mainRouter.js')
const guestRouter = require('./routes/guestRouter.js')

app.use('/', mainRouter);
app.use('/guest', guestRouter)

app.get('/guest', function(req, res){
    res.render('guest.ejs');
});
<<<<<<< HEAD
=======

app.use(function (req, res, next) {
    res.status(404).render('404')
});
>>>>>>> 9d8ce83e086e6850b2f726f7992dbe639ecc034c
// app.get('/', function(req, res){
//     res.render('index');
// });

// app.get('/admin', function(req, res){
//     res.render('scheduleAdmin.ejs');
// });
app.listen(PORT, ()=>{
    console.log('Server Start!!!!')
});
