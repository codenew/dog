define(function(require, exports, module){
    var Backbone = require('backbone');
    var config = require('app/config');
    var user = require('model/user').User;
    var boardid = null;
    var threadid = null;
    var local_thread_set = null;
    var local_reply_set = null;
    exports.thread = Backbone.Model.extend({
        boardid:null,
        authorid:null,
        publishtime:null,
        content:null,
        commentnumber:0,
        replythreadid:null
        }
     );
    
    exports.thread_set = Backbone.Collection.extend({
        url:function(){
	        return config.server + '/board';
	    },
	    model:exports.thread
    });
    
    exports.setboardid = function(in_boardid){
        
        boardid = in_boardid;
        local_thread_set = null;        
        console.log("new board id is set as",in_boardid);
    };
    
    exports.setthreadid = function(in_threadid){
        
        threadid = in_threadid;
        local_reply_set = null;                       
        console.log("new thread id is set as", in_threadid);
    };
    
    
    
    exports.add_thread = function(thread_text, isReply){
        var userSelf = user.getSelf();
        var replythreadid = null;
        if (isReply >0){
            replythreadid = threadid;
        }
        
        if (isReply>0)
        {
            var new_thread = local_reply_set.create({        
                boardid : boardid,        
                authorid : userSelf.id,
                content : thread_text,
                commentnumber : 0,
                replythreadid : replythreadid,
            },{
                update:true,
                add:true,
                remove:true
            }); 
        }
        else
        {
            var new_thread = local_thread_set.create({        
                boardid : boardid,        
                authorid : userSelf.id,
                content : thread_text,
                commentnumber : 0,
                replythreadid : replythreadid,
            },{
                update:true,
                add:true,
                remove:true
            }); 
        }
    };
        
    exports.get_thread_set = function(next){
        if (local_thread_set == null)
        {
            local_thread_set = new this.thread_set;
            local_thread_set.fetch({
		        data:{boardid:boardid},
                success:function(collection, response, options){                                        
                    console.log("Fetch thread set  success!");                                                       
		            next(local_thread_set);
		        },
                error:function (collection, xhr, options){
                    console.log("Fetch thread set failed!");
                    local_thread_set = null;
		            next(null);
                },
            });//fetch
        } 
        else
        {
            next(local_thread_set);
        }      
    };
    
    exports.get_reply_set = function(next){
        if (local_reply_set == null){
            local_reply_set = new this.thread_set;
            local_reply_set.fetch({
		        data:{threadid:threadid},
                success:function(collection, response, options){                                        
                    console.log("Fetch thread set  success!");                                                       
		            next(local_reply_set);
		        },
                error:function (collection, xhr, options){
                    console.log("Fetch thread set failed!");
                    local_reply_set = null;
		            next(null);
                },
            });//fetch     
        }
        else{
            next(local_reply_set);
        }
    };
    


});


