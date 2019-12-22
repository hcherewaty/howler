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

catUserSchema.pre('save', async function(next){
    try {
        if(!this.isModified('password')){
            return next();
        }
        let hashedpassword = await bcrypt.hash(this.password, 10);
        this.password = hashedpassword;
    } catch(err) {
        return next(err);
    }
});

catUserSchema.method.comparePasswords = async function(userPasswordInput, next){
    try {
        let isMatch = await bcrypt.compare(userPasswordInput, this.password);
        return isMatch;
    } catch(err){
        return next(err);
    }
};

const CatUser = mongoose.model('CatUser', catUserSchema);

module.exports = CatUser;