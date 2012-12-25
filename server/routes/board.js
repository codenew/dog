var _ = require('underscore');
var async = require("async");
var mongodb = require("mongodb");

var lastid = 3;
exports = _.extend(exports, {
  
    put: function(req, res){
	var id = req.param('id');
	_.each(data, function(c){
	    if (c.id == id){
		c.message = req.param('message') || '';
	    }
	});
	res.json({result: 'ok'});
    },
    
    get: function(req, res){
        var connection = null;        
        var id = req.param('id');
        async.waterfall([
            function(callback){
                mongodb.connect('mongodb://localhost:27017/dog', callback);
            },
            function(conn, callback){
                connection = conn;
                connection.collection('threads', callback);                
            },
            function(coll, callback){
                // arg1 now equals 'three'
                coll.find({"boardid":{id}}).toArray(callback);
            }
        ], function (err, docs) {
             if(!err){                       
                for(var i = 0; i < docs.length; i ++){  
                    console.log(docs[i]);                        
                }
                res.json(docs);
             }  
             else{
                console.log(err);
                res.json(null);
             }  
             if (connection != null){  
                connection.close();         // 一定要记得关闭数据库连接                            
             }
        });        
	console.log("get board list");
    },
    
    
    post: function(req, res){
	var newData = {
	    id: ++lastid,
	    from: req.param('from') || 1,
	    to: req.param('to') || 2,
	    message: req.param('message') || '',
	};
	data[newData.id] = newData;
	res.json({result: 'ok', id: newData.id});
    },
    delete: function(req, res){
	var id = req.param('id');
	delete data[id];
	res.json({result: 'ok'});
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