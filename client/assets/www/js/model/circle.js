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
//    exports.setCircleManager = function(new_circleManager)
//    {
//        local_circleManager = new_circleManager;
//    };
    
    exports.getCircleManager = function(next)
    {
        if (local_circleManager == null){ //Œ¥≥ı ºªØ
            local_circleManager = new this.CircleManager();
            local_circleManager.fetch({
                success:function(collection, response, options){                                        
                    console.log("Fetch CirlesManager success!");                    
                },
                error:function (collection, xhr, options){
                    console.log("Fetch CirlesManager failed!");
                    local_circleManager = null;
                },
             });       
        }
        else{
            next(local_circleManager);
        }
    };
});


