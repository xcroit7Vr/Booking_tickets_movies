var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var flash = require('req-flash');
const jwt = require('jsonwebtoken');
var usersRouter = require('./routes/users');
var kelasRouter = require('./routes/kelas');
var sessionRouter = require('./routes/session')
var productsRouter = require('./routes/products');

var indexRouter = require('./routes/index');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');


var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: 'iniadalahrahasiamu',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }
  }));
app.use(flash());


app.use(function(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.setHeader('Pragma', 'no-cache');
    next();
});

// gunakan body parser sebgai middleware
// Middleware untuk membaca JSON
app.use(bodyParser.json());


app.set('views',path.join(__dirname,'src/views'));

app.set('views',path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

app.use('/users', usersRouter);
app.use('/kelas', kelasRouter);
app.use('/session', sessionRouter);
// fokus ke ini
app.use('/', indexRouter);
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
// diabaikan
app.use('/products', productsRouter);


module.exports = app;