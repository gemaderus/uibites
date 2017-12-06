require('dotenv').config();
const mongoose = require('mongoose');

const dbURL = process.env.MONGO_URL;
mongoose.connect(dbURL, {
  useMongoClient: true
});
const User = require('../models/User');

//Password
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
var salt = bcrypt.genSaltSync(bcryptSalt);
const password = "1234";
var encryptedPass = bcrypt.hashSync(password, salt);

const users = [
  {
    name: 'gema',
    username: 'gema',
    password: encryptedPass,
    email: 'gema@gmail.com',
    bio: 'Living the life',
  },
  {
    name: 'manu',
    username: 'manu',
    password: encryptedPass,
    email: 'manu@gmail.com',
    bio: 'Oeoeoeoeoe',
  },
  {
    name: 'lola',
    username: 'lola',
    password: encryptedPass,
    email: 'lola@gmail.com',
    bio: 'Always singing',
  },
  {
    name: 'pablo',
    username: 'pablo',
    password: encryptedPass,
    email: 'pablo@gmail.com',
    bio: 'Fishing',
  }
];

const tags = [
  {
    name: "header"
  },

  {
    name: "footer"
  }
]

User.collection.drop(); //Elimina la colección asociada al modelo. Para que cada vez que lo ejecute, no lo vuelva a crear.

//importante cerrar la conexión con mongoose
User.create(users, (err, docs) => {
  //le pasamos como primer parámetro un array de objetos
  if (err) {
    throw err;
  }

  docs.forEach((user) => {
    console.log(user.name);
  });

  //importante cerrar la conexión con mongoose
  mongoose.connection.close();
});
