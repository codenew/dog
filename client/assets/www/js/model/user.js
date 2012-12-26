define(function(require, exports, module){
    var Backbone = require('backbone');
    var User = Backbone.Model.extend({
	location: {latidude: 0, longitude: 0},
	userid: 0,
    });

    exports.User = User;

    var user = new User({
	location: {latitude: 31, longitude: 121},
    });
    exports.getSelf = function(){
	return user;
    };
});