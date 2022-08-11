const express = require ("express");


const productController = {
    index:(req,res) => {
        res.send ("tienda")
    },
    catalogo:(req,res) => {
        res.send ("catalogo")

    },
    detail: (req,res) => {
        res.send ("productDetail")

    },
    cart: (req,res) => {
        res.send ("productCart")

    },
    create:(req,res) => {
        res.send ("creacionProducto")

    },
    edit:(req,res) => {
        res.send ("edicionProducto")

    },

    delete:(req,res) => {
        res.redirect("index")
    },


}

module.exports = productController;