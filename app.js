 /*requerimiento de paquetes y rutas*/

const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const methodOverride = require ("method-override");


/*requerimiento de rutas */ 
var routeMain = require ("./src/routes/main");
var routeProduct = require ("./src/routes/products");
var routeUsers = require ("./src/routes/users");

//servidor// 
app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});


/*rutas raices */
app.use ("/", routeMain);
app.use ("/products", routeProduct);
app.use ("/users", routeUsers);



/*view engine setup*/ 
app.set("views", path.join(__dirname, "views"));
app.set ('view engine', 'ejs'); 


// middlewares
app.use(express.static('public'));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended:false}));
app.use(express.json());

//const express = require("express"); // MODULO EXPRESS
//const app = express(); // MODULO EXPRESS EN FUNCIONALIDAD EN APP.JS
//const path = require("path"); //  MODULO PATH
//app.use(express.static("./Public")); // CSS
//var methodOverride = require('method-override');

//console.log(__dirname);

//app.listen(3030, () => {
 // console.log("Servidor funcionando");
//});

//app.use(methodOverride('_method'));


//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, '/src/views')); // Define la ubicación de la carpeta de las Vistas

// MVC SYSTEM
  
// Main Routes
//const rutasMain = require("./src/routes/main");
//app.use('/', rutasMain);

// Users Routes
//const rutasUsers = require("./src/routes/users");
//app.use('/users', rutasUsers);
//Registro Routes
//const rutasRegistro = require("./src/routes/registro");
//app.use('/registro', rutasRegistro);
//Products Routes
//const rutasProductos = require("./src/routes/products");
//app.use('/products', rutasProductos);
//Campos Routes
//const rutasCampos = require("./src/routes/campos");
//app.use('/campos', rutasCampos);
//Lecciones Routes
//const rutasLecciones = require("./src/routes/lecciones");
//app.use('/lecciones', rutasLecciones);
