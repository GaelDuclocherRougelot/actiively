require('dotenv').config();

const express = require('express');
const router = require('./routers');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// removing cors for easy access
app.use(cors(process.env.CODE_LENGTH ?? '*'));

app.use(router);

module.exports = app