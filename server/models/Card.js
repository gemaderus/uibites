const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const cardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  url: String,

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});



const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
