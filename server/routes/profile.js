const express = require('express');
const profileRoutes = express.Router();
const passport = require('passport');
const User = require('../models/User');
const middleware = require('../config/middleware');
const config = require('../config/main');

profileRoutes.get('/user/:id', (req, res) => {
  User.findById(req.params.id)
    .then(o => res.json(o))
    .catch(e => res.json(e));
});

profileRoutes.put('/user/:id', middleware.requireAuth, (req, res, next) => {
  console.log('[PUT] /profile/:id', req.user._id, req.body);
  let id = req.user._id;
  const {
    name,
    username,
    email,
    bio
  } = req.body;

  const userInfo = {
    username: username,
    name: name,
    email: email,
    bio: bio
  };

  const updates = Object.keys(userInfo).reduce((memo, key) => {
    if (userInfo[key] != null) {
      memo[key] = userInfo[key];
    }
    return memo;
  }, {});

  User.findByIdAndUpdate(id, updates, (err, profile) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      user: userInfo
    });
  });
});


profileRoutes.delete('/user', middleware.requireAuth, (req, res, next) => {
  let id = req.user._id;

  User.findByIdAndRemove(id, (error) => {
    res.status(200).json(req.user);
  });
});


module.exports = profileRoutes;
