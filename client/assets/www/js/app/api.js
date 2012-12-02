define(function(require, exports, module) {
	var $ = require('jquery');
	var config = require('./config');
	function DogServer(){
	}
	DogServer.prototype.rpc = function(name, param, callback){
	    $.getJSON(config.server + name, param, callback);
	};
	exports.DogServer = new DogServer();
    });