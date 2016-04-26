var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var authy = require('authy')(process.env.AUTHY_API_KEY);

var user_email = null;
var authy_id = null;
var authy_url = null;
var transaction_id = null;
 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.redirect('register.html');
});

app.post('/register', function(req, res){
	res.redirect('transaction.html?email=' + req.body.email + 
				 '&phone_number=' + req.body.phone_number +
				 '&country_code=' + req.body.country_code);
});

app.post('/processtransaction', function(req, res){
	res.redirect('displayTransaction.html?email2=' + req.body.email2 +
			 	 	'&account=' + req.body.acct +
				 	'&amount=' + req.body.amt +
				 	'&email=' + user_email + 
	//				'&status=' + appr.approval_request.status +
					'&trans_id=' + transaction_id);
});
	
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;