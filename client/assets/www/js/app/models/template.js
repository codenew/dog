define(function(require, exports, module) 
{
    var DogServer = require('../api').DogServer;
    
    
    exports.LoadTemplate = function(templateid, next){
        if (templateid == null){
            next(null);
        }
        DogServer.rpc('template', {templateid: templateid}, function(data){
		    if (data.result == 'ok'){
		        next(data.data);       
		    }
		    else{
                next(null);
		    }	        
	     });        
        next(null);	    
    };
    
});