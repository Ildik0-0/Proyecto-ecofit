//almacenar enlaces 
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
//conection to database
const pool = require('../database');
const {isLoggedIn} =  require('../lib/auth');


module.exports = router;