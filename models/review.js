let mongoose = require('mongoose');

// user's db schema

let reviewSchema = mongoose.Schema({
    useremail: {
        type: String,
        required: true
    },
    revieweremail: {
        type: String,
        required: true
    },
    friendliness: {
        type: String,
        required: true
    },
    communicative: {
        type: String,
        required: false
    }
});

let reviews = module.exports = mongoose.model('reviews', reviewSchema);