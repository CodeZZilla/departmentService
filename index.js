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


app.use('/', mainRouter);

app.use(function (req, res, next) {
    res.status(404).render('page404')
});
<<<<<<< HEAD
app.get('/404', function(req, res){
    res.render('404.ejs');
});
=======
// app.get('/', function(req, res){
//     res.render('index');
// });
// app.get('/guest', function(req, res){
//     res.render('guest.ejs');
// });
// app.get('/admin', function(req, res){
//     res.render('scheduleAdmin.ejs');
// });
>>>>>>> 4b0c0aecb114aed0ce88ed269ea1edc3febd345e
app.listen(PORT, ()=>{
    console.log('Server Start!!!!')
});
