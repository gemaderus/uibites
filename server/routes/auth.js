const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Our user model
const User  = require('../models/User');
const config = require('../config/main');

const authRoutes = express.Router();

// const {
//   ensureLoggedIn,
//   ensureLoggedOut
// } = require('connect-ensure-login');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

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

  console.log('/signup', userInfo);

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

authRoutes.post('/login', requireLogin, (req, res, next) => {
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

  // passport.authenticate('local', (err, theUser, failureDetails) => {
  //   console.log("llego aqui");

  //   if (err) {
  //     res.status(500).json({ message: 'Something went wrong' });
  //     return;
  //   }

  //   if (!theUser) {
  //     res.status(401).json(failureDetails);
  //     return;
  //   }

  //   req.login(theUser, (err) => {
  //     if (err) {
  //       res.status(500).json({ message: 'Something went wrong' });
  //       return;
  //     }
  //     // We are now logged in (notice req.user)
  //     res.status(200).json(req.user);
  //   });
  // })(req, res, next);
});

// authRoutes.get('/logout',(req, res, next) => {
//   console.log("entrando");
//   req.logout();
//   res.status(200).json({ message: 'Success' });
// });

// authRoutes.get('/loggedin', (req, res, next) => {
//   if (req.isAuthenticated()) {
//     res.status(200).json(req.user);
//     return;
//   }

//   res.status(403).json({ message: 'Unauthorized' });
// });

module.exports = authRoutes;
