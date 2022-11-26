const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controller/thoughtController');

// /api/thought for GET and POST thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId for GET, DELETE, and PUT one specific thought
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/thoughtId/:reactions for POST reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughtId/:reactions for DELETE reactions
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;