const express = require('express');
const cors = require('cors');

const brandsRouter = require('./routes/brands');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/brands', brandsRouter);

module.exports = app;