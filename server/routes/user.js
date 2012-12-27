
/*
 * GET users listing.
 */
var user = require('../models/user');

exports.login = function(req, res){
    //res.send("respond with a resource");
    var username = req.param('username')
      , password = req.param('password')
	  ,checkcode=req.param('checkcode');
	  console.log(username,password,checkcode);
      console.log()	  
    user.Auth(username, password, function(err, userid){
        if (err){
            res.json({result: 'failed', err: err});
        }else{
            req.session.userid = userid;
            res.json({result:'ok',userid: userid});
        }
    });
};

exports.logout = function(req, res){
    var userid = req.session && req.session.userid || null;
    req.session = null;
    user.Logout(userid, new Date().getTime());
    res.json({result:'ok'});
};

exports.userinfo = function(req, res){
    //var userid = req.session && req.session.userid || null;    
    var userid = req.param('id') || null;  
    console.log('userinfo of', userid);
        user.GetUser(userid, function(err, user){
        if (err){
            req.session = null;
            res.json({result: 'failed', err: err});
        }else{
            res.json({result: 'ok', userid: userid, user: user});
        }
    });
};


exports.rest = function(req, res){
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
    };

exports.get = function(req, res){
        var connection = null;        
        var id = req.param('id');
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
                coll.find({"id":id}).toArray(callback);
            }
        ], function (err, docs) {
             if(!err && docs.length == 1){                       
                console.log(docs[0]);                        
                res.json(docs[0]);
             }  
             else{
                console.log(err);
                res.json(null);
             }  
             if (connection != null){  
                connection.close();         // 一定要记得关闭数据库连接                            
             }
        });        
	console.log("get userinfo from mongodb,id is "+id);
    };