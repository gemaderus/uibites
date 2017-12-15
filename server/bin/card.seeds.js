require('dotenv').config();
const mongoose = require('mongoose');

const dbURL = process.env.MONGO_URL;
const MONGO_LAB = process.env.MONGO_LAB;

mongoose.connect(MONGO_LAB, {
  useMongoClient: true
});

const Card = require('../models/Card');

const cards = [
  {
  title: "Eureka",
  description: "Eureka—A California Design Story with The Hoods and Friends honors graphic design movements from the Gold Rush to the present, while chronicling revolutionary and obscure discoveries from California’s history.",
  url: "http://www.allwhitebackground.comimages/3/3813.jpg",
  photo:"http://res.cloudinary.com/dmhb6ozxo/image/upload/q_50/v1513182711/eureka_jdws21.png",
  author_id: "5a32ff1d8378c83b5497ce1c",
  tags: ["retro", "video", "games"],
  likes: 3,
  comments: ["5a2e63324b97c0a4122f7cfd"]

},

{
  title: "Phones",
  description: "The advent of cellphones has changed our lives and made the world smaller. The NEED theme is designed for many young children who are neglected because their parents are too long for their cell phones. Please drop the phone to accompany the children to grow, they need us.",
  url: "https://dribbble.com/shots/4014174-NEED-FREE",
  photo:"http://res.cloudinary.com/dmhb6ozxo/image/upload/q_50/v1513182712/need-gree_bnekgr.jpg",
  author_id: "5a32ff1d8378c83b5497ce1c",
  tags: ["color", "design", "job"],
  likes: 3
},

{
  title: "Movies review",
  description: "Creating a new whole based on card system.An app made for publishing and browsing movie reviews. Just a sneak peak. Like always I would be happy to know what you think.",
  url: "https://dribbble.com/shots/4013811-Movie-Reviews-App-Homepage",
  photo:"http://res.cloudinary.com/dmhb6ozxo/image/upload/q_50/v1513182712/movie-review_nbhau5.png",
  author_id: "5a32ff1d8378c83b5497ce1c",
  tags: ["app", "review", "mobile"],
  likes: 3
},
{
  title: "Service Market Place",
  description: "Mobile appp to find the best professionals",
  url: "https://dribbble.com/shots/4015460-Service-providers-marketplace",
  photo:"http://res.cloudinary.com/dmhb6ozxo/image/upload/q_50/v1513182712/market-place_dpndvn.png",
  author_id: "5a32ff1d8378c83b5497ce1c",
  tags: ["ilustration", "mobile", "graphic"],
  likes: 3
},
{
  title: "Art Direction",
  description: "Here is a preview of a pitch deck I've been working recently. I will be sharing more screens soon so you can see the detailed presentation.",
  url: "https://dribbble.com/shots/4014417-Art-Direction-Pitch-Deck",
  photo:"http://res.cloudinary.com/dmhb6ozxo/image/upload/q_50/v1513182709/art-direction_sgmxqm.jpg",
  author_id: "5a32ff1d8378c83b5497ce1c",
  tags: ["layout", "tipography", "grid"],
  likes: 3
},
{
  title: "T-J Editorial Blog Open Menu",
  description: "This is another shot crafted for a minimalist and elegant editorial blog. This time it features Open Menu Page. The focus with this one stays unchanged: crisp typography, layout geometry as well as pointful imagery usage. What do you think about this one? Stay tuned for more!",
  url: "https://dribbble.com/shots/4011720-T-J-Editorial-Blog-Open-Menu",
  photo:"http://res.cloudinary.com/dmhb6ozxo/image/upload/v1513182711/shot_zoxvud.png",
  author_id: "5a32ff1d8378c83b5497ce1c",
  tags: ["blog", "inspiration", "ui"],
  likes: 3,
},
{
  title: "Data",
  description: "Try again the new visualization style, especially on the map, extend the new dimension combined with the plane, enhance the sense of vision and feel, and become richer.",
  url: "https://dribbble.com/shots/4013461-Data-visualization",
  photo:"http://res.cloudinary.com/dmhb6ozxo/image/upload/q_50/v1513182711/data_lkzkhw.png",
  author_id: "5a32ff1d8378c83b5497ce1c",
  tags: ["chart", "icon", "visualization"],
  likes: 0,
},
{
  title: "Icons",
  description: "I hope you like it, and I can also contact with you. I would like to express my thanks!",
  url: "https://dribbble.com/shots/4014453-Icon",
  photo: "http://res.cloudinary.com/dmhb6ozxo/image/upload/q_50/v1513182709/icon_pitnzv.jpg",
  author_id: "5a32ff1d8378c83b5497ce1c",
  tags: ["icons"],
  likes: 0,
},
{
  title: "Courses App",
  description: "Some more progress from last week, about the concept about an online courses app.",
  url: "https://dribbble.com/shots/4013662-Online-courses-app",
  photo: "http://res.cloudinary.com/dmhb6ozxo/image/upload/q_50/v1513182710/courses.app_o5gidq.png",
  author_id: "5a32ff1d8378c83b5497ce1c",
  tags: ["app", "courses", "online"],
  likes: 0,
},
{
  title: "Cheer",
  description: "When rating your trip this December, select a holiday themed compliment and give some cheer to your driver. Special compliments campaigns, like this one, help us keep ratings fresh, engaging, and rewarding for riders and drivers all year round. ",
  url: "https://dribbble.com/shots/4015745-Give-Cheer-with-Holiday-Compliments",
  photo: "http://res.cloudinary.com/dmhb6ozxo/image/upload/q_50/v1513182710/cheer_q1dish.png",
  author_id: "5a32ff1d8378c83b5497ce1c",
  tags: ["design", "uber", "campaigne"],
  likes: 0,
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
