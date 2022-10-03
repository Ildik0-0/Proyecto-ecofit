//almacenar enlaces 
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
//conection to database
const pool = require('../database');

//INICIO SESION//
router.get('/add', (req, res) => { //redireccionando al formulario /links/add
    res.render('links/add');

});

router.post('/add', async (req, res) => {
    
    res.send('mensaje recivido');
}); //para pedir del formulario

//---------------------//


router.get('/registro', (req, res) => {
    res.render('links/registro'); //formulario usuario de registro
});
router.post('/registro', async (req, res) => {
    const { nom_cliente, apellido_cliente, 
        email_cliente, telefono, rut_cliente, password} = req.body;
        const newregistro = {
                nom_cliente, 
                apellido_cliente, 
                email_cliente, 
                telefono, 
                rut_cliente, 
                password
        };
       await pool.query('INSERT INTO cliente set ?', [newregistro]);
        res.send('recivido el registro');
});



module.exports = router;

