const express = require ("express");


const indexController = {
    index:(req,res) => {
        res.send ("index")
    },
    catalogo:(req,res) => {
        res.send ("catalogo")

    },
    tienda: (req,res) => {
        res.send ("tienda")
    },
    impacto: (req,res) => {
        res.send ("impacto")
    },
    nosotras: (req,res) => {
        res.send ("nosotras")
    },
}

module.exports = indexController;