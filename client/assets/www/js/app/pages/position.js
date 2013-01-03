define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
    , MapView = require('view/mapview').MapView
    , Circle = require('model/circle').Circle
    , CircleManager = require('model/circle').CircleManager
    , board = require('model/board')
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
            this.listenTo(this.collection, 'select', this.viewCircleDetail);
            this.mapView = new MapView({
	        el: this.$el.find('#mapview'),
	        collection: this.collection,
	        model: this.model,
	    });
            this.render();
        },
	addCircle: function(){
            this.collection.create({
		location: this.model.get('location'),
		radius: this.mapView.currentRadius,
		userid: this.model.id,
		username: this.model.get('name')
	    });
        },
        viewCircleDetail: function(circle_id){
            // maybe use route in the future
            board.setboardid(circle_id);
            setTimeout(function(){
                $.mobile.changePage('circle.html#id=' + circle_id);
            }, 0);
        },

    });

    var page = null;
    $(document).delegate("#mappage", "pageshow", function(){
        page = new PositionPage({
            el: '#mappage',
            model: User.getSelf(),
            collection: CircleManager.getSingleton(),
        });
    }).delegate("#mappage", "pagehide", function(){
        page.remove();
        page = null;
    });
});

