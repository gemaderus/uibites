const passport   = require('passport');
const flash = require("connect-flash");
const bcrypt = require("bcrypt");
const User = require('../../models/User');
const LocalStrategy = require("passport-local").Strategy;
const session = require('express-session');

module.exports = (app) => {
  passport.serializeUser((user, cb) => {
    cb(null, user._id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({ "_id": id }, (err, user) => {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());


  passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return next(null, false, { message: "Incorrect username" });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return next(null, false, { message: "Incorrect password" });
      }

      return next(null, user);
    });
  }));

  app.use((req,res,next) => {
    res.locals.title = "Ironfunding";
    res.locals.user = req.user;
    next();
  });
};
