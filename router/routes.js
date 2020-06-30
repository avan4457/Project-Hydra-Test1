const express = require('express');

let router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
})

router.post('/login',(req,res)=>{
    res.render('home');
})

module.exports = router;