var _ = require('underscore');
var async = require("async");
var mongodb = require("mongodb");
var globaldata = require('../globaldata');
var ObjectID = mongodb.ObjectID;
var lastid = 3;

_.extend(exports, {
    
    put: function(req, res){
        
    },
    
    get_all: function(req, res){
        var connection = null;        
        var boardid = req.param('boardid');
        var threadid = req.param('threadid');
        
        console.log("start to get threads , boarid ="+boardid+" threadid = "+threadid);
        
        globaldata.get('mongoPool').acquire(req, 'threads', function(err, collection, release){
	    if (err){
		res.send(404, err);
		return;
	    }
	    if (boardid != null){
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
            }else{
	        collection.find({"replythreadid":new ObjectID(threadid)}).toArray(
	            function(err, docs){	            
	                if (err == null){                        
	                    res.json(docs);
	                    console.log("get reply thread for thread "+threadid+" success!");	                    
                            console.log(docs);	                        
	                }
	                else{
	                    res.send(404, err);
	                    return;
	                }	                
                    }
                );                        
            }
	    release();
	});
	console.log("get thread list finish!");
    },


    
    
    post_one: function(req, res){
        var authorid = req.session.userid;
        var newData = {
            boardid: new ObjectID(req.param('boardid')),
            authorid: new ObjectID(authorid),
            content: req.param('content') || '',
            replythreadid: new ObjectID(req.param('replythreadid'))||'',
        };
        
        globaldata.get('mongoPool').acquire(req, 'threads', function(err, collection, release){
            if (err){
                res.send(500, err);
                return;
            }
            collection.insert(newData, function(err, r){
                if (err){
                    res.send(500, err);
                    release();
                    return;
                }
                console.log(r);
                if (r.length != 1){
                    res.send(500, 'length not 1');
                    release();
                    return;
                }
                res.json({id: r[0]._id});
                console.log("insert success");
                release();
            });
        });
    },
    
    delete: function(req, res){
        
        
    }
    
});