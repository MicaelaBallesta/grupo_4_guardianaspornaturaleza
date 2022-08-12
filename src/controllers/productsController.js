const express = require ("express");


const productController = {

    listado: (req,res) => {
        res.render ("tienda")

    },
    detail: (req,res) => {
        res.render ("productDetail")

    },
    cart: (req,res) => {
        res.render ("productCart")

    },
    create:(req,res) => {
        res.render ("creacionProducto")

    },
    edit:(req,res) => {
        res.render ("edicionProducto")

    },

    delete:(req,res) => {
        res.redirect("index")
    },


}

module.exports = productController;