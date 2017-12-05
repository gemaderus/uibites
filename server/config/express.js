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
// var app = express();


module.exports = (app) => {
  var whitelist = [
      'http://localhost:4200',
  ];
  var corsOptions = {
      origin: function(origin, callback){
          var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
          callback(null, originIsWhitelisted);
      },
      credentials: true
  };

  app.use(cors(corsOptions));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.use(express.static(path.join(__dirname, 'public')));

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
  });

  app.use(passport.initialize());
  app.use(passport.session());
  app.use((req,res,next) => {
    res.locals.title = "UI Bites";
    res.locals.user = req.user;
    next();
  });
}
