require('dotenv').config();
const mongoose = require('mongoose');
const Comments = require('../models/Comments');

const dbURL = process.env.MONGO_URL;
mongoose.connect(dbURL, {
  useMongoClient: true
});



const comments = [
  {
    text: "hola que tal",
    author_id: "5a2c3843e94ca385b212373f",
    card_id: "5a2c383536dc9285a1a243ec"
  }
]


Comments.collection.drop(); //Elimina la colección asociada al modelo. Para que cada vez que lo ejecute, no lo vuelva a crear.

//importante cerrar la conexión con mongoose
Comments.create(comments, (err, docs) => {
  //le pasamos como primer parámetro un array de objetos
  if (err) {
    throw err;
  }

  docs.forEach((comment) => {
    console.log(comment.text);
  });

  //importante cerrar la conexión con mongoose
  mongoose.connection.close();
});
