const express = require('express');

const apiRouterV1 = require('./routes/api_v1');
// const { errorHandler } = require('../helpers/errorHandler');

const router = express.Router();

// On préfixe les routers
router.use('/api/v1', apiRouterV1);

router.use((err, _, response, next) => {
    console.log(err);
});

module.exports = router;