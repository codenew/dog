define(function(require, exports, module) {
    var $ = require('jquery');
    var DogServer = require('../api').DogServer;
    var User = require('model/user').User;
    var UserEvents = require('model/userevent').UserEvents;
    var Backbone = require('backbone');
    var template = require('text!template/userinfo.tpl');

    //	var preloadjs = require('preloadjs');
    var MainView = Backbone.View.extend({
        el: '#mainPage',
        events:{
            //"click #rename": "do_rename" 
        },
        initialize: function(){
            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.collection, "change", this.render);
            this.listenTo(this.collection, "add", this.render);
            this.listenTo(this.collection, "remove", this.render);
            this.collection.fetch({
                add:true,
                remove:true,
                update:true,
                data: {
                    userid: this.model.id
                }
            });
            this.templateObj = new jSmart(this.options.template);
        },
        render: function(){
            this.$el.find('#userinfo').html(
                this.templateObj.fetch({model: this.model.attributes})
            );
        },
    });
    var mainView = new MainView({
        model: User.getSelf(),
        collection: new UserEvents(),
        template: template,
    });
    
    $(document).delegate("#mainPage", "pageinit", function(){
	console.log('main page init');
	$("#mainPage #logout").click(function(){
	    User.logout(function(){
		$.mobile.changePage('login.html');
	    });
	});

	
    }).delegate("#mainPage", "pageshow", function(){
	console.log('main page show');
	User.getuserinfo(function(err, userinfo){
	    if (err){
	    }else{
		if (null == userinfo){
		    // auto switch to login page
		    $.mobile.changePage('login.html');
		    return;
		}
	    }
	});
	var canvas = document.getElementById('test');
	var context = canvas.getContext('2d');
	var bodyImg = new Image();	
	
	bodyImg.src = '../../../img/pet0-arm.png';

	bodyImg.onload = function(){
	    context.drawImage(bodyImg, 0,0, bodyImg.width, bodyImg.height);
	}
    });
});