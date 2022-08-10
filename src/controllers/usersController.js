const express = require ("express");
const express = express();


const usersController = {

    login:(req,res) => {
        res.send ("login")
    },
    registracion:(req,res) => {
        res.send ("register")
    },
    
 
}


module.exports = usersController;