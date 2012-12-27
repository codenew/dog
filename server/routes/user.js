
/*
 * GET users listing.
 */
var user = require('../models/user')
, async = require('async')
, _ = require('underscore')
, globaldata = require('../globaldata');

exports.login = function(req, res){
    //res.send("respond with a resource");
    var username = req.param('username')
    , password = req.param('password')
    , checkcode=req.param('checkcode');
    console.log(username,password,checkcode);
    //console.log()	  
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

_.extend(exports, {
    get_one: function(id, req, res){
	globaldata.get('mongoPool').acquire(req, 'users', function(err, collection, release){
	    collection.find({id:id}, function(err, docs){
		if (err){
		    console.log(err);
		    res.send(500, err);
		}else if(docs.length == 1){           
		    console.log(docs[0]);
		    res.json(docs[0]);
		}else{
		    console.log('not found');
		    res.json(null);
		}
		release();
	    });
	});
	console.log("get userinfo from mongodb,id is "+id);
    },
    put_one: function(id, req, res){
	res.send(404);
    },
    post_one: function(req, res){
	res.send(404);
    },
    delete_one: function(id, req, res){
	res.send(404);
    },
    get_all: function(req, res){
	res.send(404);
    },

});