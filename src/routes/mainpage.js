const express = require('express');
//const { body } = require('express-validator');
const router = express.Router();
//conection to database
const pool = require('../database');
const {isLoggedIn, isNotLoggedIn} =  require('../lib/auth');
const {engine} = require('express-handlebars');
const { application } = require('express');


router.get('/page',isNotLoggedIn, (req, res) => { //redireccionando al formulario /mainpage/page.hbs
    res.render('mainpage/page');

});

router.post('/page', async (req, res) => {
    
    res.send('y');
}); //para pedir del formulario

router.get('/pageadmin', isLoggedIn, (req, res) => { //redireccionando al formulario /mainpage/page.hbs
    res.render('mainpage/pageadmin');

});



module.exports = router;