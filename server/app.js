require('dotenv').config();
const express = require('express');
const cors = require ('cors');
const whitelist = require('./config/main').whitelist;

require('./config/database');

const corsOptions = {
  origin: function(origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};

const app = express();
app.use(cors(corsOptions));

require('./config/passport')();
require('./config/express')(app);

// var index = require('./routes/index');
var authRoutes = require('./routes/auth');
var profile = require('./routes/profile');
var cards = require('./routes/cards');
var comments = require('./routes/comments');
var likes = require('./routes/likes');

app.use('/api/auth', authRoutes);
app.use('/api/profile', profile);
app.use('/api/dashboard', cards);
app.use('/api/comments', comments);
app.use('/api/like', likes);

app.use(function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

require('./config/error-handler')(app);

module.exports = app;
