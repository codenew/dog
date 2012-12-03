define(function(require, exports, module) {
	var $ = require('jquery');
	var DogServer = require('../api').DogServer;
	var user = require('../models/user');
	function log(info){
	    $('#log').prepend($('<p>').text(info));
	}
	$(document).delegate("#loginPage", "pageinit", function(){
		$("#log").prepend('login.js loaded');
		$("form#login").submit(function(e){
			e.preventDefault();
			e.stopPropagation();
			user.login($("#username", this).val(), $("#password", this).val(), function(err){
			    if (err){
		            //$("#messageWindow #messageString").text('login failed');
		            //$("#messageWindow").popup("open");
			    }else{
		            $.mobile.changePage('index.html');
		        }
			})
		    });
		$("#register").click(function(e){
			e.stopPropagation();
			
		    });
		log('sent.');
	    });
    });
