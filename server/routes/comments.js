const express = require('express');
const Comment = require('../models/Comments');
const middleware = require('../config/middleware');
const commentsRoutes = express.Router();

// commentsRoutes.get('/:id', (req, res, next) => {
//   console.log("estoy aquí");
//
//   var a = req.user._id;
//   console.log(a);
//
//   var cardId = req.params.id;
//
//   console.log(cardId);
//   var b = Comments.find({"card_id":req.params.id}).populate("author_id", "username")
//   .then(e => {
//     res.status(200).json(e);
//   })
//   .catch(error => res.status(500).json(error));
//
//   // Promise.all([a,b]).then(values => {
//     // console.log(values[1]);
//     // res.render('p_profile', {
//     //   psychologist:values[0],
//     //   userLogged:req.user._id,
//     //   psychologistComments: values[1]
//     // });
//   // });
//
// });

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
