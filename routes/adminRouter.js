const express = require('express');
const adminController = require('../controllers/adminController.js');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const adminRouter = express.Router();

const auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        return res.redirect('/');
    }
};

adminRouter.get('/', auth, adminController.getAll);
adminRouter.get('/scheduleAdmin', adminController.getScheduleAdmin)

module.exports=adminRouter;