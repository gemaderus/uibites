const express = require('express');
const commentsRoutes = express.Router();
const User = require('../models/User');
const Comments = require('../models/Comments');
const Card = require('../models/Card');

const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');

commentsRoutes.get('/new-comment/:id', (req, res, next) => {
  console.log("estoy aquí");

  var a = req.user._id;
  console.log(a);
  var cardId = req.params.id;
  console.log(cardId);
  var b = Comments.find({"card_id":req.params.id}).populate("author_id", "username")
  .then(e => {
    res.status(200).json(e);
  })
  .catch(error => res.status(500).json(error));

  // Promise.all([a,b]).then(values => {
    // console.log(values[1]);
    // res.render('p_profile', {
    //   psychologist:values[0],
    //   userLogged:req.user._id,
    //   psychologistComments: values[1]
    // });
  // });

});

commentsRoutes.post('/new-comment/:id',ensureLoggedIn(), (req, res, next) => {
  console.log("entro");
    const commentInfo = {
      comment: req.body.comment,
      author_id: req.user._id,
      card_id: req.params.id
    };

   const theComment = new Comments(commentInfo);
    theComment.save((err) => {
      if (err) {
        next(err);
        return;
      }
      res.status(200).json(theComment);
    });
  });

module.exports = commentsRoutes;
