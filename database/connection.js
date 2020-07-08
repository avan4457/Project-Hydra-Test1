const conn = require('mysql');

let db = conn.createConnection({
    host:'localhost',
    user:'root',
    password:'Avan@sql123',
    database:'cityson'
});

db.connect((err)=>{
    if(err) throw err;
    console.log('Db Connected');
});

module.exports = db;

