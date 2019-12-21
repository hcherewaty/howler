'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const dogUserSchema = new mongoose.Schema({
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
        type: String
    },
    bio: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    facebookUrl: {
        type: String,
        required: false
    },
    instagramUrl: {
        type: String,
        required: false
    },
    youTubeUrl: {
        type: String,
        required: false
    }
});

const DogUser = mongoose.model('DogUser', dogUserSchema);

module.exports = DogUser;