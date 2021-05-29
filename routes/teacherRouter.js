const express = require('express');
const teacherController = require('../controllers/teacherController.js');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const teacherRouter = express.Router();

const auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        return res.redirect('/');
    }
};
teacherRouter.get('/', teacherController.getAll);



teacherRouter.get('/logout', teacherController.logOut);



module.exports=teacherRouter;