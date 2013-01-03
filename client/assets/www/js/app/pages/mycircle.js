define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
    , ListView = require('view/listview').ListView
    var DogServer = require('../api').DogServer;
    var User = require('model/user').User;
    var CircleManager =  require('model/circle').CircleManager;
    var board = require('model/board');
    var template = require('text!template/position.tpl');
    
    var MyCirclePage = Backbone.View.extend({
        events:{
            "click a[circle_id]": "setBoardId",
        },

        initialize: function(){
            this.circleList = new ListView({
                el: this.$el.find("#circleList"),
                collection: this.collection,
                template: this.options.template,
            });
            this.circleList.render();
            this.collection.fetch({
                update: true,
                add: true,
                remove: true
            });
        },

        render: function(){
        },
        setBoardId: function(e){
            var btn = $(e.currentTarget);
            board.setboardid(btn.attr('circle_id'));
        },
    });			

    var page = null;
    $(document).delegate("#myCirclePage", "pageshow", function(){
        page = new MyCirclePage({
            el: '#myCirclePage',
            collection: CircleManager.getSingleton(),
            template: template,
        });
    }).delegate("#myCirclePage", "pagehide", function(){
        page.remove();
        page = null;
    });

});

