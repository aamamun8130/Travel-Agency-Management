let mongoose = require('mongoose');

// guide's db schema

let historySchema = mongoose.Schema({
    aid:{
        type: String,
        required: true
    },
    gid: {
        type: String,
        required: true
    },
    spotid: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    }
});

let history = module.exports = mongoose.model('history', historySchema);