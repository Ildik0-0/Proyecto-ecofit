//rutas de sing in u log out 
const express = require('express');
const router = express.Router();
const passport = require('../lib/passport');


//INICIO SESION//

//REGISTRO USER//
router.get('/registro', (req, res) => {
    res.render('links/registro');
});

router.post('/registro', (req, res) => {

  passport.authenticate('local.registro', {
    successRedirect: './perfil'
  })

    res.send('se resivio');
});


module.exports = router;