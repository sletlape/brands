const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true,
        unique: true
    },
    published: {
        type: Date,
        required: true
    },
    imgPath: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Brand', brandSchema);
