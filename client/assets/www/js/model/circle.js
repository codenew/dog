define(function(require, exports, module){
    var Backbone = require('backbone')
    , _ = require('underscore')
    , config = require('app/config');

    var local_circleManager = null;
    var Circle = Backbone.Model.extend({
        url:function(){
            if (this.id){
                return config.server + '/circle/' + id;
            }
            return config.server + '/circle';
        },
        idAttribute: '_id',
        location: null,
        radius: null,
        name:null,
        user:null,
        userid:0	    
    });
    
    var CircleManager = Backbone.Collection.extend({
        url:function(){
            return config.server + '/circle';
        },
        model: Circle,
    }, {
        getSingleton: function(){
            if (!local_circleManager){
                local_circleManager = new CircleManager();
            }
            return local_circleManager;
        }
    });

    _.extend(exports, {
        Circle: Circle,
        CircleManager: CircleManager,
    });
});
