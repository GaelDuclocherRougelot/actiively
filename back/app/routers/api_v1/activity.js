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
     * @summary Get one activity by id
     * @tags GET
     * @param {number} id.path
     * @return {Activity} 200 - success response - application/json
     * @return {ApiError} 401 - Unauthorized - application/json
     * @return {ApiError} 404 - Response not found - application/json
     * @example {Activity} - 200 - success response
     * @example response - 400 - Bad request response
        *  {ApiError}
    */
    .get(controllerHandler(controller.getOneActivty))
router
    .route('/search')
    /**
     * A research
     * @typedef {object} Search
     * @property {string} keyword - ex: Tennis%
     * @property {string} zip_code - ex: 75%
     */

        /** 
     * POST /api/v1/activity/search
     * @summary Get activities by keyword & zip_code
     * @description Exemple of request: keyword = Tennis% & zip_code = 75%
     * @tags POST
     * @param {Search} request.body - request exemple: Tennis% & 75% - application/json
     * @return {Activities} 200 - success response - application/json
     * @return {ApiError} 401 - Unauthorized - application/json
     * @return {ApiError} 404 - Response not found - application/json
     * @example {Activities} - 200 - success response
     * @example response - 400 - Bad request response
        *  {ApiError}
    */
    .post(validator(searchSchema),controllerHandler(controller.getAllByKeyword))

module.exports = router;