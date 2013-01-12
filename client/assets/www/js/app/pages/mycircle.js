define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
    , ListView = require('view/listview').ListView
    , global = require('model/global').global
    var DogServer = require('../api').DogServer;
    var User = require('model/user').User;
    var CircleManager =  require('model/circle').CircleManager;
    var board = require('model/circleboard');
    var template = require('text!template/position.tpl');
    
    var MyCirclePage = Backbone.View.extend({
        events:{
            "click a": "setBoardId",            
        },

        initialize: function(){
            this.circleList = new ListView({
                el: this.$el.find("#circleList"),
                collection: this.collection,
                template: this.options.template,
            });
            this.collection.fetch({
                update: true,
                add: true,
                remove: true
            });
            this.render();
        },

        render: function(){
            this.circleList.render();
        },
        
        setBoardId: function(e){
            var btn = $(e.currentTarget);
            var circleId = btn.attr('circle_id');
            var circle = this.collection.get(circleId);
            global.set('currentCircle', circle);

            board.setboardid(circleId);
        },
        remove: function(){
            this.circleList.remove();
            this.circleList = undefined;
            Backbone.View.prototype.remove.call(this);
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
