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

const mainRouter = require('./routes/mainRouter.js');
const guestRouter = require('./routes/guestRouter.js');
const adminRouter = require('./routes/adminRouter.js');
const teacherRouter = require('./routes/teacherRouter.js');
const studentRouter = require('./routes/studentRouter.js');


app.use('/', mainRouter);
app.use('/guest', guestRouter);
app.use('/admin', adminRouter);
app.use('/teacher', teacherRouter)
app.use('/student', studentRouter)

app.use(function (req, res, next) {
    res.status(404).render('404');
});

app.listen(PORT, ()=>{
    console.log('Server Start!!!!');
});
