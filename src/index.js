const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');//
const session = require('express-session');

const MySQLStore = require('express-mysql-session') (session);//
const { database } = require('./keys');//llamando a la bd
const passport =  require('passport');

//inicializacion 
const app = express();
require('./lib/passport');


//setting//configuraciones --- en que puerto va a funcionar el servidor 
app.set('port', process.env.PORT || 4000); //si existe un puerto que se use de lo contrario se toma el 4000
app.set('views', path.join(__dirname, 'views')); //le digo al programa donde esta la carpeta views
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.hbs', engine({
    defaultLayout: 'main', //archivo por defecto
    layoutsDir: path.join(app.get('views'), 'layouts'),  //join junta directorios //concatenado con layouts
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs', //esta funcion esta en la carpeta lib en handlebars
    helpers: require('./lib/handlebars') //el motor 

})); //esto es para las vista de la pagina //en la carpeta layouts
app.set('view engine', '.hbs'); //el motor para utiliza el hbs




//middlewares //para peticiones de usuario

app.use(session({
   secret: 'textosecreto',
   resave: false,
    saveUninitialized: false,
   store: new MySQLStore (database)
}));
app.use(flash ());//
app.use(morgan('dev'));//mesaje por consola //que llega al servidor 
app.use(express.urlencoded({extended: false}));
app.use(express.json()); //para utilizar el json 
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('img'));





//global variables //que variables pueden ser accedidas desde la aplicacion 
app.use((req, res, next) => {
     app.locals.success = req.flash('success');
     app.locals.message = req.flash('message');//
     app.locals.user = req.user;
    next(); //toma la info del user y la redireciona para continuar 

});


//Routes // se define las URL que hacen cuando se visite 
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/mainpage', require('./routes/mainpage'));
app.use('/mainpage', require('./routes/stock'));//se agregan las rutas para que la pagina pueda hacer el get desde una nueva vista
app.use('/links', require('./routes/links')); // estos codigo van a dar error si estan vacias las rutas 
app.use('/links', require('./routes/producto'));
app.use('/cliente', require('./routes/cliente'));
app.use('/auth', require('./routes/perfil'));
app.use('/static', express.static('public'))


//Public // todo el codigo que el navegador puede acceder //carpeta de css, cliente


//Starting the server 
app.listen(app.get('port'), () => { //utiliza la sintaxis del puerto anterior
    console.log('Server on port', app.get('port'));
}); //servidor funcionando

//RUTA DE IMAGENES 

