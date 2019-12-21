'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const catUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true
    },
    learning: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

const CatUser = mongoose.model('CatUser', catUserSchema);

module.exports = CatUser;