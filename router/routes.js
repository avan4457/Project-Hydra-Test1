const express = require('express');
const productController = require('../controllers/productServices');
const parser = require('body-parser');

let router = express.Router();

router.use(parser.urlencoded({extended:false}));

router.use(parser.json());

router.get('/',(req,res)=>{
    res.render('index', {title: 'Home'});
})

router.get('/addProduct', productController.add_Product);

router.post('/add-new', productController.add_new);

module.exports = router;