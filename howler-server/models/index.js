'use strict';

const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/howler', {
    keepAlive: true,
    useMongoClient: true
});

