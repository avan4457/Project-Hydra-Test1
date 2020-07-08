const exp = require('express'); //importing express module
const port = process.env.PORT || 3000; //defining port
const router = require('./router/routes'); //importing router

let app = exp(); // creating express application

app.set('view engine','ejs'); // defining the view engine that is being used

app.use('/',router); // using routes

app.use(exp.static(__dirname + '/public')); // defining static files that are used in public folder

app.listen(port,(err)=>{ // Starting server and listen through the defined port
    if(err) throw err;
    console.log('Listening on port '+ port);
})



