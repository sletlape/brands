const multer = require('multer');
const path = require('path');

// Storage setup for Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../logoUploads'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

// Initialize Multer
const upload = multer({ storage: storage })
    // .single('imgTest');

module.exports = upload;
