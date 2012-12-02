
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , position = require('./routes/position')
  , pet = require('./routes/pet')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  app.engine('html', require('ejs').renderFile);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  //app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static(path.join(__dirname, '../client/assets/www')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/user/login', user.login);
app.get('/user/logout', user.logout);
app.get('/position', position.list);
app.get('/position/:id/take', position.take);
app.get('/pet/adopt', pet.adopt);
app.get('/pet/:id/feed', pet.feed);
app.get('/pet/:id/walk/:posid', pet.walk);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
