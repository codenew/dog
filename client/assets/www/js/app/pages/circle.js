define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
    var board = require('model/board');
    var template = require('text!template/board.tpl');
    var ListView = require('view/listview').ListView;
    
    var CirclePage = Backbone.View.extend({
        events:{
            "click #buttonSubmitThread": "addThread",
        },

        initialize: function(){
            this.threadView = new ListView({
                el: this.$el.find("#threadlist"),                
                collection: this.collection,
                template: this.options.template,
            });
            this.threadView.render();
        },

        addThread: function(){
            var posttext = this.$el.find("#newThread").val();                
            board.add_thread(posttext);
        },
    });

    var page = null;
    $(document).delegate("#circleDetailPage", "pageshow", function(){
        board.get_thread_set( function(thread_set){
            page = new CirclePage({
                el: '#circleDetailPage',
                collection: thread_set,
                template: template,
            });
        });//get_thread_set
    }).delegate("#circleDetailPage", "pagehide", function(){
        if (page){
            page.remove();
            page = null;
        }
    });
    
});

