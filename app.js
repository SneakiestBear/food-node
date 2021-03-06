var express = require('express');
var hbs = require('express-hbs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://app:Dave&DanDB1!@ds135089.mlab.com:35089/recipe-database');
var index = require('./routes/index');
var users = require('./routes/users');
var recipes = require('./routes/recipes');
var ingredients = require('./routes/ingredients');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views/layouts'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.express4({
  defaultLayout: './views/layout.hbs',
  partialsDir: './views/partials',
  layoutsDir: './views/layouts'
}))

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/test', index);
app.use('/users', users);
app.use('/', recipes);
app.use('/ingredients', ingredients);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page change
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
