const express = require('express');
const router = express.Router();

const registerSchema = require('../../validations/schemas/organismSchema');
const loginSchema = require('../../validations/schemas/loginSchema');
const validator = require('../../validations/validator')

const controllerHandler = require('../../helpers/controllerHandler');
const controller = require('../../controllers/v1/organismController');

const {validateToken} = require('../../middlewares/JWT');


const app = express();


router
    .route('/register')
    .post(validator(registerSchema),controllerHandler(controller.register))
    
router
    .route('/login')
    .post(validator(loginSchema),controllerHandler(controller.login))

router
    .route('/profile')
    .get(validateToken,controllerHandler(controller.profile))

module.exports = router;