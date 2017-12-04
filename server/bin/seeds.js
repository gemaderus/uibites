require('dotenv').config();

const mongoose = require('mongoose');

const dbURL = process.env.DBURL;
mongoose.connect(dbURL, {
  useMongoClient: true
});
const User = require('../models/User');

//Password
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
var salt = bcrypt.genSaltSync(bcryptSalt);
const password = "ironhack";
var encryptedPass = bcrypt.hashSync(password, salt);


name: String,
username: String,
password: String,
email: String,
bio: String,
photo: String,


const users = [{
    name: 'Gema',
    username: 'gema',
    password: encryptedPass,
    email: 'gema@gmail.com',
    bio: 'Living the life',
    photo:"";
  },
  {
    username: 'abraham',
    name: 'Abraham',
    email: 'abraham@gmail.com',
    password: encryptedPass,
    address: 'Lavapies, 10',
    city: 'Sevilla',
    identification: 'ad000202020221',
    rate: 30,
    role: 'psychologist',
    photo: "http://res.cloudinary.com/dmhb6ozxo/image/upload/q_23/v1511517720/Abraham-Castro-01_zw82vd.jpg",
    validation: true
  },
  {
    username: 'alberto',
    name: 'Alberto',
    email: 'alberto@gmail.com',
    password: encryptedPass,
    address: 'Lavapies, 10',
    city: 'Sevilla',
    identification: 'ad000202020221',
    rate: 30,
    role: 'psychologist',
    photo: "http://res.cloudinary.com/dmhb6ozxo/image/upload/q_23/v1511517795/Alberto-Campos-01_fyb9u7.jpg",
    validation: true
  },
  {
    username: 'angel',
    name: 'Angel',
    email: 'angel@gmail.com',
    password: encryptedPass,
    address: 'Lavapies, 10',
    city: 'Sevilla',
    identification: 'ad000202020221',
    rate: 30,
    role: 'psychologist',
    photo: "http://res.cloudinary.com/dmhb6ozxo/image/upload/q_23/v1511517772/Angel-Sideroey-01_ydbgka.jpg",
    validation: true
  },
  {
    username: 'fran',
    name: 'Fran',
    email: 'fran@gmail.com',
    password: encryptedPass,
    address: 'Picos de Artilleros, 10',
    city: 'Barcelona',
    identification: 'ad000202020222',
    rate: 20,
    role: 'psychologist',
    photo: "http://res.cloudinary.com/dmhb6ozxo/image/upload/q_23/v1511517812/Fran-Romero-01_pfw2i7.jpg",
    validation: true
  },
  {
    username: 'clinicacibeles',
    name: 'Clínica Cibeles',
    email: 'cibeles@gmail.com',
    password: encryptedPass,
    address: 'Paseo de la Castellana, 10, Madrid',
    city: 'Valencia',
    identification: 'ad000202020223',
    rate: 30,
    role: 'clinic',
    photo: "http://aimacpc.es/wp-content/uploads/Sala-para-ninos-en-Aima-psicologia-clinica-en-santiago.jpg",
    validation: true
  },
  {
    username: 'clinicaperez',
    name: 'Clínica Perez',
    email: 'perez@gmail.com',
    password: encryptedPass,
    address: 'Paseo de la Castellana, 10, Madrid',
    city: 'Valencia',
    identification: 'ad000202020223',
    rate: 30,
    role: 'clinic',
    photo: "http://www.qicenter.es/wp-content/uploads/2015/02/clinica-fisioterapia-malaga-qicenter.png",
    validation: true
  },
  {
    username: 'juan',
    name: 'Juan',
    email: 'juan@gmail.com',
    password: encryptedPass,
    address: 'Paseo de la Castellana, 10, Madrid',
    city: 'Valencia',
    identification: 'ad000202020223',
    rate: 30,
    role: 'psychologist',
    photo: "https://res.cloudinary.com/dmhb6ozxo/image/upload/q_36/t_media_lib_thumb/v1511517833/Juan-Vallejo-Najera-02_jwsfue.jpg",
  },
  {
    username: 'clinicapepe',
    name: 'Clínica Pepe',
    email: 'peperepe@gmail.com',
    password: encryptedPass,
    address: 'Paseo de la Castellana, 10, Madrid',
    city: 'Valencia',
    identification: 'ad000202020223',
    rate: 30,
    role: 'clinic',
    photo: "https://imagenes.paginasamarillas.es/centro-especializado-de-psicologia-clinica/fotos/318/204/42N/004/gfoto01.jpg",
    validation: true
  },
  {
    username: 'clinicalolita',
    name: 'Clinica Lolita',
    email: 'peperepe@gmail.com',
    password: encryptedPass,
    address: 'Paseo de la Castellana, 10, Madrid',
    city: 'Valencia',
    identification: 'ad000202020223',
    rate: 30,
    role: 'clinic',
    photo: "https://imagenes.paginasamarillas.es/centro-especializado-de-psicologia-clinica/fotos/318/204/42N/004/gfoto01.jpg",
  },
  {
    username: 'clinicaandreu',
    name: 'Clínica Andreu',
    email: 'andreu@gmail.com',
    password: encryptedPass,
    address: 'Avenida Andalucía, 10',
    city: 'Cordoba',
    identification: 'ad000202020224',
    rate: 30,
    role: 'clinic',
    psychologist:[],
    photo: "https://s-media-cache-ak0.pinimg.com/originals/ff/c5/9c/ffc59c7ddf820cf29553bacde1028811.jpg",
    validation: true
  },
  {
    username: 'antonio',
    name: 'Antonio',
    email: 'antonio@gmail.com',
    password: encryptedPass,
    address: 'Hermosilla, 81',
    city: 'Madrid',
    role: 'patient',
    photo: "",
  },
  {
    username: 'lola',
    name: 'Lola',
    email: 'lola@gmail.com',
    password: encryptedPass,
    address: 'Alcalá, 102',
    city: 'Madrid',
    role: 'patient',
    photo: "",
  }
];

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
