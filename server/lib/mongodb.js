"use strict";

var poolModule = require('generic-pool');
var exception = require('./exceptions');
var log = require('./log');
var mongo = require('mongodb');
var queryTimeLimit = 200; // milliseconds
// todo: long query log

function MongoObj(config){
    var pool = poolModule.Pool({
	name	 : config.name || 'mysql',
	create   : function(callback) {
	    // callback parameter order: err, resource
	    // new in 1.0.6
	    mongo.MongoClient.connect(["mongodb://",
				       config.mongodb.host, ':',
				       config.mongodb.port, '/',
				       config.mongodb.database].join(''), callback);
	},
	destroy  : function(client) { client.close(); },
	max	  : config.maxConnection || 10,
	idleTimeoutMillis : config.idleTimeoutMillis || 30000,
	log : config.log || false
    });
    function slowLog(req, info, caller, time){
	var logmsg = [info, ' query by: ', caller.func, ':', caller.line].join('');
	logmsg = ['Slow query, takes', time, 'ms', logmsg].join(' ');
	log.log(req, logmsg);
	log.console(req, 'WARNING', log.level.ASSERTION, logmsg);
    }
    var self = {
	acquire: function(req, collectionName, next){
	    if (!pool){
		next('failed');
		return;
	    }
	    var caller = exception.caller();
	    var acquireTimeBegin = new Date().getTime();
	    //console.log('pool.acquire');
	    // acquire connection - callback function is called
	    // once a resource becomes available
	    pool.acquire(function(err, db) {
		var acquireTimeEnd = new Date().getTime();
		if (acquireTimeEnd - acquireTimeBegin > queryTimeLimit){
		    slowLog(req, 'acquire time', caller, acquireTimeEnd - acquireTimeBegin);
		}
		if (err){
                    next(err);
                }else if(!db){
		    pool.release(db);
		    next("mongo db not connected");
		}else{
		    var collection = db.collection(collectionName);
		    var beginTime = new Date().getTime();
		    next(null, collection, function(){
			var endTime = new Date().getTime();
			if (endTime - beginTime > queryTimeLimit){
			    slowLog(req, 'query time', caller, endTime - beginTime);
			}					
			pool.release(db);
		    });
		}
	    });
	}
    };
    return self;
}

exports.createPool = function(config){
    return MongoObj(config);
};
