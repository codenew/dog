define(function(require, exports, module){
    var Backbone = require('backbone')
    , _ = require('underscore');
    var Global = Backbone.Model.extend({
        defaults:{
            
        },
    });
    _.extend(exports, {
        global: new Global(),
    });
});