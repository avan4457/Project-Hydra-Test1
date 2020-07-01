const express = require('express');
const home = require('../services/home');

let router = express.Router();

router.get('/form',(req,res)=>{
    res.render('index');
})

router.get('/',(req,res)=>{
        home.getCtgry((rows)=>{
            res.render('home',{titlehead:'Categories', Data:rows});
        })
});

module.exports = router;