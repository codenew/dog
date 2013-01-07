define(function(require, exports, module){
    var Backbone = require('backbone')
    , _ = require('underscore')
    , config = require('app/config');

    var local_circleManager = null;
    var Circle = Backbone.Model.extend({
        idAttribute: '_id',
        defaults:{
            location: {latitude: 0, longitude: 0},
            radius: 10,
            name: '新圈子',
            user: null,
            userid: null,
        },	    
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
