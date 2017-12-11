require('dotenv').config();
const mongoose = require('mongoose');

const dbURL = process.env.MONGO_URL;
mongoose.connect(dbURL, {
  useMongoClient: true
});

const Card = require('../models/Card');

const cards = [
  {
  title: "header",
  description: "soy un big header",
  url: "http://www.allwhitebackground.com/images/3/3813.jpg",
  photo:"http://www.allwhitebackground.com/images/3/3813.jpg",
  author_id: "5a2c6a85d944ac8a67334668",
  tags: ["header", "leche", "cookie"],
  likes: 3,
  comments: ["5a2e63324b97c0a4122f7cfd"]

},

{
  title: "footer",
  description: "soy un big footer",
  url: "https://cdn.dribbble.com/users/11867/screenshots/3997796/2.jpg",
  photo:"https://cdn.dribbble.com/users/11867/screenshots/3997796/2.jpg",
  author_id: "5a2c6a85d944ac8a67334668",
  tags: ["header", "leche", "cookie"],
  likes: 3
},

{
  title: "clinic design",
  description: "soy un design",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo:"https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  author_id: "5a2c6a85d944ac8a67334668",
  tags: ["manzana", "leche", "galleta"],
  likes: 3
},
{
  title: "Goldex",
  description: "I'm a credit card",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo:"https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  author_id: "5a2c6a85d944ac8a67334668",
  tags: ["header", "leche", "cookie"],
  likes: 3
},
{
  title: "Future Light",
  description: "I'm so good",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo:"https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  author_id: "5a2824c908d8ec2a9fbc172b",
  tags: ["header", "leche", "cookie"],
  likes: 3
},
{
  title: "Phones",
  description: "I'm a phone",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo:"https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  author_id: "5a2824c908d8ec2a9fbc172b",
  tags: ["header", "leche", "cookie"],
  likes: 3
},
{
  title: "Table",
  description: "I'm a table",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo:"https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  author_id: "5a2824c908d8ec2a9fbc172c"
},
{
  title: "Golden",
  description: "Golden Mac",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  author_id: "5a2824c908d8ec2a9fbc172c"
},
{
  title: "People",
  description: "People are funny",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  author_id: "5a2824c908d8ec2a9fbc172c"
},
{
  title: "Milk",
  description: "I'm the fucking milk",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  author_id: "5a2824c908d8ec2a9fbc172c"
}
]

Card.collection.drop(); //Elimina la colección asociada al modelo. Para que cada vez que lo ejecute, no lo vuelva a crear.

//importante cerrar la conexión con mongoose
Card.create(cards, (err, docs) => {
  //le pasamos como primer parámetro un array de objetos
  if (err) {
    throw err;
  }

  docs.forEach((card) => {
    console.log(card.title);
  });

  //importante cerrar la conexión con mongoose
  mongoose.connection.close();
});
