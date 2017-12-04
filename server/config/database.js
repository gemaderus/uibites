const path = require('path');
const mongoose = require('mongoose');
const dbURL = process.env.MONGO_URL;

mongoose.connect(dbURL)
  .then(() => console.log(`Connected to ${dbURL}`))
  .catch(e => {
    console.log(`Error connecting to ${dbURL} database`);
    throw e;
  });
