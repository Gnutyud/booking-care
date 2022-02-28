const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get("/", homeController.getHome);
// user api
router.post("/api/users/register", userController.createUser);
router.post("/api/users/login", userController.loginUser);

module.exports =  router;