const express = require('express');

const router = express.Router();
const controller = require('../../controllers/v1/activityController');
const controllerHandler = require('../../helpers/controllerHandler');

router
    .route('/:id')
    /** 
     * GET api/v1/:id
    */
    .get(controllerHandler(controller.getOneActivty))
router
    .route('/search')
    .post(controllerHandler(controller.getAllByKeyword))

module.exports = router;