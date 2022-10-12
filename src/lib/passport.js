//const { request } = require('express');
//const { Passport } = require('passport');
const passport = require('passport');
const Localstrategy = require('passport-local').Strategy;

passport.use('local.registro', new Localstrategy ({
   usernameField: 'nom_cliente',
   passwordField: 'password',
   passReqToCallback: true
    
}, async (req, nom_cliente, password, done) =>{

console.log(req.body);

}));

//passport.serializeUser((usr, done) =>{});