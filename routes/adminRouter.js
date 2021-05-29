const express = require('express');
const adminController = require('../controllers/adminController');
const lessonController = require('../controllers/lessonController');
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


// РОЗКЛАД

adminRouter.get('/scheduleAdmin', auth, function (req, res) {
    res.render('scheduleAdmin', {
        audiences: ['230', '226', '224', '223', '221', '219', '219A']
    });
});

adminRouter.get('/scheduleAdmin/allAudiences', function (req, res) {
    res.send(['230', '226', '224', '223', '221', '219', '219A']);
});

adminRouter.post('/scheduleAdmin/saveAll', function (req, res){
    lessonController.saveAndUpdateAll(req, res);
    res.send('ok');
});

adminRouter.post('/scheduleAdmin/getData', function (req, res){
    lessonController.list(req, res);
});

adminRouter.get('/schedule', lessonController.getView);


adminRouter.get('/logout', adminController.logOut);
adminRouter.post('/addDiscipline',urlencodedParser, adminController.addDiscipline);
adminRouter.post('/deleteDiscipline',urlencodedParser, adminController.deleteDiscipline)
adminRouter.get('/getAll2', adminController.getAll2);
adminRouter.get('/getAllGroups', adminController.getAllGroups);
adminRouter.post('/addGroup', adminController.addGroup)
adminRouter.post('/deleteGroup', adminController.deleteGroup)

adminRouter.get('/discipline/:id', adminController.getPageDiscipline);


module.exports=adminRouter;