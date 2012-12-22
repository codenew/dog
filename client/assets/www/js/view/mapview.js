define(function(require, exports, module) {
    var Backbone = require('backbone')
    , $ = require('jquery')
    , _ = require('underscore')
    , Circle = require('model/circle').Circle
    , googlemap = require('googlemap');
    var google = window.google;

    exports.MapView = Backbone.View.extend({
	el: null,
	map: null,
	markers: {},
	initialize: function(){
	    this.listenTo(this.model, 'change', this.render);
	    this.listenTo(this.collection, 'change add remove', this.refreshMarkers);
	    var coords = this.model.get('location');
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

            var mapcontent = this.$el.get(0);
            this.map = new google.maps.Map(mapcontent,
					   myOptions);
	    var self = this;
	    google.maps.event.addListener(this.map, 'click', function(event){
		self.addCircle(event.latLng, null);
	    });
	    this.markers = {};
	    this.render();
	},
	addCircle: function(latLng, id){
	    // this should be some where like a controller
	    var c = new Circle({id: id, location: latLng, radius: 100, owner: 0});
	    this.collection.push(c);
	},
	deleteMarkers: function(){
	    for (var cid in this.markers){
		this.markers[cid].setMap(null);
	    }
	    this.markers = {};
	},
	refreshMarkers: function(){
	    var self = this;
	    var selfUserId = this.model.get('userid');
	    this.collection.each(function(circle, index){
		var cid = circle.cid;
		if (cid in self.markers){
		    self.markers[cid].setCenter(circle.get('location'));
		    self.markers[cid].setRadius(circle.get('radius'));
		}else{
		    self.createCircle(circle, selfUserId);
		}
	    });
	    _.each(this.markers, function(marker, cid){
		if (!self.collection.get(cid)){
		    marker.setMap(null);
		}
	    });
	},
	createCircle: function(circle, selfUserId){
	    var color = '#ff0000';
	    if (circle.get('owner') == selfUserId){
		color = '#00ff00';
	    }
	    var options = {
		strokeColor: color,
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: color,
		fillOpacity: 0.35,
		map: this.map,
		center: circle.get('location'),
		radius: circle.get('radius')
	    };
	    var cid = circle.cid;
	    if (cid in this.markers){
		this.markers[cid].setMap(null);
	    }
	    this.markers[cid] = new google.maps.Circle(options);
	},
	render:function(){
	    var coords = this.model.get('location');
            var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
	    this.map.panTo(latlng);
	    this.deleteMarkers();
	    var selfUserId = this.model.get('userid');
	    var self = this;
	    this.collection.each(function(circle, index){
		self.createCircle(circle, selfUserId);
	    });
	}
    });
});