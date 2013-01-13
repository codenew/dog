define(function(require, exports, module){
    var Backbone = require('backbone')
    , config = require('app/config')
    , _ = require('underscore');
    
    var boardid = null;
    var threadid = null;
    var local_thread_set = null;
    var local_reply_set = null;

    //单个的帖子
    var Thread = Backbone.Model.extend({
        idAttribute: "_id",
        boardid:null,// boardid is circleid
        authorid:null,
        publishtime:null,
        content:null,
        commentnumber:0,
        replythreadid:null
    });
    
    var ThreadSet = Backbone.Collection.extend({
        url:function(){
	    return config.server + '/board';
	},
	model: Thread,
        initialize: function(models, options){
            this.options = options;
        },
        addThread: function(thread_text, threadid){
            if (this.mode == 'boardSet'){
                if (threadid){
                    console.log('no need to pass threadid in boardSet');
                }
            }else if (this.mode == 'replySet'){
                if (!threadid){
                    console.log('should pass threadid in replySet');
                    return;
                }
            }
            var new_thread = this.create({        
                boardid : this.options.boardid,
                //authorid : userSelf.id, authorid should be decided on the server side
                content : thread_text,
                commentnumber : 0,
                replythreadid : threadid,
            },{
                update:true,
                add:true,
                remove:true
            }); 
        },
    },{
        GetReplySet: function(replyToThread){
            var threadSet = new ThreadSet([], {
                mode: 'replySet',
                threadid: replyToThread.id,
                boardid: replyToThread.get('boardid'),
            });
            threadSet.fetch({
                data:{threadid: replyToThread.id},
                update: true,
                add: true,
                remove: true,
            });
            return threadSet;
        },
        GetBoardSet: function(boardid){
            var threadSet = new ThreadSet([], {
                mode: 'boardSet',
                boardid: boardid,
            });
            threadSet.fetch({
                data:{boardid: boardid},
                update: true,
                add: true,
                remove: true,
            });
            return threadSet;
        }
    });
    _.extend(exports, {
        Thread: Thread,
        ThreadSet: ThreadSet,
    });
});


