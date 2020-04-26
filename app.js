
const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const bodyParser = require('body-parser');

// port number
const port = process.env.PORT || 5000;

// .env
require('dotenv').config();

// router init

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

// passport setting
const passportConfig = require('./passport');

// sequelize setting
const sequelize = require('./models').sequelize;
const app = express();

// sequelize start
sequelize.sync();
passportConfig(passport);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// logger settings
app.use(logger('dev')); // opt [short | dev | common | combined]
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));

app.use(flash());
app.use(bodyParser.json());
app.use(express.json({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

// router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);



app.use(bodyParser.urlencoded({
  extended: true
}));

const multer = require('multer');
const upload = multer({dest: './upload'});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});

app.listen(port, () => console.log(`Listening on port ${port}`));


module.exports = app;