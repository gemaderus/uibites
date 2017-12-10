const express = require('express');
const middleware = require('../config/middleware');
const likesRoutes = express.Router();
const Card = require('../models/Card');

likesRoutes.put('/card/:id', middleware.requireAuth, (req, res, next) => {
  const cardId = req.params.id;

  console.log(cardId);

  Card.findByIdAndUpdate(cardId, { $inc: { likes: 1 }}, { new: true })
    .then(o => res.status(200).json(o))
    .catch(e => res.status(500).json(e));
});


module.exports = likesRoutes;
