const express = require ("express");


const productController = {
    index:(req,res) => {
        res.send ("tienda")
    },
    catalogo:(req,res) => {
        res.send ("catalogo")

    },
    cart: (req,res) => {
        res.send ("productCart")
    },
    detail: (req,res) => {
        res.send ("productDetail")

    },
    cart: (req,res) => {
        res.send ("productCart")

    },
    edit:(req,res) => {
        res.send ("edicionProducto")

    },
    create:(req,res) => {
        res.send ("creacionProducto")

    },


}