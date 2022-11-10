require('dotenv').config();

const express = require('express');
const router = require('./routers');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
require('./helpers/apiDocs')(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// removing cors for easy access
// app.use(cors(process.env.CODE_LENGTH ?? '*'));
let corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  }
  
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(router);

module.exports = app