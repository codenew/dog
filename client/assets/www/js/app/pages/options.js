define(function(require, exports, module) {
    var $ = require('jquery');
    var DogServer = require('../api').DogServer;
    var user = require('../models/user');
    function log(info){
	$('#log').prepend($('<p>').text(info));
    }
    $(document).delegate("#optionPage", "pageshow", function() {		
	var user = require('../models/user');
	console.log('option page show');
	user.GetLocalUser(function(err, userinfo) {		
	    if (err){
		console.log(err);
		return;
	    }
	    console.log('local user getted');
	    if (null == userinfo){
		// auto switch to login page
		$.mobile.changePage('login.html');
		return;
	    }else{
		//get nickname for the user
		$("#nickname").val(userinfo.nickname);
		return ;
	    }					
	});
    });
});
