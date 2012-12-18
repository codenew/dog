define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
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
            var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
            var myOptions = {
		zoom: 16,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		panControl: true,
		zoomControl: true,
		zoomControlOptions: {
		    style: google.maps.ZoomControlStyle.DEFAULT,
		},
		mapTypeControl:false,
		scaleControl: true,
		streetViewControl: false,
		overviewMapControl: false,
            };
            var mapcontent = document.getElementById("mapcontent");
            map = new google.maps.Map(mapcontent,
				      myOptions);
	    markerManager.map = map;
	    google.maps.event.addListener(map, 'click', function(event){
		//markerManager.addMarker(event.latLng);
		markerManager.addCircle(event.latLng, 100);
		//markerManager.clearOverlays();
		//markerManager.showOverlays();
	    });
	    /*var canvas = document.getElementById('mapOverlay');
	      $(canvas).width($(mapcontent).width());
	      $(canvas).height($(mapcontent).height());
	      var context2d = canvas.getContext('2d');
	      context2d.fillStyle='#FF0000';
	      for (var i = 0; i < $(canvas).width(); i += 20){
	      context2d.fillRect(i,0,1,$(canvas).height());
	      }
	      for (var j = 0; j < $(canvas).height(); j += 20){
	      context2d.fillRect(0,j,$(canvas).width(),1);
	      }*/
	});
    };
    var markerManager = {
	markers: [],
	map: map,
	addMarker: function(location){
	    var marker = new google.maps.Marker({
		position: location,
		map: this.map,
		title: 'haha'
	    });
	    this.markers.push(marker);
	},
	addCircle: function(location, radius){
	    var options = {
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35,
		map: this.map,
		center: location,
		radius: radius
	    };
	    this.markers.push(new google.maps.Circle(options));
	},
	showOverlays: function(){
	    if (this.markers){
		for (var i in this.markers){
		    this.markers[i].setMap(this.map);
		}
	    }
	},
	clearOverlays: function(){
	    if (this.markers){
		for (var i in this.markers){
		    this.markers[i].setMap(null);
		}
	    }
	},
	deleteOverlays: function(){
	    this.clearOverlays();
	    this.markers.length = 0;
	},
    };
    
    $(document).delegate("#mappage", "pageshow", initialize);
});

