const express = require('express');
const adminController = require('../controllers/adminController.js');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const adminRouter = express.Router();

adminRouter.get('/', adminController.getAll);
// mainRouter.post('/login', urlencodedParser, mainController.login)

module.exports=adminRouter;