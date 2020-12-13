const db = require('../database/connection');

const add_Product =  (req,res)=>{
        res.render('addProduct',{title:'Add Product'});
}

const add_new = (req,res) => {
    db.collection('products').doc().set(req.body)
    .then((result)=>{
        res.redirect('/');
    })
    .catch((err) => {
        console.log(err)
    });
}


module.exports = {
    add_Product,
    add_new
}