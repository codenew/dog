define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
    , MapView = require('view/mapview').MapView
    , Circle = require('model/circle').Circle
    , CircleManager = require('model/circle').CircleManager
    , User = require('model/user').User
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
	device.getLocation(function(err, coords){
	    if (err){
		console.log(err);
		return;
	    }
//	    markerManager.map = map;
	    var userSelf = new User();
	    userSelf.set('location', coords);
	    var circleManager = new CircleManager();
	    var mapView = new MapView({
		el: $('#mapcontent'),
		collection: circleManager,
		model: userSelf
	    });

	});
    };
    
    $(document).delegate("#mappage", "pageshow", initialize);
});

