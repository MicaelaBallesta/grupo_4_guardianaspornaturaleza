const path = require('path');

const mainController = {
    index: (req,res) => {
        res.render(path.join(__dirname, '../views/index.ejs'))
    },
    head: (req,res) => {
        res.render(path.join(__dirname, '../views/partials/head.ejs'))
    },
    header: (req,res) => {
        res.render(path.join(__dirname, '../views/partials/header.ejs'))
    },
    footer: (req,res) => {
        res.render(path.join(__dirname, '../views/partials/footer.ejs'))
    }
};

module.exports = mainController;