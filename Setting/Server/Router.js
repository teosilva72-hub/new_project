const express = require('express');
const app = express.Router();
const Index = require('../../Controller/Index/RouterIndex');
const User = require('../../Controller/User/RouterUser');
const Job = require('../../Controller/Job/RouterJob');
const Login = require('../../Controller/Login/RouterLogin')

app.use(Index, Login, User, Job);

module.exports = app;