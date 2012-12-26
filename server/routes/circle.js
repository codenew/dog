var _ = require('underscore');
var async = require("async");
var mongodb = require("mongodb");
var globaldata = require('../globaldata');
var data = {
    1: {id: 1, name: 'dsadas',   from: 1, to: 2, message: 'hi'},
    2: {id: 2, name: 'dasdsada', from:1,to: 1, message: 'what'},
    3: {id: 3, name: 'dasdsaf',  from:1, to: 2, message: 'just hi...'},
};
var lastid = 3;
exports = _.extend(exports, {
    
    put: function(req, res){
	var id = req.param('id');
	_.each(data, function(c){
	    if (c.id == id){
		c.message = req.param('message') || '';
	    }
	});
	res.json({result: 'ok'});
    },
    
    get: function(req, res){
	var location = req.param('location') || {latitude: 31, longitude:121};


	globaldata.get('mongoPool').acquire(req, 'circle', function(err, collection, release){
	    if (err){
		res.send(404, err);
		return;
	    }
	    // NOTE: mongo use [long,lat] pair
	    collection.geoNear(location.longitude, location.latitude, {
		num: 100, 
		maxDistance: 6,
		spherical: true,
	    }, function(err, docs){
		if (err){
		    res.send(404, err);
		}else{
		    console.log(docs);
		    var ret = [];
                    for(var i = 0; i < docs.results.length; i ++){
			ret.push(docs.results[i].obj);
			console.log(docs.results[i]);
                    }
		    res.json(ret);
		}
		release();
	    });
        });        
	console.log("get list");
    },
    
    
    post: function(req, res){
	var location = req.param('location') || {latitude: 31, longitude:121};
	var newData = {
	    from: req.param('from') || 1,
	    to: req.param('to') || 2,
	    message: req.param('message') || '',
	    location: location,
	    loc: [location.longitude, location.latitude], // NOTE: mongo use [long,lat] pair
	    radius: req.param('radius') || 10, // in meter
	};
	globaldata.get('mongoPool').acquire(req, 'circle', function(err, collection, release){
	    if (err){
		res.send(404, err);
		return;
	    }
	    collection.insert(newData, function(err, r){
		if (err){
		    res.send(404, err);
		    release();
		    return;
		}
		console.log(r);
		if (r.length != 1){
		    res.json(404, 'length not 1');
		    release();
		    return;
		}
		res.json({id: r[0]._id});
		release();
	    });
	});
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