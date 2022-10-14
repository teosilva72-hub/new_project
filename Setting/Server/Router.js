const express = require('express');
const app = express.Router();
const Index = require('../../Controller/Index/RouterIndex');
const User = require('../../Controller/User/RouterUser');

app.use(Index, User);

module.exports = app;