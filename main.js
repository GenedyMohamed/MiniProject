
//require depenciess
var express = require('express');
var router = require('./app/routes');
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var DB_URI = "mongodb://localhost:27017/portfolio";
// var cookieParser = require('cookie-parser');
// var sessions = require('express-session');
// var session = require('client-sessions');
var app = express();
var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

// configure app
// app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));

// mongoose.connect(DB_URI);
// app.use(router);
// app.use(cookieParser());
// app.use(session({secret: "Shh, its a secret!"}));

// app.use(session({
//   cookieName: 'session',
//   secret: 'random_string_goes_here',
//   duration: 30 * 60 * 1000,
//   activeDuration: 5 * 60 * 1000,
// }));

// start the server

app.listen(port, function(){
    console.log("server is listening on port 8080");
})