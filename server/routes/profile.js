const express = require('express');
const profileRoutes = express.Router();
const User = require('../models/User');

const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');

profileRoutes.get('/:id', (req, res) => {
   User.findById(req.params.id)
     .then(o => res.json(o))
     .catch(e => res.json(e));
 });

profileRoutes.get('/edit-profile/:id', (req, res) => {
  User.findById(req.params.id)
    .then(o => res.json(o))
    .catch(e => res.json(e));
});

profileRoutes.put('/edit-profile/:id', (req, res, next) => {
  console.log('shkqwjskqå');
  console.log('FOTO --->');
  photo = 'req.file.path';

  let id = req.user._id;
  const {
    name,
    username,
    email,
    bio
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


profileRoutes.delete('/delete', (req, res, next) => {
  let id = req.user._id;
  console.log(id);
  User.findByIdAndRemove(id, (error) => {
    res.status(200).json(req.user);
  });
});




module.exports = profileRoutes;
