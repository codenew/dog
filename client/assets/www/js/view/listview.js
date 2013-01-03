define(function(require, exports, module) {
    var Backbone = require('backbone')
    , $ = require('jquery')
    , _ = require('underscore');

    exports.ListView = Backbone.View.extend({
        el: null,
        collection: null,
        templateObj: null,
        events:{
        },
        initialize: function(){
            this.listenTo(this.collection, 'change', this.onChange);
            this.listenTo(this.collection, 'add', this.onAdd);
            this.listenTo(this.collection, 'remove', this.onRemove);
            this.templateObj = new jSmart(this.options.template);
        },
        onChange: function(model){
            var html = this.templateObj.fetch({model: model.attributes});
            this.$el.find("[lid=" + model.id + "]").html(html);
            this.$el.children('ul').listview('refresh');
        },
        onAdd: function(model){
            var n = $("<li>").html(
                this.templateObj.fetch({model: model.attributes})
            ).attr("lid", model.id);
            //n.addClass('ui-li ui-li-static ui-btn-up-c');
            this.initListView();
            this.$el.children('ul').append(n);
            this.$el.children('ul').listview('refresh');
        },
        onRemove: function(model){
            this.$el.find("[lid=" + model.id + "]").remove();
        },
        initListView: function(){
            if (this.$el.children('ul').length == 0){
                this.$el.html('<ul>').children('ul').attr('data-role', 'listview').listview();
            }
        },
        render: function(){
            this.initListView();
            var self = this;
            this.collection.forEach(function(item){
                self.onAdd(item);
            });
            //this.$el.children('ul').listview('refresh');
        },

    });
});