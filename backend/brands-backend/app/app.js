
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const brandsRouter = require('./routes/brands');

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/brandsDB";

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

app.use('/brands', brandsRouter);

/* Setting up server */
app.listen(port, function () {
    console.log("This server port is up and running ");
})

module.exports = app;
