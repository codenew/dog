
exports.route = function(app, basePath, module){
    app.all(basePath + '/:id', function(req, res){
	switch(req.method){
	case 'GET':  // fetch id
	    if (typeof module.get_one != "function"){
		break;
	    }
	    module.get_one(req.param('id'), req, res)
	    return;
	case 'PUT':  // update id
	    if (typeof module.put_one != "function"){
		break;
	    }
	    module.put_one(req.param('id'), req, res);
	    return;
	case 'POST': // create id
	    break;
	case 'DELETE': // delete id
	    if (typeof module.delete_one != "function"){
		break;
	    }
	    module.delete_one(req.param('id'), req, res);
	    return;
	default:
	}
	res.send(404, 'invalid method');
    });
    app.all(basePath, function(req, res){
	switch(req.method){
	case 'GET': // fetch all
	    if (typeof module.get_all != "function"){
		break;
	    }
	    module.get_all(req, res);
	    return;
	case 'PUT':
	    break;
	case 'POST':
	    if (typeof module.post_one != "function"){
		break;
	    }
	    module.post_one(req, res);
	    return;
	case 'DELETE':
	default:
	    break;
	}
	res.send(404, 'invalid method');
    });
};
