const bodyParser = require('body-parser');
const express = require('express');
const Pool = require('pg').Pool;
const ejs = require('ejs');

// app
var Router = express.Router();
const app = express();
app.set("view engine", 'ejs');
app.set('views', './views');
app.use()

Router.get('/authenticate', (req, res) => {
    res.render('index.ejs')
})

module.exports = Router;
