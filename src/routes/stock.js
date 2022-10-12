const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
//conection to database
const pool = require('../database');

router.get('/stock', (req, res) => { //redireccionando al formulario 
    res.render('mainpage/stock');

});

router.post('/stock', async (req, res) => {
    
    res.send('mensaje recivido');
}); //para pedir del formulario

router.get('/stock', async (req, res) => {
    
    const viewstock = await pool.query('SELECT * FROM productos');
     
     res.redirect('./stock', {viewstock});
 
 });


module.exports = router;