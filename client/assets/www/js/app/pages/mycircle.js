define(function(require, exports, module) {
    var $ = require('jquery');
    var DogServer = require('../api').DogServer;
    var User = require('model/user').User;
    var CircleManager =  require('model/circle').CircleManager;
    var board = require('model/board');
    var template = require('text!template/position.tpl');
    
    function myposition_getpositionlist(data){
        
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
	User.getmyposition(/*userinfo.userid,*/1,
    	    myposition_getpositionlist
	);

	/*
		    }	
	*/
    };

    function myposition_pageinit(){
        var circleManager = CircleManager.getSingleton();
        circleManager.fetch({
            success: function(){
                var tpl = new jSmart(template);
                var res = tpl.fetch({data:circleManager});
                $('#positionlist').html(res);
                $('#positionlist').listview('refresh');
            }
        });
    };

    $(document).delegate("#myCirclePage", "pageshow", 
			 myposition_pageinit
			);
    
    $(document).delegate("a[circle_id]", "click", function(){       
        board.setboardid($(this).attr('circle_id'));
    });			
});

