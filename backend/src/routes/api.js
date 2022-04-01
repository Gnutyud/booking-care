const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const { authByToken } = require('../middleware/auth');

const router = express.Router();

router.get("/", homeController.getHome);
// user api
router.post("/api/users/register", userController.createUser);
router.post("/api/users/login", userController.loginUser);
router.patch("/api/user", authByToken, userController.updateUserDetails);
router.post("/api/user/refreshToken", userController.refreshToken);
router.get("/api/users", userController.getAllUsers);
router.delete("/api/user/:id", userController.deleteUser);

module.exports = router;