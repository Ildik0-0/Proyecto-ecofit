//almacenar enlaces 
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
//conection to database
const pool = require('../database');
const {isLoggedIn} =  require('../lib/auth');

router.get('/perfil', isLoggedIn, (req, res) =>{
    res.render('auth/perfil');
   
 });
 


module.exports = router;