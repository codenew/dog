define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
    var board = require('model/circleboard');
    var thread = require('model/thread');
    var template = require('text!template/board.tpl');
    var ListView = require('view/listview').ListView;
    
    var CirclePage = Backbone.View.extend({
        events:{
            "click #buttonSubmitThread": "addThread",
            "click a": "showThread",
        },

        initialize: function(){
            this.threadView = new ListView({
                el: this.$el.find("#threadlist"),                
                collection: this.collection,
                template: this.options.template,
            });
            this.render();
        },
        render: function(){
            this.threadView.render();
        },
        addThread: function(){
            var posttext = this.$el.find("#newThread").val();                
            board.add_thread(posttext);
        },
        
        showThread:function(e){
            var btn = $(e.currentTarget);
            board.setthreadid(btn.attr('threadid'));
            $.mobile.changePage("thread.html");
        },

        remove: function(){
            this.threadView.remove();
            this.threadView = undefined;
            Backbone.View.prototype.remove.call(this);
        },

    });
    
        
    var ReplyPage = Backbone.View.extend({
        events:{
        },
        initialize: function(){
            this.threadView = new ListView({
                el: this.$el.find("#reply"),                
                collection: this.collection,
                template: this.options.template,
            });
            this.threadView.render();
            this.render();
        },
        remove: function(){
            this.threadView.remove();
            this.threadView = undefined;
            Backbone.View.prototype.remove.call(this);
        },

    });
    

    var page = null;
    var pageThread = null;
    $(document).delegate("#threadPage", "pageshow",function(){
        board.get_reply_set( function(thread_set){
            pageThread = new ReplyPage({
                el:'#threadPage',
                collection: thread_set,
                template:template,
            });//CirclePage
        });        
    }).delegate("#threadPage", "pagehide", function(){
        if (pageThread){
            pageThread.remove();
            pageThread = null;
        }
    }); 
    
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
