define(function(require, exports, module) {
    var $ = require('jquery')
    , googlemap = require('googlemap');
    var google = window.google;
    function initialize() {
        var latlng = new google.maps.LatLng(-34.397, 150.644);
        var myOptions = {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapcontent = document.getElementById("mapcontent");
        var map = new google.maps.Map(mapcontent,
				      myOptions);
	    var canvas = document.getElementById('mapOverlay');
		$(canvas).width($(mapcontent).width());
		$(canvas).height($(mapcontent).height());
		var context2d = canvas.getContext('2d');
		context2d.fillStyle='#FF0000';
		for (var i = 0; i < $(canvas).width(); i += 20){
			context2d.fillRect(i,0,1,$(canvas).height());
		}
		for (var j = 0; j < $(canvas).height(); j += 20){
			context2d.fillRect(0,j,$(canvas).width(),1);
		}
    }
    
    $(document).delegate("#mappage", "pageshow", initialize);
});

