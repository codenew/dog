var _ = require('underscore');
var async = require("async");
var mongodb = require("mongodb");
var data = {
    1: {id: 1, name: 'dsadas',   from: 1, to: 2, message: 'hi'},
    2: {id: 2, name: 'dasdsada', from:1,to: 1, message: 'what'},
    3: {id: 3, name: 'dasdsaf',  from:1, to: 2, message: 'just hi...'},
};
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
        async.waterfall([
            function(callback){
                mongodb.connect('mongodb://localhost:27017/dog', callback);
            },
            function(conn, callback){
                connection = conn;
                connection.collection('circles', callback);                
            },
            function(coll, callback){
                // arg1 now equals 'three'
                coll.find().toArray(callback);
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
	console.log("get list");
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