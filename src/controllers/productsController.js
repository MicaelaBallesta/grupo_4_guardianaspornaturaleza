const express = require ("express");


const productController = {

    listado: (req,res) => {
        res.render ("tienda")

    },
    detail: (req,res) => {
        
        
        
        
        res.render ("productDetail")

    },
    
    create:(req,res) => {
        let productoNuevo = {
                nombreProducto:req.body.nombre,
                historia: req.body.historia,
                image: re.body.image,
                comunidad: req.body.categoria,
                categoria: req.body.categoria,
                caracteristicas:req.boy.caracteristicas,
                precio: req.body.precio
        };
        res.send(/creacionProducto, (productoNuevo = {
            nombreProducto:req.body.nombre,
            historia: req.body.historia,
            image: re.body.image,
            comunidad: req.body.categoria,
            categoria: req.body.categoria,
            caracteristicas:req.boy.caracteristicas,
            precio: req.body.precio
    })



        res.render ("creacionProducto")

    },

    save:(req,res) => { 
        
    },

    edit:(req,res) => {
        res.render ("edicionProducto")

    },

    delete:(req,res) => {
        res.redirect("index")
    },


}

module.exports = productController;