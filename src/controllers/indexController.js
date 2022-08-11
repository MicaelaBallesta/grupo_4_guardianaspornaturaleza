const express = require ("express");


const indexController = {
    index:(req,res) => {
        res.render ("index")
    },
    catalogo:(req,res) => {
        res.render ("catalogo")

    },
    tienda: (req,res) => {
        res.render ("tienda")
    },
    impacto: (req,res) => {
        res.render ("impacto")
    },
    nosotras: (req,res) => {
        res.render ("nosotras")
    },
}

module.exports = indexController;