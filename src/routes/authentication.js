//rutas de sing in u log out 
const express = require('express');
const router = express.Router();
//const passport = require('passport');
const passport = require('passport');
const {isLoggedIn, isNotLoggedIn} =  require('../lib/auth');

//INICIO SESION//

//REGISTRO USER//
router.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('auth/signup');
});



router.post('/signup', passport.authenticate('local.signup', {
  
    successRedirect: 'auth/perfil',
    failureRedirect: '/signup',
    failureFlash: true
}));


router.get('/signin', isNotLoggedIn, (req, res) =>{
    res.render('auth/signin');
});

router.post('/signin',  (req, res, next) =>{
    passport.authenticate('local.signin', {
        successRedirect: 'auth/perfil',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});

router.get("/logout", (req, res, next) => {//funcion asincroma

    req.logOut(req.user, err => {

        if(err) return next(err);

        res.redirect("/signin");  

    });

});



module.exports = router;