var _ = require('underscore')
, async = require("async")
, globaldata = require('../globaldata');
var data = {
    1: {id: 1, name: 'dsadas',   from: 1, to: 2, message: 'hi'},
    2: {id: 2, name: 'dasdsada', from:1,to: 1, message: 'what'},
    3: {id: 3, name: 'dasdsaf',  from:1, to: 2, message: 'just hi...'},
};
var lastid = 3;
_.extend(exports, {
    
    put_one: function(id, req, res){
	_.each(data, function(c){
	    if (c.id == id){
		c.message = req.param('message') || '';
	    }
	});
	res.json({result: 'ok'});
    },
    get_all: function(req, res){
	var location = req.param('location') || {latitude: 31, longitude:121};
	location = {
	    longitude: +location.longitude, 
	    latitude: +location.latitude,
	};
	console.log('circle.get_all@', location);
	globaldata.get('mongoPool').acquire(req, 'circles', function(err, collection, release){
	    if (err){
		console.log(err);
		res.send(500, err);
		return;
	    }
	    // NOTE: mongo use [long,lat] pair
	    collection.geoNear(location.longitude, location.latitude, {
		num: 100, 
		maxDistance: 6,
		spherical: true,
	    }, function(err, docs){
		if (err){
		    console.log(err);
		    res.send(500, err);
		}else if (!(docs.results instanceof Array)){
		    console.log(docs);
		    res.send(500, docs.errmsg);
		}else{
		    var ret = _.map(docs.results, function(item){return item.obj;});
		    res.json(ret);
		}
		release();
	    });
        });        
	console.log("get list");
    },
    get_one: function(id, req, res){
	globaldata.get('mongoPool').acquire(req, 'circles', function(err, collection, release){
	    if (err){
		res.send(500, err);
		return;
	    }
	    
	    collection.find({_id: id}, function(err, r){
		if (err){
		    res.send(500, err);
		}else if (r.length != 1){
		    res.send(500, 'length not 1');
		}else{
		    res.json({id: r[0]._id});
		}
		release();
	    });
	});
    },    
    post_one: function(req, res){
	var location = req.param('location') || {latitude: 31, longitude:121};
	var newData = {
	    from: req.param('from') || 1,
	    to: req.param('to') || 2,
	    message: req.param('message') || '',
	    name:req.param('name')||'',
	    user:req.param('user')||'',
	    userid:req.param('userid')||'',
	    location: location,	    
	    loc: [location.longitude, location.latitude], // NOTE: mongo use [long,lat] pair
	    radius: req.param('radius') || 10, // in meter
	};
	globaldata.get('mongoPool').acquire(req, 'circles', function(err, collection, release){
	    if (err){
		res.send(500, err);
		return;
	    }
	    collection.insert(newData, function(err, r){
		if (err){
		    res.send(500, err);
		    release();
		    return;
		}
		console.log(r);
		if (r.length != 1){
		    res.send(500, 'length not 1');
		    release();
		    return;
		}
		res.json({id: r[0]._id});
		release();
	    });
	});
    },
    delete_one: function(id, req, res){
	delete data[id];
	res.json({result: 'ok'});
    },
});