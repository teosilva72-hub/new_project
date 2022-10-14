const express = require('express');
const app = express.Router();
const {eAdmin} = require('../middleware/Auth');
const Controller = require('./ControllerUser');

app.get('/user', eAdmin, async (req, res)=>{
    try{
        
        res.status(200);
        return res.render('../View/Page/user/user');
    }catch(error){
        res.status(500);
        return res.render('../View/Page/user/user');
    }
});

app.get('/register', async(req, res)=>{
    try{
        res.status(200);
        return res.render('../View/Page/user/registerUser');
    }catch(error){
        res.status(500);
        return res.render('../View/Page/user/registerUser');
    }
});

app.post('/registerUser', async(req, res)=>{
    try{
        const User = new Controller();
        const checked = await User.Register(req.body);
        console.log(checked)
        if(checked){
            res.status(201);
            res.redirect('/');
        }else{
            res.status(400);
        }
    }catch(error){
        res.status(500);
    }
});

module.exports = app;