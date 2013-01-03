define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
    , MapView = require('view/mapview').MapView
    , Circle = require('model/circle').Circle
    , CircleManager = require('model/circle').CircleManager
    , User = require('model/user').User;


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
    device.getLocation(function(err, coords){
	if (err){
	    console.log(err);
	    return;
	}
	User.getSelf().set('location', {
	    latitude: coords.latitude,
	    longitude: coords.longitude
	});
    });
    //    Device.on('ready', function(){
    //  });

    var PositionPage = Backbone.View.extend({
        events:{
            "click #confirm": "addCircle",
        },
        initialize: function(){
            this.mapView = new MapView({
	        el: this.$el.find('#mapview'),
	        collection: this.collection,
	        model: this.model,
	    });
        },
	addCircle: function(){
            this.collection.create({
		location: this.model.get('location'),
		radius: this.mapView.currentRadius,
		userid: this.model.id,
		username: this.model.get('name')
	    });
        }
    });

    $(document).delegate("#mappage", "pageshow", function(){
        var page = new PositionPage({
            el: '#mappage',
            model: User.getSelf(),
            collection: CircleManager.getSingleton(),
        });
    });
});

