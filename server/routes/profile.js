const express = require('express');
const profileRoutes = express.Router();
const User = require('../models/User');

const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');

profileRoutes.post('/edit-profile', ensureLoggedIn(), (req, res, next) => {
  let id = req.user._id;
  const {
    name,
    username,
    email,
    bio,
    photo
  } = req.body;

  const updates = {
    name,username,email,bio,photo
  };


  console.log('Updates =======>', updates);

  User.findByIdAndUpdate(id, updates, (err, profile) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(req.user);
  });
});


profileRoutes.post('/delete', ensureLoggedIn(), (req, res, next) => {
  let id = req.user._id;
  console.log(id);
  User.findByIdAndRemove(id, (error) => {
    res.status(200).json(req.user);
  });
});



module.exports = profileRoutes;
