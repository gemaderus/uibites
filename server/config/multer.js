var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var express = require('express');
var multer = require('multer');

var app = express();

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
