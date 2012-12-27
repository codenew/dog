define(function(require, exports, module) {
    var $ = require('jquery');
    var DogServer = require('../api').DogServer;
    var user = require('model/user');
    function log(info){
	$('#log').prepend($('<p>').text(info));
    }
    $(document).delegate("#optionPage", "pageshow", function() {		
	var user = require('model/user');
	console.log('option page show');
	
	user.getuserinfo(function(err, userinfo) {		
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
		    console.log(userinfo);
		    $("#nickname").val(userinfo.get("nickname"));
		    return ;
	    }					
	});
    });
});
