define(function(require, exports, modules){
    var Backbone = require('backbone')
    , _ = require('underscore')
    , config = require('app/config');

    var Chat = Backbone.Model.extend({
//	url: config.server + 'chat',
	urlRoot: '/chat'
    });
    exports.Chat = Chat;
});