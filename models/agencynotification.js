let mongoose = require('mongoose');

// user's db schema

let agencynotificationSchema = mongoose.Schema({
    agencyemail: {
        type: String,
        required: true
    },
    requestemail: {
        type: String,
        required: true
    }
});

let agencynotification = module.exports = mongoose.model('agencynotification', agencynotificationSchema);