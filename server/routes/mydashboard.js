const express = require('express');
const dashboard = express.Router();
const Card = require('../models/Card');
const User  = require('../models/User');
var multer  = require('multer');
const upload = require('../config/multer');

const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');

dashboard.get('/', (req, res, next) => {
  Card.find()
    .then(list => {res.json(list); console.log(list)})
    .catch(e => res.json(e));
});

dashboard.get('/mydashboard', (req, res, next) => {
  console.log("dentro de mydashboard");
console.log(req.user);
  let id = req.user.id;

  Card.find({author_id: id})
    .then(list => {res.status(201).json(list)})
    .catch(e => res.status(400).json(e));
});


dashboard.post('/new-card', upload.single('file'), (req, res, next) => {
console.log(req.body)
 const theCard = new Card({
   title: req.body.title,
   author_id: req.user._id,
   description: req.body.description,
   url: req.body.url,
   photo: `/uploads/${req.file.filename}`,
 });
console.log(theCard)
  theCard.save((err) => {
    if (err) {
      console.log(err)
      next(err);
      return;
    }
    res.status(200).json(theCard);
  });
});

dashboard.get('/card/:id', (req, res, next) => {
  let id = req.params.id;

  Card.findById(id)
    .then(list => {res.json(list); console.log(list)})
    .catch(e => res.json(e));
});

dashboard.get('/edit-card/:id', (req, res, next) => {
  let id = req.params.id;

  Card.findById(id)
    .then(list => {res.json(list); console.log(list)})
    .catch(e => res.json(e));
});

dashboard.post('/edit-card/:id', (req, res, next) => {

  let id = req.params.id;
  console.log(id);

  const {
    title,
    description,
    url
  } = req.body;

  const updates = {
    title,description,url
  };

  Card.findByIdAndUpdate(id, updates, {new: true})
    .then(o => res.status(200).json(o))
    .catch(e => res.status(500).json(e));
});

dashboard.delete('/delete-card/:id', (req, res, next) => {
  console.log("HOLI")
  let id = req.params.id;
  console.log("entro en el back");
  console.log(id);

  Card.findByIdAndRemove(id)
    .then(o => res.status(200).json(o))
    .catch(e => res.status(500).json(e));
});

module.exports = dashboard;
