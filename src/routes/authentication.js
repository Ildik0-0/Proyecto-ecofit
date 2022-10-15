//rutas de sing in u log out 
const express = require('express');
const router = express.Router();
//const passport = require('passport');
const passport = require('passport');


//INICIO SESION//

//REGISTRO USER//
router.get('/signup', (req, res) => {
    res.render('auth/signup');
});



router.post('/signup', passport.authenticate('local.signup', {
  
    successRedirect: '/perfil',
    failureRedirect: '/signup',
    failureFlash: true
}));


router.get('/signin', (req, res) =>{
    res.render('auth/signin');
});

router.post('/signin',  (req, res, next) =>{
    passport.authenticate('local.signin', {
        successRedirect: '/perfil',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});



router.get('/perfil', (req, res) =>{
   // res.render('auth/perfil');
  res.send('este es el perfil')
});
router.post('/perfil', async (req, res) => {
    
    res.send('estamos en perfil');
});

module.exports = router;