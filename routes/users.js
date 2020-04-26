const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares/authorization');
const usersController = require('./controllers/users.controller');

/* GET users listing. */

router.get('/logout', isLoggedIn, usersController.userLogout);

/* POST users listing */

router.post('/join', isNotLoggedIn, usersController.createNewUser);
router.post('/login', isNotLoggedIn, usersController.userLogin);

module.exports = router;
