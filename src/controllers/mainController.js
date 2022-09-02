const path = require('path');

const mainController = {
    index: (req,res) => {
        res.render(path.join(__dirname, '../views/index.ejs'))
    }
  /* lo comento por que para mi va por js   
  head: (req,res) => {
        res.render(path.join(__dirname, '../views/partials/head.ejs'))
    },
    header: (req,res) => {
        res.render(path.join(__dirname, '../views/partials/header.ejs'))
    },
    footer: (req,res) => {
        res.render(path.join(__dirname, '../views/partials/footer.ejs'))
    }*/ 
};

module.exports = mainController;