const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  postFriend,
  deleteFriend,
} = require('../../controllers/userController.js');

// /api/users for GET all users and POST users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId for GET, POST, and DELETE one specific user
router
  .route('/:Id')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router.route("/:id/friends/:friendsID").post(postFriend).delete(deleteFriend);

module.exports = router;