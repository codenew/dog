define(function(require, exports, module) {
    var DogServer = require('../api').DogServer;
    var userid = null;
    var user = null;
    var nickname = null;
    exports.SetLocalUser = function(_userid, _user){
        user = _user;
    };
    exports.GetLocalUser = function(next){
        if (userid == null){
            next('not login: userid is null');
        }else if (user == null){
            DogServer.rpc('user/userinfo', {userid: userid}, function(err, json){
		if (err){
		    next(err);
		    return;
		}
		if (json.result != 'ok'){
		    next('query failed:' + json.result);
		    return;
		}
		if (json.userid != userid){
		    // assert fail
		    next('internal error: userid not match');
		    return;
		}
		user = json.user;
		next(null, user);
	    });
	}else{
	    next(null, user);
	}
    };
    exports.login = function(username, password, next){
	userid = null;
	user = null;
	DogServer.rpc('user/login', {username:username, password: password}, function(err, json){
	    if (err){
		next(err);
		return;
	    }
	    if (json.result != 'ok'){
		next('login failed' + json.result);
		return;
	    }
	    userid = json.userid;
	    user = null;
	    next(null);
	});
    };
    exports.logout = function(next){
	userid = null;
	user = null;
	next(null);
    };

    //get user's positions
    exports.getmyposition = function(userid, next) {        
	function myposition_callback(data) {
	    if (data.result == 'ok'){		                        
		next(data);
}else{
console.log('get myposition failed.', data);
            }
        };
	DogServer.rpc('position', 
	              {userid:userid}, 
	              myposition_callback
                     );
    };
    
    
});