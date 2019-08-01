let mongoose = require('mongoose');

// guide's db schema

let spotSchema = mongoose.Schema({
    sid:{
        type: String,
        required: true
    },
    sname: {
        type: String,
        required: true
    },
    sarea: {
        type: String,
        required: false
    },
    stype: {
        type: String,
        required: false
    },
    srecost: {
        type: String,
        required: false
    }
});

let spot = module.exports = mongoose.model('spot', spotSchema);