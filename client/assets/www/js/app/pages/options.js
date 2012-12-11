define(function(require, exports, module) {
	var $ = require('jquery');
	var DogServer = require('../api').DogServer;
	var user = require('../models/user');
	function log(info){
	    $('#log').prepend($('<p>').text(info));
	}
	$(document).delegate
		(	"#optionPage", "pageinit", function()
			{		
				
				var user = require('../models/user');
				console.log('option page init');
				user.GetLocalUser
				(
					function(userinfo)
					{
						if (null == userinfo){
						// auto switch to login page
						$.mobile.changePage('login.html');
						return;
						}
					}
				);
		
			}
		);
    });
