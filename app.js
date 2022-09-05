const express = require("express"); // MODULO EXPRESS
const app = express(); // MODULO EXPRESS EN FUNCIONALIDAD EN APP.JS
const path = require("path"); //  MODULO PATH
app.use(express.static("./public")); // CSS
var methodOverride = require('method-override');

app.listen(3000, () => {
  console.log("Servidor funcionando");
});

app.use(methodOverride('_method'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas


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




//modelo viejo//

app.get('/', (req,res)=>{
	res.render(__dirname + '/views/index.ejs');
	 }); 

// app.get("/login", (req,res) => {
// let login = path.join(__dirname, '/views/login.html') 
// res.sendFile(login) }); 

app.get("/login", (req,res) => {
    let login = path.join(__dirname, '/views/login.ejs') 
    res.render(login) });


// app.get("/productCart", (req,res) => {
// let productCart = path.join(__dirname, '/views/productCart.html') 
// res.sendFile(productCart) }); 

app.get("/productCart", (req,res) => {
    let productCart = path.join(__dirname, '/views/productCart.ejs') 
    res.render(productCart) }); 

// app.get("/productDetail", (req,res) => {
// let productDetail = path.join(__dirname, '/views/productDetail.html') 
// res.sendFile(productDetail) }); 


app.get("/productDetail", (req,res) => {
    let productDetail = path.join(__dirname, '/views/productDetail.ejs') 
    res.render(productDetail) }); 
    

// app.get("/register", (req,res) => {
// let register = path.join(__dirname, '/views/register.html') 
// res.sendFile(register) }); 

app.get("/register", (req,res) => {
    let register = path.join(__dirname, '/views/register.ejs') 
    res.render(register) }); 


app.get("/register", (req,res) => {
     let register = path.join(__dirname, '/views/nosotras.ejs') 
     res.render(nosotras) }); 


app.get("/register", (req,res) => {
      let register = path.join(__dirname, '/views/sobre.ejs') 
      res.render(sobre) }); 

app.get("/register", (req,res) => {
    let register = path.join(__dirname, '/views/catalogo.ejs') 
    res.render(catalogo) }); 

app.get("/register", (req,res) => {
     let register = path.join(__dirname, '/views/impacto.ejs') 
     res.render(impacto) }); 