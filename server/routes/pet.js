var _ = require('underscore')
, mongodb = require('mongodb')
, globaldata = require('../globaldata');

var ObjectID = mongodb.ObjectID;

_.extend(exports, {
    adopt: function(req, res){
        var userid = req.session.userid;

        globaldata.get('mongoPool').acquire(req, 'pets', function(err, collection, release){
            if (err){
	        res.send(500, err);
                return;
            }
            var pet = {
                owner: new ObjectID(userid),
                hp: 100,
                attack: 5,
                defence: 5,
                speed: 5,
            };
            
            collection.insert(pet, function(err, docs){
                if (err){
                    res.send(404, err);
                }else{
                    res.json(docs);
                }
                release();
            });
        });

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
        
        var userid = req.session.userid;
        
        globaldata.get('mongoPool').acquire(req, 'pets', function(err, collection, release){
            if (err){
	        res.send(500, err);
                return;
            }

            console.log(userid);
            collection.find({owner: new ObjectID(userid)}).toArray(function(err, docs){
                if (err){
                    res.send(404, err);
                }else{
                    res.json(docs);
                }
                release();
            });
        });


    },
});
