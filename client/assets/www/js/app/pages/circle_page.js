define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
    , global = require('model/global').global
    , User = require('model/user').User
    , board = require('model/circleboard')
    , ThreadSet = require('model/circleboard').ThreadSet
    , listTemplate = require('text!template/board.tpl')
    , circleInfoTemplate = require('text!template/circleInfo.tpl')
    , threadTemplate = require('text!template/thread.tpl')
    , ListView = require('view/listview').ListView;
    
    var CirclePage = Backbone.View.extend({
        events:{
            "click #buttonSubmitThread": "addThread",
            "click li > a": "showThread",
            "click #buttonOccupyCircle": "occupyCircle",
        },

        initialize: function(){
            this.listenTo(this.model, "change:name", this.updateName);
            //this.listenTo(this.collection, "change add remove", this.render);
            this.threadView = new ListView({
                el: this.$el.find("#threadlist"),
                collection: this.collection,
                template: this.options.template,
            });
            var self = this;
            this.listenTo(this.model, "change:owner", function(){
                self.owner.set('_id', self.model.get('userid'));
                self.owner.fetch();
            });
            this.owner = new User({_id: this.model.get('userid')});
            this.owner.fetch();
            this.listenTo(this.owner, "change", this.updateCircleInfo);
            this.template = new jSmart(this.options.circleInfoTemplate);
            this.render();
        },
        updateName: function(){
            this.$el.find('#circleName').text(this.model.get('name'));
        },
        updateCircleInfo: function(){
            this.$el.find('#circleInfo').html(this.template.fetch({
                model: this.model.attributes,
                owner: this.owner.attributes,
                runtime: {
                    activeUserCount: 0
                },
                board: {
                    topicCount: this.collection.length,
                },
            }));
        },
        render: function(){
            this.updateName();
            this.updateCircleInfo();
            this.threadView.render();
        },
        addThread: function(){
            var posttext = this.$el.find("#newThread").val();                
            this.collection.addThread(posttext);
        },
        
        showThread:function(e){
            var btn = $(e.currentTarget);
            if (btn != null && btn.attr('threadid') != null){
                var threadId = btn.attr('threadid');
                global.set('currentThread', this.collection.get(threadId));
                $.mobile.changePage("thread.html");
            }
        },
        occupyCircle: function(){
//            $.mobile.changePage("fight.html");
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
                template: this.options.listTemplate,
            });
            this.template = new jSmart(this.options.threadTemplate);
            this.render();
        },
        render: function(){
            this.$el.find("#threadcontent").html(this.template.fetch({model: this.model.attributes}));
            this.threadView.render();
        },
        remove: function(){
            this.threadView.remove();
            this.threadView = undefined;
            Backbone.View.prototype.remove.call(this);
        },
        
        addReply: function(){
            var posttext = this.$el.find("#newReply").val();
            if (posttext.length > 0){
                this.collection.addThread(
                    posttext, 
                    global.get('currentThread').id);
            }
        },
        

    });
    

    var page = null;
    var pageThread = null;
    $(document).delegate("#threadPage", "pageshow",function(){
        var currentThread = global.get('currentThread');
        var threadSet = ThreadSet.GetReplySet(currentThread);
        pageThread = new ReplyPage({
            el:'#threadPage',
            collection: threadSet,
            model: currentThread,
            listTemplate:listTemplate,
            threadTemplate:threadTemplate,
        });
    }).delegate("#threadPage", "pagehide", function(){
        if (pageThread){
            pageThread.remove();
            pageThread = null;
        }
    }); 
    
    $(document).delegate("#circleDetailPage", "pageshow", function(){
        var circle = global.get('currentCircle');
        var threadSet = ThreadSet.GetBoardSet(circle.id);
        page = new CirclePage({
            el: '#circleDetailPage',
            collection: threadSet,
            model: circle,
            template: listTemplate,
            circleInfoTemplate: circleInfoTemplate,
        });
    }).delegate("#circleDetailPage", "pagehide", function(){
        if (page){
            page.remove();
            page = null;
        }
    });
    
});
