var express = require("express");
var env = require("./server/config/env/"+process.env.NODE_ENV);
var app = express();
var hbs = require('hbs');

app.set('view engine', 'hbs');
app.engine('html', hbs.__express);

require('./server/hbsRegister')(hbs);

require('./config/express')(app);

app.set('views',  __dirname + '/views');
app.use(express.static( __dirname+'/public'));  

var route = require('./server/router');

app.use(route());

app.listen(3000);
console.log("node server is start!");
