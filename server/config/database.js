require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const dbURL = environment.BASE_URL;;

mongoose.connect(dbURL)
  .then(() => console.log(`Connected to ${dbURL}`))
  .catch(e => {
    console.log(`Error connecting to ${dbURL} database`);
    throw e;
  });
