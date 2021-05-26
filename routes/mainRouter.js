const express = require('express');
const mainController = require('../controllers/mainController.js');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const mainRouter = express.Router();




mainRouter.get('/', mainController.getAll);
mainRouter.post('/logIn', mainController.auth);
// mainRouter.post('/login', urlencodedParser, mainController.login)

module.exports=mainRouter;