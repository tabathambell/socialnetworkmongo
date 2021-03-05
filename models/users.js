const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: 'Username is required.',
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: 'E-mail is required.',
    match: [/.+@.+\..+/]
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
      getters: true
    },
    id: false
  }
);

UserSchema.virtual('friendCount').get(function () {
  return this.friends.length
});

const Users = model('Users', userSchema);

module.exports = Users;