const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { User } = require('../../models');

const router = express.Router();

exports.createNewUser = async function(req, res, next) {
  const { u_email, u_password, u_name, u_birth,
    u_nation, u_phnbr, u_sex } = req.body;
    
  try {
    const exUser = await User.findOne({ where: { u_email }});
    if (exUser) {
      return res.json({ result: 'fail',
                        message: '이미 가입된 이메일입니다',
      });
    }
    const hash = await bcrypt.hash(u_password, 12);
    const user = await User.create({
      u_email,
      u_password: hash,
      u_name,
      u_birth,
      u_nation,
      u_phnbr,
      u_sex,
    });
    return res.json({ result: 'ok',
                      user: user });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

exports.userLogin = function(req, res, next) {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.json({ result: 'fail',
                        message: '로그인 할 수 없습니다 아이디나 패스워드를 확인하세요'});
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.json({ result: 'ok',
                        message: '로그인 성공!'});
    });
  })(req, res, next);
};

exports.userLogout = (req, res, next) => {
  req.logout(); // delete req.user
  // req.session.destory(); // delete req.session
  
  return res.json({ result: 'ok',
                    message: '로그아웃 성공'});
};
