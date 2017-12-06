require('dotenv').config();
var express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
var multer  = require('multer');

require('./config/database');
var app = express();
app.use(session({
    secret: 'ui-bites',
    // secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 365
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    })
  }))

require('./config/passport/passport')(app);
require('./config/express')(app);


// var index = require('./routes/index');
var authRoutes = require('./routes/auth');
var profile = require('./routes/profile');
var dashboard = require('./routes/mydashboard');
var comments = require('./routes/comments');
var tags = require('./routes/tags');
var likes = require('./routes/likes');

//Configuracion de Routes

// var index = require('./routes/index');

// var users = require('./routes/users');

// app.use('/', index);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profile);
app.use('/api/dashboard', dashboard);
app.use('/api/comments', comments);
app.use('/api/tags', tags);
app.use('/api/likes', likes);

app.use((req, res, next) => {
  res.sendfile(__dirname + '/public/index.html');
});

require('./config/error-handler')(app);

module.exports = app;
