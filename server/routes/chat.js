var _ = require('underscore');

var data = {
    1: {id: 1, from: 1, to: 2, message: 'hi'},
    2: {id: 2, from: 2, to: 1, message: 'what'},
    3: {id: 3, from: 1, to: 2, message: 'just hi...'},
};
var lastid = 3;
exports = _.extend(exports, {
    get: function(req, res){
	res.json({result: 'ok', data: data});
    },
    put: function(req, res){
	var id = req.param('id');
	_.each(data, function(c){
	    if (c.id == id){
		c.message = req.param('message') || '';
	    }
	});
	res.json({result: 'ok'});
    },
    post: function(req, res){
	var newData = {
	    id: ++lastid,
	    from: req.param('from') || 1,
	    to: req.param('to') || 2,
	    message: req.param('message') || '',
	};
	data[newData.id] = newData;
	res.json({result: 'ok', id: newData.id});
    },
    delete: function(req, res){
	var id = req.param('id');
	delete data[id];
	res.json({result: 'ok'});
    },
    rest: function(req, res){
	if (req.method == 'GET'){
	    exports.get(req, res);
	}else if (req.method == 'PUT'){
	    exports.put(req, res);
	}else if (req.method == 'POST'){
	    exports.post(req, res);
	}else if (req.method == 'DELETE'){
	    exports.delete(req, res);
	}else{
	    res.send('bad method', 404);
	}
    }
});