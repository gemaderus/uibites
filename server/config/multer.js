// const multer = require('multer');
// const path = require('path');
//
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './public/uploads/')
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}${path.extname(file.originalname)}`)
//   }
// });
//
// const upload   = multer({ storage });
// module.exports = upload;

var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var express = require('express');
var multer = require('multer');

var app = express();


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: '',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(undefined, 'my-file-name');
  }
});

var upload = multer({ storage: storage });

app.post('/upload', upload.array('images', 10), function (req, res) {
  console.log(req.files);
});

module.exports = upload;
