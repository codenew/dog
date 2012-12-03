define(function(require, exports, module) {
	var $ = require('jquery');
	var DogServer = require('../api').DogServer;
	var user = require('../models/user');
	function log(info){
	    $('#log').prepend($('<p>').text(info));
	}
	$(document).delegate("#mainPage", "pageinit", function(){
	    console.log('main page init');
	    $("#mainPage #logout").click(function(){
	        user.logout(function(){
	            $.mobile.changePage('login.html');
	        });
	    });
    }).delegate("#mainPage", "pageshow", function(){
	    console.log('main page show');
	    user.GetLocalUser(function(userinfo){
	        if (null == userinfo){
	            // auto switch to login page
	            $.mobile.changePage('login.html');
	            return;
	        }
	    });
	});

});