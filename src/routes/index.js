//utilizado para almacenar todas las rutas de mi aplicacion 
const express = require('express');
const router = express.Router(); //al ejecutar me devuelve un objeto que se amlacena en router

router.get('/', (req, res) => {
   res.render('index');
});

module.exports = router;