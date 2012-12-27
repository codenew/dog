define(function(require, exports, module) {
    var $ = require('jquery');
    var board = require('model/board');
    
    
    
    
    $(document).delegate("#myBoardPage", "pageshow", 
		    board.get_thread_set( function(thread_set)
		    {
		        if (thread_set ==null)
		        {
		            console.log("Fetch thread set error");
		        }
		        else
		        {
		            console.log(thread_set.models);
		        }
		    });//get_thread_set
	);
			
   
});

