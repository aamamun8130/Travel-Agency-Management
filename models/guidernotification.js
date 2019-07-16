let mongoose = require('mongoose');

// user's db schema

let guidernotificationSchema = mongoose.Schema({
    guideremail: {
        type: String,
        required: true
    },
    requestemail: {
        type: String,
        required: true
    },
    astatus: {
        type: String,
        required: true
    }
});

let guidernotification = module.exports = mongoose.model('guidernotification', guidernotificationSchema);