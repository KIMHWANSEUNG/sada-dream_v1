const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares/authorization');
const usersController = require('./controllers/users.controller');

/* GET users listing. */

// logout
router.get('/logout', isLoggedIn, usersController.userLogout);

/* POST users listing */

// 회원 가입 
router.post('/join', isNotLoggedIn, usersController.createNewUser);
// 로그인
router.post('/login', isNotLoggedIn, usersController.userLogin);

module.exports = router;
