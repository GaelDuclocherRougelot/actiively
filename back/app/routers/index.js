const express = require('express');

const apiRouterV1 = require('./api_v1');
// const { errorHandler } = require('../helpers/errorHandler');
const customApiError = require('../errors/apiErrors');
const { apiController } = require('../controllers/v1');
const router = express.Router();

// On préfixe les routers
router.use('/api/v1', apiRouterV1);
router.all('/', apiController.home);


router.use((err, _, response, next) => {
    throw new customApiError(err.message, { status: 404 });
});

module.exports = router;