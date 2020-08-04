const conn = require('mysql');

let db = conn.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'cityson'
});

db.connect((err)=>{
    if(err) throw err;
    console.log('Db Connected');
});

module.exports = db;

