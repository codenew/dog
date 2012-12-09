define(function(require, exports, module) {
    var $ = require('jquery');
    var DogServer = require('../api').DogServer;
    var user = require('../models/user');
    //	var preloadjs = require('preloadjs');
    
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
	var canvas = document.getElementById('test');
	var context = canvas.getContext('2d');
	var bodyImg = new Image();	
	
	bodyImg.src = '../../../img/pet0-arm.png';

	bodyImg.onload = function(){
	    context.drawImage(bodyImg, 0,0, bodyImg.width, bodyImg.height);
	}
    });

});