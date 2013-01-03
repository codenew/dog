var _ = require('underscore')
, async = require("async")
, mongodb = require('mongodb')
, globaldata = require('../globaldata');

var ObjectID = mongodb.ObjectID;

_.extend(exports, {
    // update
    put_one: function(id, req, res){
	_.each(data, function(c){
	    if (c.id == id){
		c.message = req.param('message') || '';
	    }
	});
	res.json({result: 'ok'});
    },
    // select
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
		    var ret = _.map(docs.results, function(item){
                        var obj = item.obj;
                        obj.location = {
                            longitude:obj.loc[0],
                            latitude:obj.loc[1],
                        };
                        obj.loc = undefined;
                        return obj;
                    });
		    res.json(ret);
		}
		release();
	    });
        });        
	console.log("get list");
    },
    // select one
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
    // create one
    post_one: function(req, res){
	var location = req.param('location') || {latitude: 31, longitude:121};
	var newData = {
	    name:req.param('name')||'',
	    userid:req.session.userid,
	    loc: [location.longitude, location.latitude], // NOTE: mongo use [long,lat] pair
	    radius: req.param('radius') || 10, // in meter
	};
        var pool = globaldata.get('mongoPool');
        var userid = req.session.userid;
        async.waterfall([
            function(next){
                pool.acquire(req, 'users', function(err, collection, release){
	            if (err){
                        next(err);
		        return;
	            }
                    var userObjectID = new ObjectID(userid);
	            collection.findOne({_id: userObjectID}, function(err, user){
		        if (err){
                            next(err);
		            release();
		            return;
		        }
                        var createCircleCost = 10;
                        if (user.money < createCircleCost){
                            next('not enough money');
		            release();
                            return;
                        }
                        collection.update({_id: userObjectID}, {
                            $inc: {money: -createCircleCost}
                        }, function(err, modifyCount){
                            if (err){
                                console.log('createcircle.costmoney failed');
                                next('cost money failed');
                            }else{
                                if (modifyCount == 1){
                                    next(null);
                                }else{
                                    next('modify count not 1, which is:' + modifyCount);
                                }
                            }
		            release();
                        });
	            });
	        });
            },
            function(next){
                console.log('insert into circles');
                pool.acquire(req, 'circles', function(err, collection, release){
	            if (err){
		        next(err);
		        return;
	            }
	            collection.insert(newData, function(err, r){
		        if (err){
                            next(err);
		            release();
		            return;
		        }
		        console.log(r);
		        if (r.length != 1){
		            next('length not 1');
		            release();
		            return;
		        }
                        next(null, {id: r[0]._id});
		        release();
	            });
	        });
            }
        ], function(err, result){
            if (err){
                console.log(err);
                res.send(500, err);
            }else{
		res.json(result);
            }
        });
    },
    delete_one: function(id, req, res){
	delete data[id];
	res.json({result: 'ok'});
    },
});