define(function(require, exports, module){
    var Backbone = require('backbone');

    exports.Circle = Backbone.Model.extend({
	location: null,
	radius: null,
	owner: 0,
    });
    exports.CircleManager = Backbone.Collection.extend({
	model: exports.Circle,
    });
});
