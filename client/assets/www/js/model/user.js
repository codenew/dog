define(function(require, exports, module){
    var DogServer = require('app/api').DogServer
    , Backbone = require('backbone')
    , _ = require('underscore')
    , config = require('app/config');
   
    var local_user = null;
    var User = Backbone.Model.extend({
        url: function(){
            if (this.id){
                return config.server + '/user/' + this.id;
            }
            return config.server + '/user';
        },
        idAttribute: "_id",
        defaults:{
            username: null,
            nickname: null,
            location: {latitude: 0, longitude: 0},
            level: 1,
            maxCircleCount: 5,
            maxPetCount: 10,
            petCount: 0,    // cached value, := db.pets.find({owner: ObjectID(this.id)}).count();
            circleCount: 0, // cached value, := db.circles.find({userid: ObjectID(this.id)}).count();
        },
	
    },{
        getSelf: function(){
            return local_user;
        },
        //登陆    
        login: function(username, password, next){
            local_user.set('_id', null);
            local_user.set('username', username);
            DogServer.rpc('user/login', {username:username, password: password}, function(err, json){
                if (err){
                    next(err);
                    return;
                }
                if (json.result != 'ok'){
                    next('login failed' + json.result);
                    return;
                }
                local_user.set('_id', json.userid);
                next(null);
            });
        },

        //获取user信息
        getuserinfo: function(next){
            if (!local_user.id){
                var self = this;
                this.login('zhangzikai', '1234', function(err){
                    if (local_user.id){
                        self.getuserinfo(next);
                    }
                });
                return;
            }
            local_user.fetch({
                data:{
                },
                success:function(model, response, options){
                    console.log("Fetch userinfo success!");
                    next(null, local_user);
                },
                error:function (model, xhr, options){
                    console.log("Fetch userinfo failed!");
                    next("Fetch userinfo failed!", null);
                },
            });
        },
        
        //登出
        logout: function(next){
            local_user.set('_id', null);
            DogServer.rpc('user/logout', {}, function(err, json){
            });
            next(null);
        },
    });

    local_user = new User({
        username: null,
        nickname: null,
        location: {latitude: 31, longitude: 121},
    });

    _.extend(exports, {
        User: User
    });
});
