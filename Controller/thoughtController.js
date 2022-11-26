const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


module.exports = {
    // GET all thoughts
    getThoughts(req, res) {
      Thought.find(req, res)
        .then(async (thought) => 
          res.json(thought))
        .catch((err) => 
          res.status(500).json(err));
        },
    // POST a thought
    CreateThought(req, res) {
      Thought.create(req,body)
        .then((thought) =>
              res.json(thought))
        .catch((err) => res.status(500).json(err));
      },
    // DELETE a thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
          !thought
             ? res.status(404).json({ message: 'No such thought exists' })
              : User.findOneAndUpdate(
                 { thoughts: req.params.thoughtId },
                 { $pull: { thoughts: req.params.thoughtId } },
                 { new: true }
                )
        )
        .then((course) =>
            !course
             ? res.status(404).json({
                message: 'Thought deleted, but no users found',
              })
            : res.json({ message: 'Thought successfully deleted' })
         )
         .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
     },  
     // PUT a thought
     getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .lean()
          .then(async (thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with that ID' })
              : res.json({
                  thought,
                  
                })
          )
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },

     // Add reaction
     addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body} },
            { runValidators: true, new:true } 
        )
        .then((thought) =>
        !coursethought
         ? res.status(404).json({
            message: 'No friend found with this ID',
          })
        : res.json({ message: 'Thought successfully deleted' })
        )
        .catch((err) => {
        console.log(err);
        res.status(500).json(err);
        });
     },
     // Delete reaction
     deleteReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res
                  .status(404)
                  .json({ message: 'No thought found with that ID :(' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
    };

    