const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  text: String,
  author_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  card_id: {
    type: Schema.Types.ObjectId,
    ref: "Card"
  },
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

var Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
