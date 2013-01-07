define(function(require, exports, module){
    var Backbone = require('backbone')
    , _ = require('underscore')
    , config = require('app/config');

    var UserEvent = Backbone.Model.extend({
        idAttribute: "_id",
        defaults:{
            userid: null,
        },
    });

    var UserEvents = Backbone.Collection.extend({
        model: UserEvent,
        url: function(){
            return config.server + '/userevent';
        }
    }, {
        
    });

    _.extend(exports, {
        UserEvent: UserEvent,
        UserEvents: UserEvents,
    });
});