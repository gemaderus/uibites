const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const tagSchema = new Schema({
  name: String,
  card_id: {
    type: Schema.Types.ObjectId,
    ref: "Card"
  }
});

const Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;
