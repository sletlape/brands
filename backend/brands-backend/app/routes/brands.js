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

/* POST brand. auto generate id and published date*/
router.post('/', async function (req, res, next) {
    /* if brandName is not provided, return error */
    if (!req.body.brandName) {
        return res.status(400).send('Brand name is required');
    }
    /* if brandname already exists, return error */
    const existingBrand = await brandModel.findOne({ brandName: req.body.brandName });
    if (existingBrand) {
        return res.status(400).send('Brand name already exists');
    }

    /* Generate new brand entry with publish date set at creation */
    const newBrandLogo = new brandModel({
        brandName: req.body.brandName,
        logoURL: `http://localhost:3000/uploads/${req.body.brandName}`,
        published: new Date().toISOString().slice(0, 10),
    });

    await newBrandLogo.save();

    res.status(201).json(newBrandLogo);
});

module.exports = router;