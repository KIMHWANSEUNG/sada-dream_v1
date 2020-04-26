const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./access');
const pagesController = require('./controllers/pages.controller');


// 내 정보
router.get('/profile', isLoggedIn, (req, res) => {
  console.log(res);
});

// 회원 가입
router.get('/join', isNotLoggedIn, (req, res) => {
  
});
// 구매 요청
router.get('/add', isLoggedIn, (req, res) => {
  
});
