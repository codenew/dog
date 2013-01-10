var async = require('async')
, _ = require('underscore')
, globaldata = require('../globaldata');

var _ = require('underscore');
var mongodb = require('mongodb');
var async = require('async');
var ObjectID = mongodb.ObjectID;

function forward(next, f){
    return function(err){
        if (err){
            next(err);
            return;
        }
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        f.apply(this, args);
    };
}

_.extend(exports, {
    GetSingleUserEvent: function(req, id, next){
	globaldata.get('mongoPool').acquire(
            req,
            'userevents',
            forward(next, function(collection, release){
                collection.findOne({
                    _id: new ObjectID(id)
                }, function(err, doc){
                    if (err){
                        next(err);
                    }else{
                        console.log(doc);
                        next(null, doc);
                    }
                    release();
                });
            })
        );
    },
    GetUserEvent: function(req, userid, next){
        globaldata.get('mongoPool').acquire(
            req,
            'userevents',
            forward(next, function(collection, release){
                collection.find({
                    userid: new ObjectID(userid)
                }, {
                    sort: [['time', 1]],
                    limit: 20
                }).toArray(function(err, docs){
                    if (err){
                        next(err);
                    }else{
                        console.log('find:', docs);
                        next(null, docs);
                    }
                    release();
                });
            })
        );
    },
    get_one: function(id, req, res){
        this.GetSingleUserEvent(req, id, function(err, doc){
            if (err){
                console.log(err);
		res.send(500, err);
            }else{
                res.json(doc);
            }
        });
	console.log("get userevent from mongodb,id is "+id);
    },
    put_one: function(id, req, res){
	res.send(404);
    },
    post_one: function(zreq, res){
	res.send(404);
    },
    delete_one: function(id, req, res){
	res.send(404);
    },
    get_all: function(req, res){
        this.GetUserEvent(req, req.session.userid, function(err, docs){
            if (err){
                console.log(err);
                res.send(500, err);
            }else{
                console.log(docs);
                res.json(docs);
            }
        });
    },

});