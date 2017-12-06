const express = require('express');
const tagsRoutes = express.Router();
const Card = require('../models/Card');
const User  = require('../models/User');
const Tag = require('../models/Tags');

const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');

tagsRoutes.post('/new-tag/:id', ensureLoggedIn(), (req, res, next) => {

    const tagInfo = {
      name: req.body.name,
      card_id: req.params.id
    };

   const theTag = new Tag(tagInfo);
    theTag.save((err) => {
      if (err) {
        next(err);
        return;
      }
      res.status(200).json(theTag);
    });
  });

  tagsRoutes.post('/delete-tag/:id', ensureLoggedIn(), (req, res, next) => {
    let id = req.params.id;
    console.log(id);

    Tag.findByIdAndRemove(id)
      .then(o => res.status(200).json(o))
      .catch(e => res.status(500).json(e));
  });


module.exports = tagsRoutes;
