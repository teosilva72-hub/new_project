const express = require('express');
const app = express.Router();
const Controller = require('./ControllerIndex');

app.get('/', async(req, res)=>{
    try{
        res.cookie('auth', '')
        return await res.render('../View/Page/Index/Index');
    }catch(error){
        res.status(500);
        return await res.render('../View/Page/Index/Index');
    }
});

app.post('/login', async(req, res)=>{
    const Index = new Controller();
    const checked = await Index.Verify(req.body.email, req.body.senha);
    if(checked[0]){
        res.status(200);
        res.cookie('auth', checked[1]);
        res.redirect('/user')
    }else{
        res.status(400);
        return await res.render('../View/Page/Index/Index');
    }
});

module.exports = app;