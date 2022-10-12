//almacenar enlaces 
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
//conection to database
const pool = require('../database');

//LISTA DE PRODUCTOS

router.get('/listaproducto', (req, res) => {
    res.render('links/listaproducto');//dentro de la carpeta links

});

router.post('/listaproducto', async (req, res) => {

    const { nom_producto, precio_producto, tipo_producto, stock_producto, descripcion } = req.body;

        const newproducto = { nom_producto, precio_producto, tipo_producto, stock_producto, descripcion };
        await pool.query('INSERT INTO productos set ?', [newproducto]);
       req.flash('success', 'El Producto ha sido agregado');//mensajes para mostrar cuando se agregue un nuevo producto
    res.redirect('/links');

});

router.get('/', async (req, res) => {

   const viewproducto = await pool.query('SELECT * FROM productos');
    
    res.render('links/viewproducto', {viewproducto});

});

//CRUD ----------------------------------------------------------------------------
router.get('/delete/:id', async (req, res) => {
    const {id} =req.params;
    await pool.query('DELETE FROM productos WHERE ID = ?', [id]);
    req.flash('success', 'Se elimino correctamenete' )
    res.redirect('/links');
    
    //console.log(req.path.id); //cuando se envia el link para borrar el id lo identifca
   // res.send('DELETED');
});




router.get('/edit/:id', async (req, res) => { //crud para  editar desde la tabla productos y lo seleciona desde el id
    const {id} = req.params;
    const editproducto = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
    
    res.render('links/editproducto', {editproducto: editproducto[0]});
});
router.post('/edit/:id', async (req, res) => {
    const {id} = req.params;
    const {nom_producto, precio_producto, tipo_producto, 
        stock_producto, descripcion} = req.body;
    const newedit = {
        nom_producto, precio_producto, 
        tipo_producto, stock_producto,
         descripcion
    };
    await pool.query('UPDATE productos set ? WHERE id = ?', [newedit, id]);
    req.flash('success', 'El Producto ha sido editado');
    res.redirect('/links');
});

module.exports = router;