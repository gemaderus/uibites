const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const likeSchema = new Schema({
  author_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  card_id: {
    type: Schema.Types.ObjectId,
    ref: "Card"
  }
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

var Like = mongoose.model("Like", likeSchema);


module.exports = Like;
