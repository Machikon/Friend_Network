const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  postFriend,
  deleteFriend,
} = require('../../controller/userController.js');

// /api/users for GET all users and POST users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId for GET, POST, and DELETE one specific user
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router.route("/:userId/friends/:friendID").post(postFriend).delete(deleteFriend);

module.exports = router;