var express = require('express');
var router = express.Router();
var createError = require('http-errors');
const mongoose = require('mongoose');
const brandModel = require('../models/brand.model');

router.get('/', async function (req, res, next) {
    const brands = await brandModel.find();
    const brandsWithIdAsString = brands.map(brand => ({
        ...brand.toObject(),
        _id: brand._id.toString()
    }));
    res.json(brandsWithIdAsString);
});

/* GET brand by id. */
router.get('/:id', async function (req, res, next) {
    // const brandId = mongoose.Types.ObjectId(req.params.id);
    const brandFound = await brandModel.findById(req.params.id);

    if (!brandFound) {
        return next(createError(404, 'Brand not found'));
    }

    res.json(brandFound);
});

/* GET brand by brandName. */
router.get('/brandname/:brandName', async function (req, res, next) {
    const brandFound = await brandModel.findOne({ brandName: req.params.brandName });

    if (!brandFound) {
        return next(createError(404, 'Brand Name not found'));
    }

    const brandWithIdAndPublishedAsString = {
        ...brandFound.toObject(),
        _id: brandFound._id.toString(),
        published: brandFound.published.toISOString(),
        logoURL: `http://localhost:3000/uploads/${brandFound.brandName}`
    };
    res.json(brandWithIdAndPublishedAsString);
});

module.exports = router;
