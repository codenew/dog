define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
    , MapView = require('view/mapview').MapView
    , Circle = require('model/circle').Circle
    , CircleMgr = require('model/circle')
    , CircleManager = require('model/circle').CircleManager
    , User = require('model/user').User
    , DogServer = require('../api').DogServer
    , googlemap = require('googlemap');
    var google = window.google;
    var map = null;

    var Device = Backbone.Model.extend({
        getLocation: function(next){
            navigator.geolocation.getCurrentPosition(function(position){
                next(null, {longitude:position.coords.longitude, latitude: position.coords.latitude});
            }, function(error){
                next([error.code, error.message].join(':'));
            });
        },
    });
    var device = new Device;
    //    Device.on('ready', function(){
    //  });

    function initialize() {	
	CircleMgr.getCircleManager(function(circleManager){
	    var userSelf = new User();
	    userSelf.set('location', {latitude: 31, longitude: 121});
	    var mapView = new MapView({
		el: $('#mappage #mapview'),
		collection: circleManager,
		model: userSelf
	    });
	    $("#mappage").delegate("#confirm", "click", function(){
		var newCircle = new Circle({
		    location: userSelf.get('location'),
		    radius: mapView.currentRadius,
		    owner: userSelf.get('id')
		});
		newCircle.save({}, {
		    success: function(model, response, options){
			console.log(response);
			circleManager.push(newCircle);
		    },
		    error: function(model, xhr, options){
			console.log(xhr);
		    },
		});
		/*DogServer.rpc('addCircle', {
		  location: userSelf.get('location')
		  }, function(json){
		  });*/
	    });
	    device.getLocation(function(err, coords){
	        if (err){
		    console.log(err);
		    return;
	        }
		userSelf.set('location', {
		    latitude: coords.latitude,
		    longitude: coords.longitude
		});
	    });
	});
    }
    
    $(document).delegate("#mappage", "pageshow", initialize);
});

