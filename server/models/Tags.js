const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const tagSchema = new Schema({
  name: String,
  author_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
});

const Tag = mongoose.model('User', tagSchema);
module.exports = Tag;
