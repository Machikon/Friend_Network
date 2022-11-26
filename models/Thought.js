const { Schema, model, type} = require('mongoose');
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String, min: 1, max: 280,
      required: true,

    },
    createdAt: {
      type: Date, 
      default: Date.now(),
      get: (date) => timeSince(date),
    },
    userName: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      },
    ],
    reactions: [reactionsSchema],
  },
  {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
  }
);
thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

// reactions (Schema only)
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (date) => timeSince(date),
    },
  },
  {
    toJSON: {
      getters: true,
    },
   
  }
);

