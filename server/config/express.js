var express = require('express');
var path = require('path');
const passport   = require('passport');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const session  = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const flash = require("connect-flash");

// var app = express();


module.exports = (app) => {

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.use(express.static(path.join(__dirname, '/../public')));

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
  });
  app.use(flash());

  app.use(passport.initialize());
  app.use(passport.session());
  // app.use((req,res,next) => {
  //   res.locals.title = "UI Bites";
  //   res.locals.user = req.user;
  //   next();
  // });
}
