const express = require('express');
const router = express.Router();
const registerSchema = require('../../validations/schemas/organismSchema')
const validator = require('../../validations/validator')
const controllerHandler = require('../../helpers/controllerHandler');
const controller = require('../../controllers/v1/organismController');



router
    .route('/register')
    .post(validator(registerSchema),controllerHandler(controller.register))
    

module.exports = router;