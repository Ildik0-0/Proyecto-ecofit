const express = require('express');
//const { body } = require('express-validator');
const router = express.Router();
//conection to database
const pool = require('../database');
const {isLoggedIn, isNotLoggedIn} =  require('../lib/auth');
const viewcliente = require('../routes/links');
const {engine} = require('express-handlebars');
const { application } = require('express');


router.get('/page', (req, res) => { //redireccionando al formulario /mainpage/page.hbs
    res.render('mainpage/page');

});

router.post('/page', async (req, res) => {
    
    res.send('y');
}); //para pedir del formulario

router.get('/pageadmin', (req, res) => { //redireccionando al formulario /mainpage/page.hbs
    res.render('mainpage/pageadmin');

});
router.post('/pageadmin', (req, res) => { //redireccionando al formulario /mainpage/page.hbs
    

});


router.get('/', async (req, res) =>{
    const viewcliente = await pool.query('SELECT * FROM clientes');
    console.log(viewcliente);
    res.render('mainpage/pageadmin', {viewcliente});
 });



module.exports = router;
//nom_cliente, telefono_cliente, rut_cliente, email_cliente, direccion_cliente 