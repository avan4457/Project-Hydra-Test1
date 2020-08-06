const express = require('express');
const home = require('../services/productServices');
const product = require('../services/productServices');
const parser = require('body-parser');

let router = express.Router();

router.use(parser.urlencoded({extended:false}));

router.use(parser.json());

router.get('/',(req,res)=>{
    product.getCtgry((rows)=>{
    res.render('index',{titlehead:'Categories', Data:rows});
    })
})

router.get('/addProduct', (req,res)=>{
    let sub;
    product.getSub((fields)=>{
        sub = fields;
    })
    product.getCtgry((rows)=>{
        res.render('addProduct',{titlehead:'Categories', Data:rows, SubData:sub});
    })
})

router.post('/form-login-action',(req,res)=>{
    console.log(req.body.submit);
    if(req.body.submit == 'Register'){
        res.send('Register selected');
    } 
    else
        res.send('Login pressed');
})

module.exports = router;