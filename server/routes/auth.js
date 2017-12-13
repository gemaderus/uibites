const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Our user model
const User  = require('../models/User');
const config = require('../config/main');
const middleware = require('../config/middleware')
const authRoutes = express.Router();

function generateToken(user) {
  return jwt.sign(user, config.secret, {
    expiresIn: 604800 // in seconds
  });
}

authRoutes.post('/signup', (req, res, next) => {
  const {username, password, name, email, bio} = req.body;

  const userInfo = {
    username,
    name,
    email,
    bio
  };

  if (!username || !password || !email) {
    res.status(422).json({ error: 'You must enter email, username and password' });
    return;
  }

  User.findOne({ username }, '_id')
  .then(user => {
    if (user) {
      res.status(422).json({ error: 'The username already exists' });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const theUser = new User({
      name,
      username,
      password: hashPass,
      email,
      bio
    });
    return theUser.save();
  })
  .then(newUser => {
    console.log(newUser);
    req.login(newUser, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'Something went wrong' });
        return;
      }

      res.status(201).json({
        token: `bearer ${generateToken(userInfo)}`,
        user: userInfo
      });
    });
  })
  .catch(e => {
      console.log(e)
      res.status(500).json({ error: 'Something went wrong' });
  });
});

authRoutes.post('/login', middleware.requireLogin, (req, res, next) => {
  console.log('este es mi user: ' + req.user)

  const {username, name, email, bio} = req.user;

  const userInfo = {
    username,
    name,
    email,
    bio
  };

  res.status(200).json({
    token: `bearer ${generateToken(userInfo)}`,
    user: userInfo
  });
});

authRoutes.get('/me', middleware.requireAuth, (req, res, next) => {
  const userId = req.user._id
  const {username, name, email, bio} = req.user;

  const userInfo = {
    userId,
    username,
    name,
    email,
    bio
  };

  res.status(200).json({
    user: userInfo
  });
});

module.exports = authRoutes;
