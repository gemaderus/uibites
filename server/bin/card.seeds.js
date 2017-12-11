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
  url: "http://www.allwhitebackground.comimages/3/3813.jpg",
  photo:"images/boxing_glove_400x300_teaser.png",
  author_id: "5a2c6a85d944ac8a67334668",
  tags: ["header", "leche", "cookie"],
  likes: 3,
  comments: ["5a2e63324b97c0a4122f7cfd"]

},

{
  title: "footer",
  description: "soy un big footer",
  url: "https://cdn.dribbble.com/users/11867/screenshots/3997796/2.jpg",
  photo:"images/concept_app_teaser.png",
  author_id: "5a2c6a85d944ac8a67334668",
  tags: ["header", "leche", "cookie"],
  likes: 3
},

{
  title: "clinic design",
  description: "soy un design",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo:"images/slate_preview_800x600_teaser.png",
  author_id: "5a2c6a85d944ac8a67334668",
  tags: ["manzana", "leche", "galleta"],
  likes: 3
},
{
  title: "Goldex",
  description: "I'm a credit card",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/job-summary-shot-teaser.png",
  photo:"images/infographic-dribbble-teaser.png",
  author_id: "5a2c6a85d944ac8a67334668",
  tags: ["azucar", "footer", "browser"],
  likes: 3
},
{
  title: "Future Light",
  description: "I'm so good",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo:"images/testing_teaser.png",
  author_id: "5a2c6a85d944ac8a67334668",
  tags: ["responsive", "cuchara", "phone"],
  likes: 3
},
{
  title: "Phones",
  description: "I'm a phone",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo:"images/potato-teaser.jpg",
  author_id: "5a2c6a85d944ac8a67334668",
  tags: ["header", "leche", "cookie"],
  likes: 3,
  tags: ["header", "leche", "cookie"],
},
{
  title: "Table",
  description: "I'm a table",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo:"images/dribbble_teaser.png",
  author_id: "5a2c6a85d944ac8a67334668",
  tags: ["header", "leche", "cookie"],
},
{
  title: "Golden",
  description: "Golden Mac",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo: "images/infographic-dribbble-teaser.png",
  author_id: "5a2c6a85d944ac8a67334668",
  tags: ["header", "leche", "cookie"],
},
{
  title: "People",
  description: "People are funny",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo: "images/iphone_sidebar_perspective_teaser.jpg",
  author_id: "5a2c6a85d944ac8a67334668",
  tags: ["header", "leche", "cookie"],
},
{
  title: "Milk",
  description: "I'm the fucking milk",
  url: "https://cdn.dribbble.com/users/257709/screenshots/3998130/shot_x0.5_1x.png",
  photo: "images/dri-small-teaser.png",
  author_id: "5a2c6a85d944ac8a67334668",
  tags: ["header", "leche", "cookie"],
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
