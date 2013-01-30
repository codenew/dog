/**
 * Module dependencies.
 */
var express = require('express')
, routes = require('./routes')

, position = require('./routes/position')

, chat = require('./routes/chat')
, circle = require('./routes/circle')

, http = require('http')
, log = require('./lib/log')
, restful = require('./lib/restful')
, path = require('path')
, board = require ('./routes/board_route');



process.on("uncaughtException", function(err){
    log.error(null, 'uncaughtException:' + err.stack);
});

var app = express();
/*
var mysqlPool = require("./lib/mysql").createPool({
    name: 'mysql.game',
    mysql:{
	host:'127.0.0.1',
	user:'root',
	password: '000000',
	database: 'db_dog'
    },
    maxConnection: 10,
    idleTimeoutMillis: 300000,
    log: false,
    syslog: true
});

require('./models/user').init(mysqlPool);
*/
var mongoPool = require('./lib/mongodb').createPool({
    name: 'mongo.dog',
    mongodb: {
	host: '127.0.0.1',
	port: 27017,
	database: 'dog',
    },
    maxConnection: 10,
    idleTimeoutMllis: 5 * 60 * 1000,
    log: false,
    syslog: true
});
require('./globaldata').set('mongoPool', mongoPool);

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');
    app.engine('html', require('ejs').renderFile);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.cookieSession({secret: 'dog.1'}));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    //app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, '../client/assets/www')));
    app.use(express.static(path.join(__dirname, '../apk')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', routes.index);


function checkAuth(req, res, next){
    console.log('checkAuth', req.session);
    if (typeof req.session.userid == 'string'){
        next();
    }else{
        res.send(403);
    }
}

// user routers
var user = require('./routes/user');
app.get('/user/login', user.login);
app.get('/user/logout', user.logout);
app.get('/user/register', user.register);
restful.route(app, '/user', [checkAuth], user);

// circle routers
var circle = require('./routes/circle');
app.get('/circle/fight', [checkAuth], circle.fight);
restful.route(app, '/circle', [checkAuth], circle);

// pet routers
var pet = require('./routes/pet');
app.get('/pet/adopt', [checkAuth], pet.adopt);
restful.route(app, '/pet', [checkAuth], pet);

// user event routers
var userevent = require('./routes/userevent');
restful.route(app, '/userevent', [checkAuth], userevent);


app.all('/position', position.rest);
app.all('/chat', chat.rest);
app.all('/chat/:id', chat.rest);

restful.route(app, '/board',[checkAuth], require('./routes/board_route'));
//app.all('/board/:id', board.rest);


http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
