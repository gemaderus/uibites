const express = require('express');
const dashboard = express.Router();
const Card = require('../models/Card');
const User  = require('../models/User');

const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');

dashboard.post('/new-card', ensureLoggedIn(), (req, res, next) => {
 const theCard = new Card({
   title: req.body.title,
   author_id: req.user._id,
   description: req.body.description,
   url: req.body.url,
 });

  theCard.save((err) => {
    if (err) {
      next(err);
      return;
    }
    res.status(200).json(theCard);
  });
});

dashboard.post('/edit-card/:id', (req, res, next) => {

  console.log("aaaaaa");

  let id = req.params.id;
  console.log(id);
  // console.log(id);
  const {
    title,
    description,
    url
  } = req.body;
  //
  const updates = {
    title,description,url
  };

  // console.log('Updates =======>', updates);
  //
  Card.findByIdAndUpdate(id, updates)
    .then(o => res.status(200).json(o))
    .catch(e => res.status(500).json(e));
});

dashboard.post('/delete-card/:id',ensureLoggedIn(), (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  Card.findByIdAndRemove(id)
    .then(o => res.status(200).json(o))
    .catch(e => res.status(500).json(e));
});

module.exports = dashboard;
