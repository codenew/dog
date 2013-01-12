define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
    , global = require('model/global').global
    var board = require('model/circleboard');
    var template = require('text!template/board.tpl');
    var ListView = require('view/listview').ListView;
    
    var CirclePage = Backbone.View.extend({
        events:{
            "click #buttonSubmitThread": "addThread",
            "click a": "showThread",
        },

        initialize: function(){
            this.listenTo(this.model, "change:name", this.updateName);
            this.threadView = new ListView({
                el: this.$el.find("#threadlist"),                
                collection: this.collection,
                template: this.options.template,
            });
            this.render();
        },
        updateName: function(){
            this.$el.find('#circleName').text(this.model.get('name'));
        },
        render: function(){
            this.updateName();
            this.threadView.render();
        },
        addThread: function(){
            var posttext = this.$el.find("#newThread").val();                
            board.add_thread(posttext,0);
        },
        
        showThread:function(e){
            var btn = $(e.currentTarget);
            if (btn != null && btn.attr('threadid') != null){
                board.setthreadid(btn.attr('threadid'));
                $.mobile.changePage("thread.html");
            }
        },

        remove: function(){
            this.threadView.remove();
            this.threadView = undefined;
            Backbone.View.prototype.remove.call(this);
        },

    });
    
        
    var ReplyPage = Backbone.View.extend({
        events:{
            "click #buttonReplyThread": "addReply",
        },
        initialize: function(){            
            this.threadView = new ListView({
                el: this.$el.find("#replyList"),                
                collection: this.collection,
                template: this.options.template,
            });
        
            this.render();
        },
        render: function(){
            this.threadView.render();
        },
        remove: function(){
            this.threadView.remove();
            this.threadView = undefined;
            Backbone.View.prototype.remove.call(this);
        },
        
        addReply: function(){
            var posttext = this.$el.find("#newReply").val();                
            board.add_thread(posttext,1);
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
        var circle = global.get('currentCircle');
        board.get_thread_set( function(thread_set){
            page = new CirclePage({
                el: '#circleDetailPage',
                collection: thread_set,
                model: circle,
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
