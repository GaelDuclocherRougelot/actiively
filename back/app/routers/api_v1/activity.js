const express = require('express');

const router = express.Router();
const validator = require('../../validations/validator');
const searchSchema = require('../../validations/schemas/searchSchema');
const controller = require('../../controllers/v1/activityController');
const controllerHandler = require('../../helpers/controllerHandler');

router
    .route('/:id')
    /** 
     * GET /api/v1/activity/{id}
     * @summary 
     * @tags Get
     * @param {number} code_activity.params
     * @return {Get} 200 - success response - application/json
     * @return {ApiError} 401 - Unauthorized - application/json
     * @return {ApiError} 404 - Response not found - application/json
     * @example response - 200 - success response exemple
        * {
        * "name": "Tennis",
        * "address": "12 rue du Tennis",
        * "zip_code": "75016",
        * "city": "Paris",
        * "day": "Samedi",
        * "start_time": "20H00",
        * "end_time": "22H00",
        * "price": "20",
        * "price_type": "La scéance",
        * "gender": "Mixte",
        * "level": "Débutant",
        * "description": "Tennis description",
        * "image_url": "link",
        * "organism_infos": {
        *     "email": "email@oftheorganism.com",
        *     "name": "Organization 1",
        *     "phone_number": "0702030304",
        *     "organism_description": "description of the organism"
        * }
        * }
    * @example response - 400 - Bad request response
        *  {ApiError}
        */
    
    .get(controllerHandler(controller.getOneActivty))
router
    .route('/search')
    .post(validator(searchSchema),controllerHandler(controller.getAllByKeyword))

module.exports = router;