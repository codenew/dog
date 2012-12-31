define(function(require, exports, module) {
    var $ = require('jquery');
    var board = require('model/board');
    var template = require('text!template/board.tpl');
        
    $(document).delegate("#myBoardPage", "pageshow", function(){
	board.get_thread_set( function(thread_set){
	    if (thread_set ==null)
	    {	    
		    console.log("Fetch thread set error");
	    }
	    else
	    {
		      var tpl = new jSmart(template);
              var res = tpl.fetch({data:thread_set});
              $('#threadlist').html(res);
              $('#threadlist').listview('refresh');
	    }
	});//get_thread_set
    });
});

