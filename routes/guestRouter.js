const express = require('express');
const lessonController = require('../controllers/lessonController');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const guestRouter = express.Router();

guestRouter.get('/', lessonController.getView);

module.exports=guestRouter;