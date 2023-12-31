const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const mongoose = require('mongoose');
const brandModel = require('../models/brand.model');
const upload = require('../middleware/upload');

// Retrieve all brands
/// If params are passed, filter the results by those params or sort them by the brandName asc or desc
router.get('/', async function (req, res, next) {
    let query = brandModel.find();

    if (req.query.sort) {
        const sortOrder = req.query.sort === 'asc' ? 1 : -1;
        query.sort({ brandName: sortOrder });
    }


    if (req.query.published && req.query.date) {
        const date = new Date(req.query.date);
        console.log(date);
        if (req.query.published === 'before') {
            query.where('published').gt(date);
        } else {
            query.where('published').lt(date);
        }
    }

    const brands = await query.exec();
    res.json(brands);
});

// Retrieve a brand by ID
router.get('/:id', async function (req, res, next) {
    const brandFound = await brandModel.findById(req.params.id);

    if (!brandFound) {
        return next(createError(404, 'Brand not found'));
    }

    res.json(brandFound);
});

// Retrieve a brand by brand name
router.get('/brandname/:brandName', async function (req, res, next) {
    const brandFound = await brandModel.findOne({ brandName: req.params.brandName });

    if (!brandFound) {
        return next(createError(404, 'Brand Name not found'));
    }

    res.json(brandFound);
});

// Retrieve brands by published date
router.get('/published/:published', async function (req, res, next) {
    const published = req.params.published;
    const publishedBrands = await brandModel.find({ published });
    if (!publishedBrands || publishedBrands.length === 0) {
        return next(createError(404, 'Published date not found'));
    }
    res.json(publishedBrands);
});

// Create a new brand with file upload
router.post('/upload', upload.single('logoImg'), async function (req, res, next) {
    if (!req.file) {
        return res.status(400).send('Please upload an image');
    }
    if (!req.body.brandName) {
        return res.status(400).send('Brand name is required');
    }
    const existingBrand = await brandModel.findOne({ brandName: req.body.brandName });
    if (existingBrand) {
        return res.status(400).send('Brand name already exists');
    }

    console.log(req.file);

    const newBrand = new brandModel({
        brandName: req.body.brandName,
        logoUrl: `http://localhost:3000/uploads/${req.file.filename}`,
        published: new Date().toISOString(),
    });

    await newBrand.save();

    res.status(201).json(newBrand);
});

module.exports = router;
