let mongoose = require('mongoose');

// user's db schema

let userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    telephone: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    }
});

let users = module.exports = mongoose.model('agencys', userSchema);