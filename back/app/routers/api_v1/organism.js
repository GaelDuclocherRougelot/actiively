const express = require('express');
const router = express.Router();

const registerSchema = require('../../validations/schemas/organismSchema');
const loginSchema = require('../../validations/schemas/loginSchema');
const createActivitySchema = require('../../validations/schemas/activitySchema');
const validator = require('../../validations/validator')

const controllerHandler = require('../../helpers/controllerHandler');
const controller = require('../../controllers/v1/organismController');
const activitiesController = require('../../controllers/v1/activityController');
const {validateToken} = require('../../middlewares/JWT');


router
    .route('/register')
    .post(validator(registerSchema),controllerHandler(controller.register))
    
router
    .route('/login')
    .post(validator(loginSchema),controllerHandler(controller.login))

router
    .route('/logout')
    .get(validateToken,controllerHandler(controller.logout))

router
    .route('/profile')
    .get(validateToken,controllerHandler(controller.profile))

router
    .route('/profile/edit')
    .patch(validateToken,controllerHandler(controller.updateProfile))

router
    .route('/profile/delete')
    .delete(validateToken,controllerHandler(controller.deleteProfile))

router
    .route('/create')
    .post(validateToken,validator(createActivitySchema),controllerHandler(activitiesController.postOneActivity))

router
    .route('/activities')
    .get(validateToken,controllerHandler(activitiesController.getOrganismActivities))
  
router
    .route('/activity/:id')
    .get(validateToken,controllerHandler(activitiesController.getOneOrganismActivty))

router
    .route('/activity/:id/delete')
    .delete(validateToken,controllerHandler(activitiesController.deleteOneActivity))

router
    .route('/activity/:id/edit')
    .patch(validateToken,controllerHandler(activitiesController.updateOneActivity))

module.exports = router;