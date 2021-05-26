const express = require('express');
const studentController = require('../controllers/studentController.js');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const studentRouter = express.Router();

studentRouter.get('/', studentController.getAll);

module.exports=studentRouter;