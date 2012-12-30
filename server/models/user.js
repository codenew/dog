var _ = require('underscore');
var globaldata = require('../globaldata');
var mongodb = require('mongodb');
var async = require('async');
var ObjectID = mongodb.ObjectID;

_.extend(exports, {
    GetUser: function(req, userid, next){
	globaldata.get('mongoPool').acquire(req, 'users', function(err, collection, release){
            collection.findOne({_id: new ObjectID(userid)}, function(err, doc){
                if (err){
                    next(err);
                }else{
                    console.log(doc);
                    next(null, doc);
                }
                release();
            });
        });
    },
    
    Register: function(req, username, password, next){
	globaldata.get('mongoPool').acquire(req, 'users', function(err, collection, release){
            var user = {
                name: username,
                password: password,
                nickname: username,
            };
            collection.insert(user, {w:1}, function(err, result){
                if (err){
                    next(err);
                }else{
                    console.log(result);
                    next(null, 1);
                }
                release();
            });
        });
    },

    Auth: function (req, username, password, next){
	globaldata.get('mongoPool').acquire(req, 'users', function(err, collection, release){
            collection.findOne({name: username}, function(err, docs){
                if (err){
                    next(err);
                }else{
                    console.log(docs);
                    if (docs.password == password){
                        next(null, docs._id);
                    }else{
                        next('password mismatch');
                    }
                }
                release();
            });
        });

    },
    
    Logout: function(userid, logoutTime){
	delete users[userid];
    },
    init: function(mysqlPool){
	mysql = mysqlPool;
    }
    

});
