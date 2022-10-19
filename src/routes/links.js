//almacenar enlaces 
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const passport = require('passport');
//conection to database
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

//INICIO SESION//
router.get('/add', (req, res) => { //redireccionando al formulario /links/add
    res.render('links/add');
});

router.post('/add', async (req, res) => {
    
    res.send('mensaje recivido');
}); //para pedir del formulario

//---------------------//


//Crud Rsgistro
router.get('/registro', isLoggedIn, (req, res) => {
    res.render('links/registro'); //formulario usuario de registro
});
router.post('/registro', async (req, res) => {
   const {nom_cliente, apellido_cliente, email_cliente, telefono_cliente,
    rut_cliente, direccion_cliente, contacto_cliente, secreto} = req.body;
       const newregistro = {
        nom_cliente,
        apellido_cliente,
        email_cliente,
        telefono_cliente,
        rut_cliente,
        direccion_cliente,
        contacto_cliente,
        secreto
           
        };
       await pool.query('INSERT INTO clientes set ?', [newregistro]);
       req.flash('success', 'Nuevo Usuario agregado');
        res.redirect('./add');
});




module.exports = router;

