var express=require('express');
var app=express();
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var session=require('express-session');
var flash=require('connect-flash');
var cookieparser=require('cookie-parser');
var logger=require('morgan');


var path=require('path');

//include the routes files
var routes=require('./routes/index');
var doctors=require('./routes/d');
var catagories=require('./routes/cata');

mongoose.connect('mongodb://localhost/finddoc');

//port setup
  var port=4444;
//bodyparser setup
  app.use(bodyparser.urlencoded({ extended: true}));
  app.use(bodyparser.json);
  //view engine setup
  app.set('views',path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(cookieparser());
  //public folder setup
  app.use(express.static(path.join(__dirname,'public')));

  app.use(session({
  	secret:'secret',
  	saveUninitialized:true,
  	resave: true
  }));

  app.use(flash());

app.use(function(req,res,next){
	res.locals.messages=require('express-messages')(req, res);
	next();
});

//path setup

app.use('/',routes);
app.use('/d',doctors);
app.use('/cata',catagories);


//error handlers
app.use(function(req, res,next){
	var err=new Error('not found');
	err.status=404;
	next(err);
});
if(app.get('env')==='development'){
	app.use(function(err,req,res,next){
		res.status(err.status || 500);
		res.render('error', {
			message:err.message,
			error:err
		});
	});
}
app.use(function(err,req,res,next){
	res.status(err.status || 500);
	res.render('error', {
		message:err.message,
		error: {}
	});
});
app.listen(port);
console.log('the connect at'+port);
module.exports=app;