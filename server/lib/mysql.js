"use strict";

var poolModule = require('generic-pool');
var exception = require('./exceptions');
var log = require('./log');
var queryTimeLimit = 200; // milliseconds
// todo: long query log

function MysqlObj(config){
	var pool = poolModule.Pool({
		name	 : config.name || 'mysql',
		create   : function(callback) {
			var mysql = require('mysql');
			var c = mysql.createClient(config.mysql);

			// parameter order: err, resource
			// new in 1.0.6
			callback(null, c);
		},
		destroy  : function(client) { client.end(); },
		max	  : config.maxConnection || 10,
		idleTimeoutMillis : config.idleTimeoutMillis || 30000,
		log : config.log || false
	});
	var self = {
		query: function(req, sql, params, next){
			if (!pool){
				next.failed();
				return;
			}
			var beginTime = new Date().getTime();
			var caller = exception.caller();
			//console.log('pool.acquire');
			// acquire connection - callback function is called
			// once a resource becomes available
			pool.acquire(function(err, client) {
				if (config.syslog && sql.search(/^\s*select|^\s*set\*names/i) == -1){
					var logmsg = ['query by: ', caller.func, ':', caller.line, '[', sql, ']', JSON.stringify(params)].join('');
					log.log(req, logmsg);
				}
				var query = client.query(sql, params, function(err, results, fields) {
					// return object back to pool
					var endTime = new Date().getTime();
					if (endTime - beginTime > queryTimeLimit){
						var logmsg = ['query by: ', caller.func, ':', caller.line, '[', sql, ']', JSON.stringify(params)].join('');
						logmsg = ['Slow query, takes', endTime - beginTime, 'ms', logmsg].join(' ');
						log.log(req, logmsg);
						log.console(req, 'WARNING', log.level.ASSERTION, logmsg);
					}
					if (err) {
						log.error(req, err);
						next.failed(err.message);
					}else{
						next.success(results, fields);
					}

					pool.release(client);
				});
			});
		}
	};
	return self;
}

exports.createPool = function(config){
	return MysqlObj(config);
};
