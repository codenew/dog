var _ = require('underscore');
var mongodb = require("mongodb");  
var async = require("async");
exports = _.extend(exports, {
    list: function(req, res){
        var connection = null;
        async.waterfall([
            function(callback){
                mongodb.connect('mongodb://localhost:27017/dog', callback);
            },
            function(conn, callback){
                connection = conn;
                connection.collection('addr', callback);                
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
                res.json({result:'ok', data:docs});
             }  
             else{
                console.log(err);
                res.json({result:'fail', data:null});
             }  
             if (connection != null){  
                connection.close();         // 一定要记得关闭数据库连接                            
             }
        });
        
//    mongodb.connect('mongodb://localhost:27017/dog', function(err, conn){  
//        if (err)
//        {
//            console.log(err);
//            res.json({result:'fail', data:null});
//            return ;
//        }
//        conn.collection('addr', function(err, coll){  
//            if (err)
//            {
//                console.log(err);
//                res.json({result:'fail', data:null});
//                return ;
//            }
//            coll.find().toArray(function(err, docs){  
//           
//                // 一定要记得关闭数据库连接  
//                
//           
//            })  //function(err, docs)
//        })  //function(err, coll){
//    })  // function(err, conn){  

//	res.json({
//		result:'ok', 
//		data:[
//{
//    name:'张江地铁站', 
//    location:{latitude:'123', altitude:'32'},
//    range:'30m',
//    owner: null,
//},
//{
//    name:'圆环广场',
//    location:{latitude:'124', altitude:'32'},
//    range:'40m',
//    owner: {userid:1001, nickname:'江南一霸'},
//},
//		      ],
//	    }); // end of list.function.res.json({
	console.log("get list");
    },
    take: function(req, res){
	res.json({
		result:'failed',
	    });
    }
});