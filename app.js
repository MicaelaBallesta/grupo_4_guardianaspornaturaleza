const express = require('express');
const app = express();
const path = require('path')
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/login", (req,res) => {
let login = path.join(__dirname, "./views/login.html") 
res.sendFile(login) }); 

app.get("/productCart.html", (req,res) => {
let productCart = path.join(__dirname, "./views/productCart.html") 
res.sendFile(productCart) }); 

app.get("/productDetail.html", (req,res) => {
let productDetail = path.join(__dirname, "./views/productDetail.html") 
res.sendFile(productDetail) }); 

app.get("/register.html", (req,res) => {
let register = path.join(__dirname, "./views/register.html") 
res.sendFile(register) }); 
    