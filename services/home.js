const conn = require('../database/connection');

function getCategories(callback){
    conn.query('select * from category',(err,rows,fields)=>{
        if(err) throw err;
        console.log(rows);
        return callback(rows);
    })
}

module.exports.getCtgry = getCategories;