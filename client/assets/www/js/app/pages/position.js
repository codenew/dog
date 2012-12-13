define(function(require, exports, module){
    var googlemap = require('googlemap')
    , _ = require('underscore')
    , backbone = require('backbone');
    exports = _.extend(exports, {
	on_page_init: function(page){
	},
	on_page_show: function(page){
	},
	
    });
    function initialize() {
	var latlng = new google.maps.LatLng(-34.397, 150.644);
	var myOptions = {
	    zoom: 8,
	    center: latlng,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("positionMap"),
				      myOptions);
    }
    $(document).delegate("#positionPage", "pageshow", function(){
	initialize();
    });
});