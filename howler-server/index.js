'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const errorHandler = require('./handlers/error');

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

//routes

//error handling - missing route: if these routes can't be reached 👆, run this function:
app.use(function(req, res, next){
    let err = new Error('Oops! We could not find that page. 🕵️‍♀️')
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`Server is running on Port ${PORT}! 🏃‍♀️`);
});