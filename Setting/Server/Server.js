const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const Routers = require('./Router');
app.set('trust proxy', 1);
app.set('view engine', 'ejs');
app.set('View', './View');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../View/Page/")));
app.use(express.static(path.join(__dirname, "../../View/Src/")));
app.use(express.static(path.join(__dirname, "../../node_modules/")));
app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(Routers);

const PORT = process.env.PORT || 3005
app.listen(PORT, (error)=>{
    if(error) console.log('Error ao iniciar servidor.');
    else console.log('Servidor rodando: localhost:',PORT);
});

module.exports = app;