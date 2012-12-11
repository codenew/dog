define(function(require, exports, module) {
    var $ = require('jquery');
    var config = require('./config');
    function DogServer(){
    }
    DogServer.prototype.rpc = function(name, param, callback){
	console.log('rpc:' + config.server + name, param);
	$.getJSON(config.server + name, param, callback);
    };
    exports.DogServer = new DogServer();
});