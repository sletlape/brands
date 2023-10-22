const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const upload = require('./middleware/upload');
const brandsRouter = require('./routes/brands');
const app = express();

dotenv.config();

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/brandsDB";
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Import routes
app.use('/brands', brandsRouter);

// Server for storing/fetching files
app.use('/uploads', express.static(path.join(__dirname, 'logoUploads')));

app.listen(port, () => {
    console.log(`The server is up and running on port ${port}`);
});

module.exports = app;
