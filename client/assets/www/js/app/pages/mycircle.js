define(function(require, exports, module) {
    var $ = require('jquery');
    var DogServer = require('../api').DogServer;
    var user = require('../models/user');
    var templateloader = require('../models/template');
    var circles =  require('model/circle');
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
	    //var user = require('../models/user');		
	    //user.GetLocalUser(myposition_getlocaluser);
	    circles.getCircleManager(function(circleManager){
    	    var circle = circleManager.get(1);
    	    console.log(circle.get('name'));    
	    });	    
    };

    $(document).delegate("#myCirclePage", "pageshow", 
			 myposition_pageinit
			);
});

