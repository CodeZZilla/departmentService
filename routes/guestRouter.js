const express = require('express');
const guestController = require('../controllers/guestController.js');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const guestRouter = express.Router();

guestRouter.get('/', guestController.getAll);
// mainRouter.post('/login', urlencodedParser, mainController.login)

module.exports=guestRouter;