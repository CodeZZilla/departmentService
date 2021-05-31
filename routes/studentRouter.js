const express = require('express');
const studentController = require('../controllers/studentController.js');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const studentRouter = express.Router();
const roleMiddleware = require('../middleware/roleMiddleware');

studentRouter.get('/', roleMiddleware(['CADET']), studentController.getAll);


//eto edalit
studentRouter.get('/schedule', studentController.register )

module.exports=studentRouter;