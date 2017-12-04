const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  comment: String,
  rating: Number,
  author_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  
  receiver_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

var Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
