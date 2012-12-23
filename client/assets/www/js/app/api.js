define(function(require, exports, module) {
    var $ = require('jquery');
    var config = require('./config');
    function DogServer(){
    }
    DogServer.prototype.rpc = function(name, param, callback){
	console.log('rpc:' + config.server + name, param);
	var err = null;
	var result = null;
	$.getJSON(config.server + name, param, function(json){
	    result = json;
	}).error(function(e){
	    err = e;
	}).complete(function(){
	    callback(err, result);
	});
    };
    exports.DogServer = new DogServer();
});