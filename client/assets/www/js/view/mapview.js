define(function(require, exports, module) {
    var Backbone = require('backbone')
    , $ = require('jquery')
    , _ = require('underscore')
    , Circle = require('model/circle').Circle
    , googlemap = require('googlemap');
    var google = window.google;

    exports.MapView = Backbone.View.extend({
	el: null,
	model: null,
	collection: null,
	map: null,
	markers: {},
	userSymbol: null, // blue arrow, current position
	userCircle: null, // blue circle, for create circle
	currentRadius: 10, // in meter
	events:{
            //	    "click #confirm": "createCircle",
            //	    "click #createCircle": "createCircle",
	    "click #bigCircle": "bigCircle",
	    "click #smallCircle": "smallCircle",
	    "click #zoomIn": "zoomIn",
	    "click #zoomOut": "zoomOut",
	    "click #backCurrentPos": "backCurrentPos",
	},
	initialize: function(){
	    this.listenTo(this.model, 'change', this.refreshUser);
            if (this.collection){
	        this.listenTo(this.collection, 'change add remove', this.refreshMarkers);
            }
	    var coords = this.model.get('location');
            if (google){
                var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
                var myOptions = {
		    zoom: 16,
		    center: latlng,
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    panControl: false,
		    zoomControl: false,
		    zoomControlOptions: {
		        style: google.maps.ZoomControlStyle.DEFAULT,
		        position: google.maps.ControlPosition.RIGHT_BOTTOM,
		    },
		    mapTypeControl:false,
		    scaleControl: true,
		    streetViewControl: false,
		    overviewMapControl: false,
                };

                var mapcontent = this.$el.find('#mapcontent').get(0);
                this.map = new google.maps.Map(mapcontent,
					       myOptions);
	        var self = this;
	        /*google.maps.event.addListener(this.map, 'click', function(event){
		  self.addCircle(event.latLng, null);
	          });*/

	        this.markers = {};
	        var color = '#0000ff';
	        this.userSymbol = new google.maps.Marker({
		    clickable: false,
		    draggable: false,
		    flat: false,
		    icon: {
		        fillColor: color,
		        fillOpacity: 0.5,
		        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
		        rotation: 0,
		        scale: 10,
		        strokeColor: color,
		        strokeOpacity: 0.8,
		        strokeWeight: 1,
		    },
		    title: 'I\'m here',
		    map: this.map,
	        });
	        this.userCircle = new google.maps.Circle({
		    clickable: true,
		    strokeColor: color,
		    strokeOpacity: 0.8,
		    strokeWeight: 2,
		    fillColor: color,
		    fillOpacity: 0.35,
		    map: this.map,
		    center: this.getUserLocation(),
		    radius: this.currentRadius,
	        });
            }
            this.collection.fetch({
                add: true,
                remove: true,
                update: true,
                data:{
                    location: this.model.get('location')
                },
            });
	    
	    this.refreshUser();
	    this.render();
	},
	getLocation: function(coords){
	    if (google && coords && typeof coords.latitude == "number" && typeof coords.longitude == "number"){
		var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
		return latlng;		
	    }else{
		return null;
	    }
	},
	getUserLocation: function(){
	    var coords = this.model.get('location');
	    return this.getLocation(coords);
	},
	bigCircle: function(){
	    if (this.currentRadius < 1000){
		this.currentRadius += 30;
		this.refreshUser();
	    }
	},
	smallCircle: function(){
	    if (this.currentRadius > 30){
		this.currentRadius -= 30;
		this.refreshUser();
	    }
	},
	zoomIn: function(){
	    if (this.map && this.map.getZoom() < 20){
		this.map.setZoom(this.map.getZoom() + 1);
	    }
	},
	zoomOut: function(){
	    if (this.map && this.map.getZoom() > 8){
		this.map.setZoom(this.map.getZoom() - 1);
	    }
	},
	backCurrentPos: function(){
            if (this.map){
	        this.map.panTo(this.getUserLocation());
            }
	},
	refreshUser: function(){
	    var latlng = this.getUserLocation();
            if (this.userSymbol){
	        this.userSymbol.setPosition(latlng);
            }
            if (this.userCircle){
	        this.userCircle.setCenter(latlng);
	        this.userCircle.setRadius(this.currentRadius);
            }
	    this.$el.find('#radius_value').text(this.currentRadius + ' 米');
	},
	addCircle: function(latLng, id){
	    // this should be some where like a controller
	    var c = new Circle({id: id, location: latLng, radius: 100, user: "yanhanning",name:"tempname", userid:1});	    
	    this.collection.push(c);
	},
	deleteMarkers: function(){
	    for (var cid in this.markers){
		var circle = this.markers[cid];
                if (google){
		    google.maps.event.clearListeners(circle, 'click');
                }
		circle.setMap(null);
	    }
	    this.markers = {};
	},
	refreshMarkers: function(){
	    var self = this;
	    var selfUserId = this.model.id;
	    this.collection.each(function(circle, index){
		var cid = circle.cid;
		if (cid in self.markers){
		    self.markers[cid].setCenter(self.getLocation(circle.get('location')));
		    self.markers[cid].setRadius(circle.get('radius'));
		}else{
		    self.addCircle(circle, selfUserId);
		}
	    });
	    _.each(this.markers, function(marker, cid){
		if (!self.collection.get(cid)){
                    if (google){
		        google.maps.event.clearListeners(marker, 'click');
                    }
		    marker.setMap(null);
		}
	    });
	},
	createCircle: function(){
	    console.log('createcircle');
	},
	addCircle: function(circle, selfUserId){
	    var color = '#ff0000';
            //console.log('circle.userid=', circle.get('userid'), 'selfUserId=', selfUserId);
	    if (circle.get('userid') == selfUserId){
		color = '#00ff00';

	    }
            var options = {
                clickable: true,
                strokeColor: color,
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: color,
                fillOpacity: 0.35,
                map: this.map,
                center: this.getLocation(circle.get('location')),
                radius: circle.get('radius')
	    };
            var cid = circle.cid;
            if (cid in this.markers){
                if (google){
                    google.maps.event.clearListener(this.markers[cid], 'click');
                }
                this.markers[cid].setMap(null);
            }
            if (google){
                var circleMarker = new google.maps.Circle(options);
                this.markers[cid] = circleMarker;
                var self = this;

                google.maps.event.addListener(circleMarker, 'click', function(event){
                    self.collection.trigger('select', circle.id);
                    console.log(event, circle, cid);
                });

            }
        },
        render:function(){
            if (this.map){
                this.map.panTo(this.getUserLocation());
            }
            this.deleteMarkers();
            var selfUserId = this.model.id;
            var self = this;
            this.collection.each(function(circle, index){
                self.addCircle(circle, selfUserId);
            });
        }
    });
});