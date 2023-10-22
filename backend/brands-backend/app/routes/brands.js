const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const mongoose = require('mongoose');
const brandModel = require('../models/brand.model');

router.get('/', async function (req, res, next) {
    const brands = await brandModel.find();
    res.json(brands);
});

router.get('/:id', async function (req, res, next) {
    const brandFound = await brandModel.findById(req.params.id);

    if (!brandFound) {
        return next(createError(404, 'Brand not found'));
    }

    res.json(brandFound);
});

router.get('/brandname/:brandName', async function (req, res, next) {
    const brandFound = await brandModel.findOne({ brandName: req.params.brandName });

    if (!brandFound) {
        return next(createError(404, 'Brand Name not found'));
    }

    res.json(brandFound);
});

router.get('/published/:published', async function (req, res, next) {
    const published = req.params.published;
    const publishedBrands = await brandModel.find({ published });
    if (!publishedBrands || publishedBrands.length === 0) {
        return next(createError(404, 'Published date not found'));
    }
    res.json(publishedBrands);
});

router.post('/', async function (req, res, next) {
    console.log(req)
    if (!req.body.brandName) {
        return res.status(400).send('Brand name is required');
    }

    const existingBrand = await brandModel.findOne({ brandName: req.body.brandName });
    if (existingBrand) {
        return res.status(400).send('Brand name already exists');
    }

    const newBrand = new brandModel({
        brandName: req.body.brandName,
        logoURL: req.body.logoURL,
        published: new Date().toISOString().slice(0, 10),
    });

    await newBrand.save();

    res.status(201).json(newBrand);
});

module.exports = router;
