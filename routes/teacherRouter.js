const express = require('express');
const teacherController = require('../controllers/teacherController.js');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const teacherRouter = express.Router();

const roleMiddleware = require('../middleware/roleMiddleware');


teacherRouter.get('/', roleMiddleware(['TEACHER']), teacherController.getAll);



teacherRouter.get('/logout', teacherController.logOut);



module.exports=teacherRouter;