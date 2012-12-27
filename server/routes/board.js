var _ = require('underscore');
var async = require("async");
var mongodb = require("mongodb");

var lastid = 3;
exports = _.extend(exports, {
  
    put: function(req, res){
    
    },
    
    get: function(req, res){
        var connection = null;        
        var boardid = req.param('boardid');
        globaldata.get('mongoPool').acquire(req, 'threads', function(err, collection, release){
	        if (err){
		        res.send(404, err);
		        return;
	        }
	        collection.find({"boardid":boardid},
	            function(err,data){
	                if (err == null){
	                    res.json(data);
	                    console.log("get thread for board "+boardid+" success!");
	                    console.log(data);
	                }
	                else{
	                    res.send(404, err);
	                    return;
	                }	                
                }
            );
		    release();
	    });
	});

	    console.log("get board list");
    },
    
    
    post: function(req, res){
    
    },
    
    delete: function(req, res){
	
	
    },
    
    rest: function(req, res){
	if (req.method == 'GET'){
	    exports.get(req, res);
	}else if (req.method == 'PUT'){
	    exports.put(req, res);
	}else if (req.method == 'POST'){
	    exports.post(req, res);
	}else if (req.method == 'DELETE'){
	    exports.delete(req, res);
	}else{
	    res.send('bad method', 404);
	}
    }
});