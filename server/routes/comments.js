const express = require('express');
const Comment = require('../models/Comments');
const middleware = require('../config/middleware');
const commentsRoutes = express.Router();

commentsRoutes.post('/card/:id', middleware.requireAuth, (req, res, next) => {
  console.log(`[POST] /comments/card/${req.params.id}`, req.body);

  const commentInfo = {
    text: req.body.text,
    author_id: req.user._id,
    card_id: req.params.id
  };

  const theComment = new Comment(commentInfo);
  theComment.save((err) => {
    if (err) {
      next(err);
      return;
    }
    res.status(200).json(theComment);
  });
});

module.exports = commentsRoutes;
