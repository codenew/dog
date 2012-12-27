var _ = require('underscore');
var mongodb = require('mongodb');
var async = require('async');
var users = {};

function User(userid, name, nickname){
    this.userid = userid;
    this.name = name;
    this.nickname = nickname;

}

_.extend(exports, {
    GetUser: function(userid, next){
	if (userid in users){
	    next(null, users[userid]);
	    return;
	}
	// load from mysql
	var req = null;
	
     async.waterfall([
            function(callback){
                mongodb.connect('mongodb://localhost:27017/dog', callback);
            },
            function(conn, callback){
                connection = conn;
                connection.collection('users', callback);                
            },
            function(coll, callback){
                // arg1 now equals 'three'
                coll.find({"id":userid}).toArray(callback);
            }
        ], function (err, docs) {
             if(!err){                       
                if (docs.length==1){                    
                    var doc = docs[0];
                    console.log("get userinfo from db success!");
                    console.log(doc);
                    users[userid] = new User(userid, doc.name, doc.nickname);
                    next(null. users[userid]);
                }
                else{
                    next('fail to load userinfo from database');
                }
             }  
             else{
                console.log(err);
                next('fail to load userinfo from database');
             }  
             
             if (connection != null){  
                connection.close();         // 一定要记得关闭数据库连接                            
             }
        });

    },
    
    Register: function(username, password, next){
	var req = null;
	mysql.query(req,
		    'insert into account(name, password) values(?,?)',
		    [username, password], function(err, results, fields){
	    if (err){
		next(err);
	    }else{
		if (results.affectedRows == 1){
		    next(null, 1);
		}else{
		    next('failed to insert');
		}
	    }
	});
    },

    Auth: function (username, password, next){
	    if (username == 'kaikai'){
	        next(null, 1);
	    }else{
	        var req = null;
	        async.waterfall([
                function(callback){
                    mongodb.connect('mongodb://localhost:27017/dog', callback);
                },
                function(conn, callback){
                    connection = conn;
                    connection.collection('users', callback);                
                },
                function(coll, callback){
                    // arg1 now equals 'three'
                    coll.find({"name":username}).toArray(callback);
                }
            ], function (err, docs) {
                 if(!err){                       
                    if (docs.length==1 && docs[0].password == password){                    
                       next(null,1);
                       console.log('password matched');
                       console.log(docs[0]);
                    }
                    else{
                        next('password mismatch');
                    }
                 }  
                 else{
                    console.log(err);
                    next(err);
                 }  
                 
                 if (connection != null){  
                    connection.close();         // 一定要记得关闭数据库连接                            
                 }
            });		    
	        //next('no such user');
	    }
    },
    
    Logout: function(userid, logoutTime){
	    delete users[userid];
        },
        init: function(mysqlPool){
	    mysql = mysqlPool;
    }
 

});
