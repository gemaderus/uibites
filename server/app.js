require('dotenv').config();
var express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

require('./config/database');
var app = express();
require('./config/passport/passport')(app);
require('./config/express')(app);


module.exports = authRoutes;

// var index = require('./routes/index');
// var users = require('./routes/users');


//Configuracion de Routes

var index = require('./routes/index');
var authRoutes = require('./routes/auth');
// var users = require('./routes/users');

app.use('/', index);
app.use('/', authRoutes);
// app.use('/', profileRoutes);
// app.use('/', profile);

// app.use((req, res, next) => {
//   res.sendfile(__dirname + '/public/index.html');
// });

module.exports = app;
