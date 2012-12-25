define(function(require, exports, module) {
    var $ = require('jquery');
    var board = require('model/board');

    $(document).delegate("#myBoardPage", "pageshow", 
			 myposition_pageinit
			);
			
   
});

