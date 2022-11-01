const express = require('express');

const router = express.Router();
const controller = require('../../controllers/v1/activityController');
const controllerHandler = require('../../helpers/controllerHandler');

router
    .route('/:id')
    .get(controllerHandler(controller.getOneActivty))

module.exports = router;