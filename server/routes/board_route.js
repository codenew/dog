var _ = require('underscore');
var async = require("async");
var mongodb = require("mongodb");
var globaldata = require('../globaldata');
var ObjectID = mongodb.ObjectID;
var lastid = 3;
exports = _.extend(exports, {
  
    put: function(req, res){
    
    },
    
    get_all: function(req, res){
        var connection = null;        
        var boardid = req.param('boardid');
        console.log("start to get threads , boarid ="+boardid);
        
        globaldata.get('mongoPool').acquire(req, 'threads', function(err, collection, release){
	        if (err){
		        res.send(404, err);
		        return;
	        }
	        collection.find({"boardid":new ObjectID(boardid)}).toArray(
	            function(err, docs){	            
	                if (err == null){                        
	                    res.json(docs);
	                    console.log("get thread for board "+boardid+" success!");	                    
	                }
	                else{
	                    res.send(404, err);
	                    return;
	                }	                
                }
            );
		    release();
	    });
	    console.log("get thread list finish!");
	},

    
    
    post: function(req, res){
    
    },
    
    delete: function(req, res){
	
	
    }
     
});