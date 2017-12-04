const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const likeSchema = new Schema({
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

var Like = mongoose.model("Comment", likeSchema);
module.exports = Like;
