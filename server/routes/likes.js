const express = require('express');
const likesRoutes = express.Router();
const User = require('../models/User');
const Card = require('../models/Card');
const Like = require('../models/Like');

const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');

likesRoutes.post('/new-like/:id', ensureLoggedIn(), (req, res, next) => {
    const newLike = {
      author_id: req.user._id,
      card_id: req.params.id
    };

   const theLike = new Like(newLike);
    theLike.save((err) => {
      if (err) {
        next(err);
        return;
      }
      res.status(200).json(newLike);
    });
  });


module.exports = likesRoutes;
