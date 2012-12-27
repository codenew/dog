define(function(require, exports, module){
    var Backbone = require('backbone');
    var boardid = null;
    var local_thread_set = null;
    
    exports.thread = Backbone.Model.extend({
        url:function(){
	        return config.server + '/thread';
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
	        return config.server + '/circle';
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
    
    exports.get_thread_set = function(next){
        if (local_thread_set = null)
        {
            local_thread_set = new this.CircleManager();
            local_thread_set.fetch({
		        boardid:boardid,
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


