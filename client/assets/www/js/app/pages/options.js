define(function(require, exports, module) {
    var $ = require('jquery');
    var DogServer = require('../api').DogServer;
    var User = require('model/user').User;

    $(document).delegate("#optionPage", "pageshow", function() {		
	console.log('option page show');
	
	User.getuserinfo(function(err, userinfo) {		
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
