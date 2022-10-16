// ************ Require's ************
const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
/*app.use(express.static(path.join(__dirname, './public')));*/ // Necesario para los archivos estáticos en el folder /public
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })); // Para que pueda recibir el body de los formularios??
app.use(express.json()); // Para que pueda recibir el body de los formularios??
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs'); // Define que el motor que utilizamos es EJS
app.set('views', path.join(__dirname, './src/views')); // Define la ubicación de la carpeta de las Vistas

// ************ Route System require and use() - (don't touch) ************
const mainRouter = require('./src/routes/main'); // Rutas main
const productsRouter = require('./src/routes/products'); // Rutas /products
const userRouter = require('./src/routes/users'); 

app.use('/products', productsRouter);
app.use('/', mainRouter);
app.use('/register', userRouter);

// ************ Set the server to listen - (don't touch) ************
app.listen(3003, () => {
  console.log("Servidor funcionando en http://localhost:3003")
})

