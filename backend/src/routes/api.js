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

module.exports = router;