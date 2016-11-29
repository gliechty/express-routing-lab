//Did you use npm install to
//add all these packages
//to our project?
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

// How do we 'require' the candyRouter file?
var candyRouter = require('./candyRouter');

app.use(bodyParser.json());

//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use
app.use('/candy', candyRouter);

app.listen(port);