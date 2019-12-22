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

//before saving to db, check if pw is changed and if not save, otherwise hash pw.
dogUserSchema.pre('save', async function(next){
    try {
        if(!this.isModified('password')){
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    } catch(err) {
        return next(err);
    }
});

//compare pw from user with pw saved in db.
dogUserSchema.method.comparePasswords = async function(userPasswordInput, next){
    try {
        let isMatch = await bcrypt.compare(userPasswordInput, this.password);
        return isMatch;
    } catch(err) {
        return next(err);
    }
};

const DogUser = mongoose.model('DogUser', dogUserSchema);

module.exports = DogUser;