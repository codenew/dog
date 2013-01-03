var _ = require('underscore');
var globaldata = require('../globaldata');
var mongodb = require('mongodb');
var async = require('async');
var ObjectID = mongodb.ObjectID;

_.extend(exports, {
    GetUser: function(req, userid, next){
	globaldata.get('mongoPool').acquire(req, 'users', function(err, collection, release){
            if (err){
                next(err);
                return;
            }
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
            if (err){
                next(err);
                return;
            }
            var user = {
                name: username,
                password: password,
                nickname: username,
                level: 1,
                money: 100,
                circleCount: 0,
                maxCircleCount: 5,
                petCount: 0,
                maxPetCount: 10,
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
            if (err){
                next(err);
                return;
            }
            collection.findOne({name: username}, function(err, doc){
                if (err){
                    next(err);
                }else if (!doc){
                    next('user not found');
                }else{
                    console.log(doc);
                    if (doc.password == password){
                        next(null, doc._id);
                    }else{
                        next('password mismatch');
                    }
                }
                release();
            });
        });

    },
    
    Logout: function(req, userid, logoutTime){
        globaldata.get('mongoPool').acquire(req, 'users', function(err, collection, release){
            if (err){
                console.log('logout failed to acquire db.users');
                return;
            }
            collection.update({
                _id: new ObjectID(userid),
            }, {
                $set: {
                    lastLogoutTime: logoutTime,
                },
            }, function(err, modifiedCount){
                if (err){
                    console.log('logout failed:', err);
                }else{
                    console.log('logout:', modifiedCount);
                }
                release();
            });
        });
        
    },

});
