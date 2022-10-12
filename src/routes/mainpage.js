const express = require('express');
//const { body } = require('express-validator');
const router = express.Router();
//conection to database
const pool = require('../database');



router.get('/page', (req, res) => { //redireccionando al formulario /mainpage/page.hbs
    res.render('mainpage/page');

});

router.post('/page', async (req, res) => {
    
    res.send('y');
}); //para pedir del formulario

router.get('/pageadmin', (req, res) => { //redireccionando al formulario /mainpage/page.hbs
    res.render('mainpage/pageadmin');

});

module.exports = router;