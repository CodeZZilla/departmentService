const express = require('express');
const path = require('path');


const app = express();
const PORT = 3088;

app.use(express.static(path.join(__dirname ,'public')));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});
app.get('/guest', function(req, res){
    res.render('guest.ejs');
});
app.get('/admin', function(req, res){
    res.render('scheduleAdmin.ejs');
});
app.listen(PORT, ()=>{
    console.log('Server Start!!!!')
});
