const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    brandName: String,
    published: Date,
    img: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('brandModel', BrandSchema);
