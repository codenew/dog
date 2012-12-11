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
            next(null);
        }else if (user == null){
        	DogServer.rpc('user/userinfo', {userid: userid}, function(json){
				if (json.result == 'ok'){
				    if (json.userid == userid){
				        user = json.user;
	                    next(user);
				    }else{
				        // assert fail
	                    next(null);
				    }
	            }else{
	                next(null);
	            }
	        });
        }
       next(user);
    };
    exports.login = function(username, password, next){
        userid = null;
        user = null;
	    DogServer.rpc('user/login', {username:username, password: password}, function(json){
		    if (json.result == 'ok'){
		        userid = json.userid;
		        user = null;
		        next(null);
		    }else{
		        console.log('login failed.', json);
		    }
	    });
    };
    exports.logout = function(next){
        userid = null;
        user = null;
        next(null);
    };
	
});