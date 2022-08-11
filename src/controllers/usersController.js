const express = require ("express");
const express = express();


const usersController = {

    login:(req,res) => {
        res.render ("login")
    },
    registracion:(req,res) => {
        res.render ("register")
    },
    
 
}


module.exports = usersController;