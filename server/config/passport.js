const passport = require('passport');
const config = require('./main');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const bcrypt = require("bcrypt");
const User = require('../models/User');

module.exports = () => {
  passport.serializeUser((user, cb) => {
    cb(null, user._id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({ "_id": id }, (err, user) => {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });

  // Setting username field to email rather than username
  const localOptions = {
    usernameField: 'email'
  };

  const localLogin = new LocalStrategy(localOptions, (email, password, next) => {
    console.log(email, password);
    User.findOne({ email }, (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return next(null, false, { error: 'Your login details could not be verified. Please try again.' });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return next(null, false, { error: 'Your login details could not be verified. Please try again.' });
      }

      return next(null, user);
    });
  });

  // Setting JWT strategy options
  const jwtOptions = {
    // Telling Passport to check authorization headers for JWT
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    // Telling Passport where to find the secret
    secretOrKey: config.secret
  };

  // Setting up JWT login strategy
  const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    console.log('jwt strategy', payload.email);

    User.find()
      .then(list => {console.log(list)});

    User.findOne({'email': payload.email}, (err, user) => {
      if (err) {
        console.log('jwt strategy error', error);
        return done(err, false);
      }

      if (user) {
        console.log('jwt strategy user', user);
        done(null, user);
      } else {
        console.log('jwt strategy no user');
        done(null, false);
      }
    });
  });

  passport.use(localLogin);
  passport.use(jwtLogin);


  // app.use((req,res,next) => {
  //   res.locals.title = "Ironfunding";
  //   res.locals.user = req.user;
  //   next();
  // });

};
