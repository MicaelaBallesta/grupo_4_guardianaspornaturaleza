const express = require("express"); // MODULO EXPRESS
const app = express(); // MODULO EXPRESS EN FUNCIONALIDAD EN APP.JS
const path = require("path"); //  MODULO PATH
app.use(express.static("./public")); // CSS
var methodOverride = require('method-override');

app.listen(4000, () => {
  console.log("Servidor funcionando");
});

app.use(methodOverride('_method'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views')); // Define la ubicación de la carpeta de las Vistas


// MVC SYSTEM

// Main Routes

const rutasMain = require("./src/routes/main.js");
app.use('/', rutasMain);

// Users Routes
const rutasUsers = require("./src/routes/users.js");
app.use('/users', rutasUsers);
//Registro Routes
const rutasRegistro = require("./src/routes/registro.js");
app.use('/registro', rutasRegistro);
//Products Routes
const rutasProductos = require("./src/routes/products.js");
app.use('/products', rutasProductos);
