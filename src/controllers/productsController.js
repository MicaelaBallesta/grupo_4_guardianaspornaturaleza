const path = require('path');
const fs = require('fs');
const { render } = require('ejs');

const productsFilePath = path.join(__dirname, '../dataBase/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const listaProductsFilePath = path.join(__dirname, '../dataBase/listaproductos.json');
const listaProductos = JSON.parse(fs.readFileSync(listaProductsFilePath, 'utf-8'));

const categoriasFilePath = path.join(__dirname, '../dataBase/categorias.json');
const categorias = JSON.parse(fs.readFileSync(categoriasFilePath, 'utf-8'));

const marcasFilePath = path.join(__dirname, '../dataBase/marcas.json');
const marcas = JSON.parse(fs.readFileSync(marcasFilePath, 'utf-8'));

const modelosFilePath = path.join(__dirname, '../dataBase/modelos.json');
const modelos = JSON.parse(fs.readFileSync(modelosFilePath, 'utf-8'));

const agarreFilePath = path.join(__dirname, '../dataBase/agarre.json');
const agarre = JSON.parse(fs.readFileSync(agarreFilePath, 'utf-8'));

const tipodevaraFilePath = path.join(__dirname, '../dataBase/tipodevara.json');
const tipodevara = JSON.parse(fs.readFileSync(tipodevaraFilePath, 'utf-8'));

const tipodebolsaFilePath = path.join(__dirname, '../dataBase/tipodebolsa.json');
const tipodebolsa = JSON.parse(fs.readFileSync(tipodebolsaFilePath, 'utf-8'));

const hierrostipodeconjuntoFilePath = path.join(__dirname, '../dataBase/hierrostipodeconjunto.json');
const hierrostipodeconjunto = JSON.parse(fs.readFileSync(hierrostipodeconjuntoFilePath, 'utf-8'));

const descuentoFilePath = path.join(__dirname, '../dataBase/descuentos.json');
const descuentos = JSON.parse(fs.readFileSync(descuentoFilePath, 'utf-8'));

const tallesFilePath = path.join(__dirname, '../dataBase/talles.json');
const talles = JSON.parse(fs.readFileSync(tallesFilePath, 'utf-8'));

const colorFilePath = path.join(__dirname, '../dataBase/color.json');
const color = JSON.parse(fs.readFileSync(colorFilePath, 'utf-8'));

const camposFilePath = path.join(__dirname, '../dataBase/campos.json');
const campos = JSON.parse(fs.readFileSync(camposFilePath, 'utf-8'));

const leccionesFilePath = path.join(__dirname, '../dataBase/lecciones.json');
const lecciones = JSON.parse(fs.readFileSync(leccionesFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
    carritoCompra: (req,res) => {
        res.render(path.join(__dirname, '../views/carrito-de-compras.ejs'))
    },
    create:(req,res) =>{
        let data = {
            listaproductos: listaProductos,
            categorias: categorias,
            marcas: marcas,
            modelos: modelos,
            agarre: agarre,
            tipodevara: tipodevara,
            tipodebolsa: tipodebolsa,
            hierrostipodeconjunto: hierrostipodeconjunto,
            descuentos: descuentos,
            talles: talles,
            color: color,
            campos: campos,
            lecciones: lecciones

        }
        res.render('products-create', { data })
    },

    detalleproducto:(req,res) =>{
        let productDetail = productos.find(e => e.id === +req.params.id)
        let data = {
            producto: productDetail,
            agarre: agarre,
            tipodevara: tipodevara,
            tipodebolsa: tipodebolsa,
            hierrostipodeconjunto: hierrostipodeconjunto,
            talles: talles,
            color: color
        };

            //categoría
            let categoriaId = productDetail.categoria;
            let category_item = categorias.filter(category => category.id == categoriaId)
            category_item.forEach(item_ => {
                data.category_selected = item_.nombre
            })

            //producto
            let productoId = productDetail.producto;
            let producto_item = listaProductos.filter(listaproducto => listaproducto.id == productoId)
            producto_item.forEach(item_ => {
                data.producto_selected = item_.nombre
            })
            //marca
            let marcaId = productDetail.marca;
            let marca_item = marcas.filter(marca => marca.id == marcaId)
            marca_item.forEach(item_ => {
                data.marca_selected = item_.nombre
            })
            //modelo
            let modeloId = productDetail.modelo;
            let modelo_item = modelos.filter(modelo => modelo.id == modeloId)
            modelo_item.forEach(item_ => {
                data.modelo_selected = item_.nombre
            })
            //talles
            let talleId = productDetail.talle;
            let talle_item = talles.filter(talle => talle.id == talleId)
            talle_item.forEach(item_ => {
                data.talle_selected = item_.nombre
            })
              //agarre
              let agarreId = item.agarre;
              let agarre_item = agarre.filter(agarre => agarre.id == agarreId)
              agarre_item.forEach(item_ => {
                data.agarre = item_.nombre
              })
            //tipo de vara
            let tipodevaraId = item.tipodevara;
            let tipodevara_item = tipodevara.filter(tipodevara => tipodevara.id == tipodevaraId)
            tipodevara_item.forEach(item_ => {
                data.tipodevara_selected = item_.nombre
            })
             //tipo de bolsa
             let tipodebolsaId = item.tipodebolsa;
             let tipodebolsa_item = tipodebolsa.filter(tipodebolsa => tipodebolsa.id == tipodebolsaId)
             tipodebolsa_item.forEach(item_ => {
                data.tipodebolsa_selected = item_.nombre
             })
        

        res.render(path.join(__dirname, '../views/detalle-producto.ejs'), { data, toThousand })
    },
    delete: (req,res) => {
        let index = productos.findIndex(e => e.id === +req.params.id)
        productos.splice(index, 1); 
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 3))

        res.redirect("/products/create");
    },
    edit:(req,res) =>{
        let productEdit = productos.find(e => e.id === +req.params.id)
        let data = {
            producto: productEdit, //este es el item de productos.json que se busca en la línea de arriba por el id
            listaproductos: listaProductos,
            categorias: categorias,
            marcas: marcas,
            modelos: modelos,
            agarre: agarre,
            tipodevara: tipodevara,
            tipodebolsa: tipodebolsa,
            hierrostipodeconjunto: hierrostipodeconjunto,
            descuentos: descuentos,
            talles: talles,
            color: color,
            campos: campos,
            lecciones: lecciones

       }
        res.render('products-edit', { data })
    },
    update: (req, res) => {
        let productUpdate = productos.find(e => e.id === + req.params.id)
        if(productUpdate) // esto para saber si existe o no
        {
            productUpdate.producto = req.body.producto;
            productUpdate.categoria = req.body.categoria;
            productUpdate.marca = req.body.marca;
            productUpdate.modelo = req.body.modelo;
            productUpdate.agarre = req.body.agarre;
            productUpdate.tipodevara = req.body.tipodevara;
            productUpdate.tipodebolsa = req.body.tipodebolsa;
            productUpdate.hierrostipodeconjunto = req.body.hierrostipodeconjunto;
            productUpdate.descuento = req.body.descuento;
            productUpdate.precio = req.body.precio;
            productUpdate.talle = req.body.talle;
            productUpdate.stock = req.body.stock;
            productUpdate.color = req.body.color;
            productUpdate.campos = req.body.campos;
            productUpdate.lecciones = req.body.lecciones;
            productUpdate.image = req.file ? req.file.filename : productUpdate.image
        }

        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 3))
        res.redirect("/products/edit/" + req.params.id);
        //1 hay que buscar el producto
        //2 editar sus propiedades
        //3 actualizar el archivo productos.json con los nuevos datos

    },
    showProductCategory: (req,res) => {
        // categoria que llega por parametro-url
        let category = req.params.category
        // categoria que coincide parametro con el valor de la categoria en json
        let productCategory = productos.filter(product => product.categoria == category)
        
        productCategory.forEach(item => {
            //categoría
            let categoriaId = item.categoria;
            let category_item = categorias.filter(category => category.id == categoriaId)
            category_item.forEach(item_ => {
                item.category_selected = item_.nombre
            })

            //producto
            let productoId = item.producto;
            let producto_item = listaProductos.filter(listaproducto => listaproducto.id == productoId)
            producto_item.forEach(item_ => {
                item.producto_selected = item_.nombre
            })
            //marca
            let marcaId = item.marca;
            let marca_item = marcas.filter(marca => marca.id == marcaId)
            marca_item.forEach(item_ => {
                item.marca_selected = item_.nombre
            })
            //modelo
            let modeloId = item.modelo;
            let modelo_item = modelos.filter(modelo => modelo.id == modeloId)
            modelo_item.forEach(item_ => {
                 item.modelo_selected = item_.nombre
            })
              //agarre
              let agarreId = item.agarre;
              let agarre_item = agarre.filter(agarre => agarre.id == agarreId)
              agarre_item.forEach(item_ => {
                   item.agarre = item_.nombre
              })
            //tipo de vara
            let tipodevaraId = item.tipodevara;
            let tipodevara_item = tipodevara.filter(tipodevara => tipodevara.id == tipodevaraId)
            tipodevara_item.forEach(item_ => {
                item.tipodevara_selected = item_.nombre
            })
             //tipo de bolsa
             let tipodebolsaId = item.tipodebolsa;
             let tipodebolsa_item = tipodebolsa.filter(tipodebolsa => tipodebolsa.id == tipodebolsaId)
             tipodebolsa_item.forEach(item_ => {
                 item.tipodebolsa_selected = item_.nombre
             })
        });
        
        res.render(path.join(__dirname, '../views/productos.ejs'), {productCategory, toThousand})
    },
    showProductSubcategory: (req,res) => {
        let category = req.params.category
        let subcategory = req.params.subcategory
        let productCategory = productos.filter(product => product.categoria == category && product.producto == subcategory)
       
        productCategory.forEach(item => {
            //categoría
            let categoriaId = item.categoria;
            let category_item = categorias.filter(category => category.id == categoriaId)
            category_item.forEach(item_ => {
                item.category_selected = item_.nombre
            })

            //producto
            let productoId = item.producto;
            let producto_item = listaProductos.filter(listaproducto => listaproducto.id == productoId)
            producto_item.forEach(item_ => {
                item.producto_selected = item_.nombre
            })
            //marca
            let marcaId = item.marca;
            let marca_item = marcas.filter(marca => marca.id == marcaId)
            marca_item.forEach(item_ => {
                item.marca_selected = item_.nombre
            })
            //modelo
            let modeloId = item.modelo;
            let modelo_item = modelos.filter(modelo => modelo.id == modeloId)
            modelo_item.forEach(item_ => {
                 item.modelo_selected = item_.nombre
            })
              //agarre
              let agarreId = item.agarre;
              let agarre_item = agarre.filter(agarre => agarre.id == agarreId)
              agarre_item.forEach(item_ => {
                   item.agarre = item_.nombre
              })
            //tipo de vara
            let tipodevaraId = item.tipodevara;
            let tipodevara_item = tipodevara.filter(tipodevara => tipodevara.id == tipodevaraId)
            tipodevara_item.forEach(item_ => {
                item.tipodevara_selected = item_.nombre
            })
             //tipo de bolsa
             let tipodebolsaId = item.tipodebolsa;
             let tipodebolsa_item = tipodebolsa.filter(tipodebolsa => tipodebolsa.id == tipodebolsaId)
             tipodebolsa_item.forEach(item_ => {
                 item.tipodebolsa_selected = item_.nombre
             })
        });
        res.render(path.join(__dirname, '../views/productos.ejs'), {productCategory, toThousand})
    },
    store: (req, res) => {
        let image

        if(req.files[0] != undefined){
            image = req.files[0].filename
        } else {
            image = 'default-image.png'
        }
        let indexId = 0;
        if(productos.length != 0) {
            indexId = productos[productos.length - 1].id;
        }
        let newProduct = {
            id: indexId + 1,
            ...req.body,
            image: image
        };
        productos.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '));
        res.redirect('/products/create');
    }
};
module.exports = productsController;