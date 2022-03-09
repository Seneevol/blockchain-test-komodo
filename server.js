/*
 *    Komodo
 * ************* */

require('dotenv').config()

const config = {
  rpchost: "localhost", // to put in the .env
  rpcport: 13618, // to put in the .env
  rpcuser: "user3984667845", // to put in the .env
  rpcpassword: "pass43f6ad83c84de76696c82cda7b641dc393c326585c638d3a2ed9735a3676115f80" // to put in the .env
};

/*
 *    Server
 * ************* */ 
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { engine } = require('express-handlebars')
const util = require('util')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlebars
app.set('view engine', 'hbs')
app.set('views', './views')
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main'
}))

// Cors (from front-end application)
app.use(cors({
  origin: ['http://localhost:8080'],
  methods: ['GET'],
  credentials: true
}))

module.exports = {
  config
}

// Router HTTP
const ROUTER = require('./router')
app.use('/', ROUTER)


const port = process.env.PORT || 7777;
app.listen(port, () => console.log(`Server running on port ${port}`));