define(function(require, exports, modules){
    var Backbone = require('backbone')
    , _ = require('underscore')
    , config = require('app/config');

    var Chat = Backbone.Model.extend({
        url: function(){
            if (this.id){
                return config.server + '/chat/' + this.id;
            }
            return config.server + '/chat';
        },
        defaults:{
            from: null,
            to: null,
            text: '',
        },
    });

    var ChatManager = Backbone.Model.extend({
        url: function(){
            return config.server + '/chat';
        },
        model: Chat,
    }, {
        addChat: function(from, to, text){
            this.create({from: from, to: to, text: text});
        }
    });

    _.extend(exports, {
        Chat: Chat,
        ChatManager: ChatManager,
    });
});