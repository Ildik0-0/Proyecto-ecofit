//ASEGURA LAS RUTAS PARA QUE NO SE PUEDAN METER POR O ESCRIBIENDO LOS LINKS 

module.exports = {
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()){
            return next();
        }
        return res.redirect('/signin');
    },

    isNotLoggedIn(req, res, next) {
        
        if(!req.isAuthenticated()){
            return next();
        }
        return res.redirect('auth/perfil');
    }
};