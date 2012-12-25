var _ = require('underscore');

var global = {};

exports = _.extend(exports, {
    set: function(name, value){
	global[name] = value;
    },
    get: function(name){
	return global[name];
    },
});