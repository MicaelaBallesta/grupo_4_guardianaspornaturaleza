/*requerimiento de paquetes y rutas*/

const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');


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

