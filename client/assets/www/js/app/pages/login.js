define(function(require, exports, module) {
    var $ = require('jquery');
    var DogServer = require('../api').DogServer;
    var user = require('../models/user');
    $(document).delegate("#loginPage", "pageinit", function(){
	console.log('login pageinit');
	$("form#login").submit(function(e){
	    e.preventDefault();
	    e.stopPropagation();
	    user.login(
		$("#username", this).val(),
		$("#password", this).val(),
		function(err){
		    if (err){
			//$("#messageWindow #messageString").text('login failed');
			//$("#messageWindow").popup("open");
		    }else{
			$.mobile.changePage('index.html');
		    }
		});
	});
	$("#register").click(function(e){
	    e.stopPropagation();
	    
	});
	console.log('sent.');
    }).delegate("#loginPage", "pageshow", function(){
	console.log('login pageshow');
    });
});
