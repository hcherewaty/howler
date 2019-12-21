'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

//routes

//error handling: if these routes can't be reached 👆, run this function:
app.use(function(req, res, next){
    let err = new Error('Oops! Page not found.')
    err.status = 404;
    next(err);
});

app.listen(PORT, function(){
    console.log(`Server is running on Port ${PORT}! 🏃‍♀️`);
});