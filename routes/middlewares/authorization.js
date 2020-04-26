exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(200).json({  result: 'fail',
                            message: '로그인이 필요한 서비스 입니다.',
                            auth: req.isAuthenticated(),
                            redirect: '/login',
                            session: req.session,
                            });
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(200).json({  result: 'fail',
                            message: '로그인이 된 상태에서는 이용할 수 없습니다.',
                            auth: req.isAuthenticated(),
                            session: req.session
                          });
  }
};