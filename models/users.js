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
    validate: true //validation here
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ]
},
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

UserSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

const Users = model('Users', userSchema);

module.exports = Users;