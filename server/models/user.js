
var _ = require('underscore');
var users = {};

function User(userid, name){
    this.userid = userid;
    this.name = name;

}

_.extend(exports, {
    GetUser: function(userid, next){
        if (!(userid in users)){
            // load from mysql
            users[userid] = new User(userid, 'kaikai');
        }
        
        if (!(userid in users)){
            next('no such user');
        }else{
            next(null, users[userid]);
        }
    },
    Auth: function (username, password, next){
        if (username == 'kaikai'){
            next(null, 1);
        }else{
            next('no such user');
        }
    },
    Logout: function(userid, logoutTime){
        delete users[userid];
    }

});
