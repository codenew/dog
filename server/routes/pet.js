var _ = require('underscore');

_.extend(exports, {
    adopt: function(req, res){
	res.json({result:'ok'});
    },
    feed: function(req, res){
	res.json({result:'ok'});
    },
    walk: function(req, res){
	res.json({result:'ok'});
    },
    get_one: function(id, req, res){
	res.send(404);
    },
    put_one: function(id, req, res){
	res.send(404);
    },
    post_one: function(req, res){
	res.send(404);
    },
    delete_one: function(id, req, res){
	res.send(404);
    },
    get_all: function(req, res){
	res.send(404);
    },
});
