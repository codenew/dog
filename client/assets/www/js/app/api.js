define(function(require, exports, module) {
    var $ = require('jquery');
    var config = require('./config');
    function DogServer(){
    }
    DogServer.prototype.rpc = function(name, param, callback){
	var url = [config.server, name].join('/');
	console.log('rpc:' + url, param);
	var err = null;
	var result = null;
	$.getJSON(url, param, function(json){
	    result = json;
	}).error(function(e){
	    err = e;
	}).complete(function(){
	    callback(err, result);
	});
    };
    exports.DogServer = new DogServer();
});