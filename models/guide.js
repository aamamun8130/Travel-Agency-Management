let mongoose = require('mongoose');

// guide's db schema

let guideSchema = mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    email: {
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
    address: {
        type: String,
        required: false
    }
});

let guide = module.exports = mongoose.model('guide', guideSchema);