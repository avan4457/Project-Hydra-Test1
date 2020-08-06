const conn = require('../database/connection');

function getCategories(callback){
    conn.query('select * from category',(err,rows,fields)=>{
        if(err) throw err;
        return callback(rows);
    })
}

function getSubCategories(callback){
    conn.query('select * from toy,gift_item,bag,baby_item,ride_on_car_bike',(err,rows,fields)=>{
        if(err) throw err;
        return callback(fields);
    })
}

module.exports.getCtgry = getCategories;
module.exports.getSub = getSubCategories;