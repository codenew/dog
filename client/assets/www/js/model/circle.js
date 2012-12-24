define(function(require, exports, module){
    var Backbone = require('backbone');
    var local_circleManager = null;
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
    exports.setCircleManager = function(new_circleManager)
    {
        local_circleManager = new_circleManager;
    };
    
    exports.getCircleManager = function(next)
    {
        next(local_circleManager);
    };
});


