define(function(require, exports, module){
    var Backbone = require('backbone');

    exports.Circle = Backbone.Model.extend({
        urlBase:'/circle',
        idAttribute: 'id',
	    location: null,
	    radius: null,
	    owner: 0,
    });
    exports.CircleManager = Backbone.Collection.extend({
        url:'/circle',
	    model: exports.Circle,
    });
});
