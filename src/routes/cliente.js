//almacenar enlaces 
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
//const passport = require('passport');
//conection to database
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');



//resgistro cliente
//Crud Rsgistro
router.get('/registrocliente', (req, res) => {
    res.render('cliente/registrocliente'); //formulario usuario de registro
});
router.post('/registrocliente', async (req, res) => {
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
       req.flash('success', 'Nuevo Cliente agregado');
      
        res.redirect('/cliente');
});

router.get('/', async (req, res) => {///esto es para que se pueda ver la vista /cliente

    const viewcliente = await pool.query('SELECT * FROM clientes');
     
     res.render('cliente/viewcliente', {viewcliente});
 
 });

//Delete cliente
router.get('/delete/:id', async (req, res) => {
    const {id} =req.params;
    await pool.query('DELETE FROM clientes WHERE ID = ?', [id]);
    req.flash('success', 'Se elimino cliente correctamenete' )
    res.redirect('/cliente');
    
    //console.log(req.path.id); //cuando se envia el link para borrar el id lo identifca
   // res.send('DELETED');
});

// editar cliente
router.get('/edit/:id', async (req, res) => { //crud para  editar desde la tabla productos y lo seleciona desde el id
    const {id} = req.params;
    const editcliente = await pool.query('SELECT * FROM clientes WHERE id = ?', [id]);
   
    res.render('cliente/editcliente', {editcliente: editcliente[0]});
});
router.post('/edit/:id', async (req, res) => {
    const {id} = req.params;
    const {nom_cliente, apellido_cliente, email_cliente, telefono_cliente,
        rut_cliente, direccion_cliente, contacto_cliente} = req.body;
    const neweditcliente = {
        nom_cliente, apellido_cliente, 
        email_cliente, telefono_cliente,
        rut_cliente, direccion_cliente, contacto_cliente
    };
    console.log(neweditcliente);
    await pool.query('UPDATE clientes set ? WHERE id = ?', [neweditcliente, id]);
    req.flash('success', 'El cliente ha sido editado');
    res.redirect('/cliente');
});


module.exports = router;