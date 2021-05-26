const express = require('express');
const teacherController = require('../controllers/teacherController.js');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const teacherRouter = express.Router();

teacherRouter.get('/', teacherController.getAll);

module.exports=teacherRouter;