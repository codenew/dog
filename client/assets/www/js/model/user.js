define(function(require, exports, module){
    var DogServer = require('app/api').DogServer;
    var Backbone = require('backbone')
     , config = require('app/config');
    var User = Backbone.Model.extend({
        url:function(){
	        return config.server + '/user';
	    },
        id: 0,
	    username:null,
	    nickname:null,
        location: {latidude: 0, longitude: 0},
	    
    });

    exports.User = User;

    var local_user = new User({        
	    location: {latitude: 31, longitude: 121},
    });
    
    exports.getSelf = function(){
	    return local_user;
    };
    
    exports.setUser =  function(_userid, _user){
        user = _user;
    };
//登陆    
    exports.login = function(username, password, next){
	    local_user.id = null;	 
	    local_user.username = username;  
	    DogServer.rpc('user/login', {username:username, password: password}, function(err, json){
        if (err){
	        next(err);
	        return;
        }
	    if (json.result != 'ok'){
		    next('login failed' + json.result);
		    return;
	    }
	    local_user.id = json.userid;	    	    
	    next(null);
	});
    };

//获取user信息
    exports.getuserinfo = function(next){
        local_user.fetch({
                id:local_user.id,		        
                success:function(model, response, options){                                        
                    console.log("Fetch userinfo success!");                    		            
                    next(local_user,null);
		        },
                error:function (model, xhr, options){
                    console.log("Fetch userinfo failed!");                    		            
                    next(null, "Fetch userinfo failed!");
                },
            });        
    };
    
//登出
    exports.logout = function(next){
	    local_user.id = null;	    
	    next(null);
    };
    
    
});