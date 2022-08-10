//requerimiento de paquetes y rutas// 

const express = require('express');
const app = express();
const path = require('path')



app.set ('view engine', 'ejs'); 

//servidor// 
app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

// app.get('/', (req,res)=>{
//    res.sendFile(__dirname + '/views/index.html');
// }); 

// middlewares
app.use(express.static('public'));

//rutas 
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
    let register = path.join(__dirname, '/views/catalogo.ejs') 
    res.render(catalogo) }); 

app.get("/register", (req,res) => {
     let register = path.join(__dirname, '/views/impacto.ejs') 
     res.render(impacto) }); 