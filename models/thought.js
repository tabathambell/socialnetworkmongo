const { Schema, model } = require('mongoose');
const dateFormat = require('..utils/dateFormat');

const thoughtSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  thoughtText: {
    type: String,
    required: 'You must add text in your thought!',
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: ''//Use a getter method to format the timestamp on query
  },
  reactions: {
    // Reaction Schema
  }
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reaction.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;