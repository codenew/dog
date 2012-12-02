var _ = require('underscore');

exports = _.extend(exports, {
    adopt: function(req, res){
	res.json({result:'ok'});
    },
    feed: function(req, res){
	res.json({result:'ok'});
    },
    walk: function(req, res){
	res.json({result:'ok'});
    }
});
