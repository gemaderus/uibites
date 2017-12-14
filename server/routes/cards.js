require('dotenv').config();
const express = require('express');
const passport = require('passport');

const middleware = require('../config/middleware');

const dashboard = express.Router();
const Card = require('../models/Card');
const Comments = require('../models/Comments');
const User  = require('../models/User');
const upload = require('../config/multer');

dashboard.get('/cards', middleware.requireAuth, (req, res, next) => {
  console.log('[GET] /cards', req.user);
  let id = req.user.id;
  console.log(id);

  // TODO: bring likes and comments as well
  Card.find({author_id: id})
    .then(list => {res.status(201).json(list)})
    .catch(e => res.status(400).json(e));
});


dashboard.post('/cards', middleware.requireAuth, upload.single('file'), (req, res, next) => {
  console.log('[POST] /cards', req);

  const tags = req.body.tags.split(',').map((tag) => {
    return tag.trim();
  });

  const theCard = new Card({
    title: req.body.title,
    author_id: req.user._id,
    description: req.body.description,
    url: req.body.url,
    photo: `${req.file.url}`,
    // photo: `/uploads/${req.file.filename}`,
    tags: tags,
    likes: 0
  });

  console.log(theCard)
  theCard.save((err) => {
    if (err) {
      console.log(err)
      next(err);
      return;
    }
    res.status(200).json(theCard);
  });
});

dashboard.get('/card/:id', (req, res, next) => {
  console.log(`[GET] /card/${req.params.id}`, req.body);

  let id = req.params.id;

  const a = Comments.find({'card_id':id})
    .populate('author_id')
    .exec((err, comments) => comments);

  const b = Card.findById(id)
    .exec((err, cards) => cards);

  Promise.all([a,b]).then(values => {
    let comments = values[0];
    let card = values[1];
    comments = comments.map(comment => {
      return {
        text: comment.text,
        author: {
          name: comment.author_id.name,
          photo: comment.author_id.photo
        }
      };
    });

    res.json({
      card,
      comments
    });
  });

  // Card.findById(id)
  //   .populate('comments')
  //   .exec((err, cards) => {
  //     if (err) {
  //       res.json({error: err});
  //     } else {
  //       res.json(cards);
  //     }
  //   });
});

dashboard.put('/card/:id', middleware.requireAuth, (req, res, next) => {
  console.log(`[PUT] /card/${req.params.id}`, req.body);

  let id = req.params.id;

  const {
    title,
    description,
    url,
    tags
  } = req.body;

  const cardInfo = {
    title,
    description,
    url,
    tags
  };
   console.log(cardInfo);

  const updates = Object.keys(cardInfo).reduce((memo, key) => {
    if (cardInfo[key] != null) {
      memo[key] = cardInfo[key];
    }
    return memo;
  }, {});

  console.log(updates);

  Card.findByIdAndUpdate(id, updates, {new: true})
    .then(o => res.status(200).json(o))
    .catch(e => res.status(500).json(e));
});

dashboard.delete('/card/:id', middleware.requireAuth, (req, res, next) => {
  console.log(`[DELETE] /card/${req.params.id}`, req.body);

  let id = req.params.id;

  Card.findByIdAndRemove(id)
    .then(o => res.status(200).json(o))
    .catch(e => res.status(500).json(e));
});

module.exports = dashboard;
