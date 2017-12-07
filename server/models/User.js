const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: String,
  bio: String,
  photo: String,
  },

{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
