const express = require('express');

const router = express.Router();
const controller = require('../../controllers/v1/activityController');
const controllerHandler = require('../../helpers/controllerHandler');

router
    .route('/:id')
    /** 
     * GET api/v1/activity:id
     * @summary 
     * @tags Get
     * @param {number} request.params.id id activity id required
     * @return {Get} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
    */
    .get(controllerHandler(controller.getOneActivty))
router
    .route('/search')
    .post(controllerHandler(controller.getAllByKeyword))

module.exports = router;