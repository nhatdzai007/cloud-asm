var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var legoRouter = require('./routes/lego');
var carsRouter = require('./routes/cars');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false}))

var hbs = require('hbs');
hbs.registerHelper('dateFormat', require('handlebars-dateformat')); 

var mongoose = require("mongoose");
var uri = 'mongodb+srv://ngminhcun2003:minhnhat2003@cluster0.mccdi.mongodb.net/1644';
mongoose.connect(uri)
.then(() => console.log ("Connect to DB succeed !"))
.catch((err) => console.log (err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/lego', legoRouter);
app.use('/cars', carsRouter);

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

//declare port
app.listen(process.env.PORT || 3001);

module.exports = app;

// nên t mới bảo là lấy xừ code m xong đổi ảnh vs tên biến đi cho nhanh ấy