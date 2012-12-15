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
    }
    
    
    $(document).delegate("#mappage", "pageshow", initialize);
});

