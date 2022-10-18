const express = require('express');
const app = express.Router();
const Controller = require('../Login/ControllerLogin');

app.get('/login', async(req, res)=>{
    try{
        res.cookie('auth', '')
        return await res.render('../View/Page/Login/Login');
    }catch(error){
        res.status(500);
        return await res.render('../View/Page/Login/Login');
    }
});

app.post('/login', async(req, res)=>{
    const Login = new Controller();
    const checked = await Login.Verify(req.body.email, req.body.senha);
    if(checked[0]){
        res.status(200);
        res.cookie('auth', checked[1]);
        res.redirect('/user')
    }else{
        res.status(400);
        return await res.render('../View/Page/Login/login');
    }
});

module.exports = app;