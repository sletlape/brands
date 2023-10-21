const express = require('express');
const router = express.Router();
const createError = require('http-errors');

/* GET brands listing. */
router.get('/', function (req, res, next) {
});

/* GET brand by id. */
router.get('/:id', function (req, res, next) {
});

/* GET brand by brandName. */
router.get('/brandname/:brandName', function (req, res, next) {
});

/* Filter brands by published date. */
router.get('/published/:published', function (req, res, next) {
});

module.exports = router;
