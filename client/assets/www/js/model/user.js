define(function(require, exports, module){
    var Backbone = require('backbone');
    var User = Backbone.Model.extend({
	location: {latidude: 0, longitude: 0},
	userid: 0,
    });

    exports.User = User;
});