define(function(require, exports, module) {
	var $ = require('jquery');
	var DogServer = require('./api').DogServer;
	function log(info){
	    $('#log').prepend($('<p>').text(info));
	}
	$(document).delegate("#loginPage", "pageinit", function(){
		$("#log").prepend('login.js loaded');
		$("form#login").submit(function(e){
			e.preventDefault();
			e.stopPropagation();
			DogServer.rpc('user/login', {username: $(this).children("#username").val(), password: $(this).children("#password").val()}, function(json){
				if (json.result == 'ok'){
				    //				    $("#messageWindow #messageString").text('login success!');
				    //$("#messageWindow").popup("open");
				    $.mobile.changePage('index.html');
				}else{
				    //$("#messageWindow #messageString").text('login failed');
				    //$("#messageWindow").popup("open");
				}

			    });
		    });
		$("#register").click(function(e){
			e.stopPropagation();
			
		    });
		log('sent.');
	    });
    });
