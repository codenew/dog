define(function(require, exports, module){
    var Backbone = require('backbone');

    exports.Circle = Backbone.Model.extend({
        urlBase:'/circle',
        idAttribute: '_id',
	    location: null,
	    radius: null,
	    owner: 0,
    });
    exports.CircleManager = Backbone.Collection.extend({
        urlBase:'/circle',
	    model: exports.Circle,
    });
});
