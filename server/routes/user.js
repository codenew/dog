
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
    var userid = req.session && req.session.userid || null;
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
