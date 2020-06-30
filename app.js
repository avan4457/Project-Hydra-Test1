const exp = require('express'); //importing express module
const port = process.env.PORT || 3000; //defining port
const router = require('./router/routes'); //importing router

let app = exp(); 

app.set('view engine','ejs');

app.use('/',router);

app.listen(port,(err)=>{
    if(err) throw err;
    console.log('Listening on port '+ port);
})



