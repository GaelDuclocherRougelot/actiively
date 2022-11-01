const express = require('express');

const router = express.Router();

router
    .route('/activity/:id')
    .get()

module.exports = router;