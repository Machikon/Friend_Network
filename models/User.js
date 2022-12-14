const { Schema, model } = require('mongoose');


// Schema to create User model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    thoughts: [
      {
        type:Schema.Types.ObjectId,
        ref: 'Thought',  
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);
userSchema.virtual("friendCount").get(function(){
  return this.friends.length;
})

const User = model('User', userSchema);

module.exports = User;