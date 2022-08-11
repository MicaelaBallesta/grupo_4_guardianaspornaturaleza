/*requerimiento de paquetes y rutas*/

const express = require('express');
const app = express();
const path = require('path');


/*requerimiento de rutas */ 
var routeMain = require ("./routes/main.js");
var routeProduct = require ("./routes/products.js");
var routeUsers = require ("./routes/users.js");


/*rutas raices */
app.use ("/", routeMain);
app.use ("/products", routeProduct);
app.use ("/users", routeUsers);



/*view engine setup*/ 
app.set("views", path.join(__dirname, "views"));
app.set ('view engine', 'ejs'); 

//servidor// 
app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});


// middlewares
app.use(express.static('public'));

