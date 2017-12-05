require('dotenv').config();
var express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

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


module.exports = authRoutes;

// var index = require('./routes/index');
var authRoutes = require('./routes/auth');
var profile = require('./routes/profile');
var dashboard = require('./routes/mydashboard');

//Configuracion de Routes

// var index = require('./routes/index');

// var users = require('./routes/users');

// app.use('/', index);
app.use('/api/auth', authRoutes);
app.use('/api/auth', profile);
app.use('/api/auth', dashboard);

app.use((req, res, next) => {
  res.sendfile(__dirname + '/public/index.html');
});

require('./config/error-handler')(app);

module.exports = app;
