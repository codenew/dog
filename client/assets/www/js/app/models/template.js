define(function(require, exports, module) {
    var DogServer = require('../api').DogServer;
    exports.LoadTemplate = function(templateid, next){
        if (templateid == null){
	    next('bad parameter: templateid is null');
	    return;
        }
        DogServer.rpc('template', {templateid: templateid}, function(err, data){
	    if (err){
		next(err);
		return;
	    }
	    if (data.result == 'ok'){
		next(null, data.data);       
	    } else {
                next('load failed');
	    }	        
	});        
    };
});