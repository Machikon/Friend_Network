// const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


module.exports = {
    // GET all thoughts
    getThoughts(req, res) {
      Thought.find(req.res)
        .then(async (thought) => 
          res.json(thought))
        .catch((err) => 
          res.status(500).json(err));
        },

    // POST a thought
    createThought(req, res) {
      Thought.create(req.body)
        .then(({_id}) => {
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                {$push: {thoughts:_id}},
                {new: true}
            )
     })
     .then((thought) =>
     !thought
     ? res.status(404).json({
        message: 'Not found with this ID',
      })
     : res.json(thought)
      )
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
     // GET a thought
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

     // Update a thought
    
    updateThought(req, res) {
      console.log(req.params)
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidations: true, New:true}
        )
        .then((thought) => {
          if(!thought){
            res.status(400).json({message: "no thought found with that ID"})
          }
          res.status(200).json(thought)
        })
        .catch((err) => res.status(500).json(err));
    },

     // Add reaction
     addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body} },
            { runValidators: true, new:true } 
        )
        .then((thought) =>
        !thought
         ? res.status(404).json({
            message: 'No friend found with this ID',
          })
        : res.status(200).json(thought)
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

    