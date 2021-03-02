const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
      type: String,
      unique: true,
      required: 'Please enter a username.',
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: 'Please enter a valid email.',
      valid: true //validation here
    },
    thoughts: {
      type: Date,
      default: Date.now
    },
    friends: {
      type: String,
      default: 'Large'
    }
  });

const Users = model('Users', userSchema);

module.exports = Users;