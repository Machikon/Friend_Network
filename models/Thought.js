const { Schema, model, type} = require('mongoose');
const moment = require('moment');

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
      get: createdAtVal => moment(createdAtVal).format("MMM Do YY"),
    },
  },
  {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText:{
      type:String,
      required: true,
      min:1,
      max:280,
    },
    createdAt:{
      type: Date,
      default:Date.now(),
      get: createdAtVal => moment(createdAtVal).format("MMM Do YY"),
    },
    userName: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJson:{
      virtuals:true,
      getters:true,
    },
    id: false,
  }
)


thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;



