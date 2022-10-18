const express = require('express');
const app = express.Router();
const Controller = require('./ControllerIndex');

app.get('/', async (req, res)=>{
    try{
        return await res.render('../View/Page/Index/Index');
    }catch(error){
        return await res.render('../View/Page/Index/Index');
        console.log(error);
    }
})

module.exports = app;