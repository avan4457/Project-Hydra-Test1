const express = require('express');
const home = require('../services/home');
const parser = require('body-parser');

let router = express.Router();

router.use(parser.urlencoded({extended:false}));

router.use(parser.json());

router.get('/',(req,res)=>{
    res.render('index');
})

router.post('/form-login-action',(req,res)=>{
    console.log(req.body.submit);
    if(req.body.submit == 'Register'){
        res.send('Register selected');
    } 
    else
        res.send('Login pressed');
})

router.get('/',(req,res)=>{
        home.getCtgry((rows)=>{
            res.render('home',{titlehead:'Categories', Data:rows});
        })
});

module.exports = router;