const express = require('express');
const Comment = require('../models/Comments');
const middleware = require('../config/middleware');
const commentsRoutes = express.Router();
const Card = require('../models/Card');

commentsRoutes.post('/card/:id', middleware.requireAuth, (req, res, next) => {
  // console.log(`[POST] /comments/card/${req.params.id}`, req.body);
  var cardId = req.params.id;
  const commentInfo = {
    text: req.body.text,
    author_id: req.user._id,
    card_id: req.params.id
  };

  // const theComment = new Comment(commentInfo);
  // theComment.save((err) => {
  //   if (err) {
  //     next(err);
  //     return;
  //   }
  //   res.status(200).json(theComment);
  // });

  const theComment = new Comment(commentInfo);
  theComment.save()
  .then(comment => {Card.findByIdAndUpdate(cardId, {$push: {'comments': comment._id}}, {new: true})
      .then(o => res.status(200).json(o))
      .catch(e => res.status(500).json(e));
  });

});

module.exports = commentsRoutes;
