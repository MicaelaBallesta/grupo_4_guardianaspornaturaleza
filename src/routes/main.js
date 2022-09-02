const express = require('express');
const app = express();
var router = express.Router();

const mainController = require('../controllers/mainController');
// const { get } = require('./users');


router.get ('/', mainController.index);
/* Mica: se supone que se envian con el include y js no haria falta o no? 
router.get('/head' , mainController.head);
router.get('/header' , mainController.header);
router.get('/footer' , mainController.footer);  lo de abajo si estaba comentado */

// router.get('/pruebaSession', function(req, res){
//     if(req.session.numeroVistas == undifined){
//         req.session.numeroVistas = 0;
//     }
//     req.session.numeroVistas++;
//     res.send('Session tiene el numero:' + req.session.numeroVistas);
// });

module.exports = router;
