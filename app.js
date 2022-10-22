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

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/register', userRouter);
app.use('/login', userRouter);

// ************ Set the server to listen - (don't touch) ************
app.listen(3003, () => {
  console.log("Servidor funcionando en http://localhost:3003")
})




/* const express = require('express');
const app = express();
const path = require('path')
app.use(express.static('public'));

/*let rutasProductos = require ('./src/routes/products');

app.set ('view engine', 'ejs'); 


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

// app.get('/', (req,res)=>{
//    res.sendFile(__dirname + '/views/index.html');
// }); 

// para cada uno de los archivos de rutas que vayamos haciendo. ej Productos/crear reaccionan aca. 
// No olvidar app.use y el requiere correspondiente: ej: let rutasProductos = require ('./routes/productos.js');

/*app.use ('/productos', rutasProductos);

app.get('/', (req,res)=>{
	res.render(__dirname + '/views/index.ejs');
	 }); 

 

app.get("/productsCreateForm", (req,res) => {
    let productsCreateForm = path.join(__dirname, '/views/productsCreateForm.ejs') 
    res.render(productsCreateForm) }); 
        




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


     app.get('/create', (req,res)=>{
        res.render(__dirname + '/views/productsCreateForm.ejs');
         }); 



         
app.get("/productos", (req,res) => {
    let listadoProductos = path.join(__dirname, '/views/listadoProductos.ejs') 
    res.render(listadoProductos) }); 


    app.get("/productsEditForm", (req,res) => {
        let productsEditForm = path.join(__dirname, '/views/productsEditForm.ejs') 
        res.render(productsEditForm) }); 


        app.get("/listadoProductos", (req,res) => {
            let listadoProductos = path.join(__dirname, '/views/listadoProductos.ejs') 
            res.render(listadoProductos) }); */ 

