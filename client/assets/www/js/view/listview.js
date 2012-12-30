define(function(require, exports, module) {
    var Backbone = require('backbone')
    , $ = require('jquery')
    , _ = require('underscore');

    exports.ListView = Backbone.View.extend({
	el: null,
	collection: null,
	template: null,
	templateObj: null,
	events:{
	},
	initialize: function(){
	    this.listenTo(this.collection, 'change', this.change);
	    this.listenTo(this.collection, 'add remove', this.change);
	    this.templateObj = new jSmart(this.template);
	},
	change: function(){
	    this.render();
	},
	render: function(){
	    this.$el.html(this.templateObj.fetch({models: this.collection.models}));
	},

    });
});