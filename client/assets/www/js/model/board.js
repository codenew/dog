define(function(require, exports, module){
    var Backbone = require('backbone');
    var config = require('app/config');
    var user = require('model/user').User;
    var boardid = null;
    var local_thread_set = null;
 
    exports.thread = Backbone.Model.extend({
        url:function(){
	        return config.server + '/board';
	    },
        boardid:null,
        authorid:null,
        publishtime:null,
        content:null,
        commentnumber:0,
        }
     );
    
    exports.thread_set = Backbone.Collection.extend({
        url:function(){
	        return config.server + '/board';
	    },
	    model:exports.thread
    });
    
    exports.setboardid = function(in_boardid){
        if (boardid != in_boardid)
        {
            boardid = in_boardid;
            local_thread_set = null;
        }
        console.log("new board id is set as",in_boardid);
    };
    
    
    
    exports.add_thread = function(thread_text){
        var userSelf = user.getSelf();
        var new_thread = local_thread_set.create({        
            boardid : boardid,        
            authorid : userSelf.id,
            content : thread_text,
            commentnumber : 0
        },{
            update:true,
            add:true,
            remove:true
        }); 
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
                    local_circleManager = null;
		            next(null);
                },
            });//fetch
        } 
        else
        {
            next(local_thread_set);
        }      
    };
    


});


