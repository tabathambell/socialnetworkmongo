const router = require('express').Router();
const {
  addThought,
  getThoughtById,
  getAllThoughts,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughts-controller');

router.route('/')
  .get(getAllThoughts)

router
  .route('/:userId/:thoughtId')
  .post(addThought)
  .get(getThoughtById)
  .put(addReaction)
  .delete(removeThought);

router
  .route('/:thoughtId/reactions')
  .post(addReaction)

router.route('/:userId/:thoughtId/:reactionId')
  .delete(removeReaction);

module.exports = router;