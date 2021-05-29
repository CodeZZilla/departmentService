const express = require('express');
const mainController = require('../controllers/mainController.js');
const authController = require('../controllers/authController');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const mainRouter = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

mainRouter.get('/', mainController.getAll);
mainRouter.post('/logIn', authController.login);
// mainRouter.post('/login', urlencodedParser, mainController.login)

module.exports=mainRouter;