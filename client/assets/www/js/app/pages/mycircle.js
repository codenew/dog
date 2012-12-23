define(function(require, exports, module) {
    var $ = require('jquery');
    var DogServer = require('../api').DogServer;
    var user = require('../models/user');
    var templateloader = require('../models/template');

    function log(info){
	$('#log').prepend($('<p>').text(info));
    }
    
    function myposition_getpositionlist(data){
        templateloader.LoadTemplate(
            'position',
            function (err, templatetext){
		if (!err){
                    var tpl = new jSmart(templatetext);
	            var res = tpl.fetch(data);
	            $('#mypositioncontent').html(res);
		}
            }
        );
    };

    function myposition_getlocaluser(err, userinfo) {
	if (err){
	    console.log(err);
	    return;
	}
        console.log('local user getted');
	/*	if (null == userinfo){
	// auto switch to login page
	$.mobile.changePage('login.html');
	return;
	} else {
	*/	
	//get positions for the user						
	user.getmyposition(/*userinfo.userid,*/1,
    	    myposition_getpositionlist
	);

	/*    	    
		    }	
	*/
    };

    function myposition_pageinit(){
	var user = require('../models/user');		
	user.GetLocalUser(myposition_getlocaluser);
    };

    $(document).delegate("#myCirclePage", "pageshow", 
			 myposition_pageinit
			);
});

