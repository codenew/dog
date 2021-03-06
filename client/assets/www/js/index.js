requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
	app: '../app',
	view: '../view',
	model: '../model',
	async: 'require.async',
        template: '../../template',
        anim: '../anim',
    },
    map:{
	"*": {
	    'easeljs': 'easeljs-0.5.0.min',
	    'preloadjs': 'preloadjs-0.2.0.min',
	    'soundjs': 'soundjs-0.3.0.min',
	    'soundjs.flashplugin': 'soundjs.flashplugin-0.3.0.min',
	    'tweenjs': 'tweenjs-0.3.0.min',
            'movieclip': 'movieclip-0.5.0.min',
            'googlemap': 'async!https://maps.google.com/maps/api/js?v=3&sensor=false',//key=AIzaSyC9b9WVCC9ML8FRXdb3GZC-LSzaGupBCr4&
	    'smart': 'smart-2.9.min',
	},
    },
    shim: {
	underscore: {exports: '_'},
	backbone: {deps:["underscore", "jquery"], exports: "Backbone"},
	"jquery.mobile":{
	    deps:[
		"app/pages/main",
		"app/pages/login",
		"app/pages/register",
		"app/pages/options",
                "app/pages/fight",
		"app/pages/mycircle",
		"app/pages/position",
                "app/pages/circle_page",
                "app/pages/pet",
	    ],
	},
        "easeljs":{exports: "createjs"},
        "tweenjs":{deps:["easeljs"], exports: "createjs"},
        "movieclip-0.5.0.min":{deps:["easeljs", "tweenjs"],exports: "createjs"},
        "soundjs": {deps:["easeljs"],exports: "createjs"},
        "anim/A":{deps:["movieclip", "easeljs", "tweenjs"],exports: "lib"},
        "anim/B":{deps:["movieclip", "easeljs", "tweenjs"],exports: "lib"},
    }
});
requirejs(['underscore', 'smart-2.9.min'], function(_,s){
    console.log('undersocre loaded');
    console.log('smart loaded');
});
define(function(require, exports, module) {
    var $ = require('jquery')
    , _ = require('underscore')
    , backbone = require('backbone')
    , phonegap = require('phonegap')
    , jmobile = require('jquery.mobile') 
    , config = require('app/config');

    // $.support.cors = true;
    $.mobile.transitionFallbacks.slideout = "none";
    var host = config.host;
    var port = config.port; 
    function log(info){
	//$('#log').prepend($('<p>').text(info));
	console.log(info);
    }
    $(function(){
	$('#add_log').click(function(){
	    log('log add.');
	});
	//$('#test').click(function(){show();});
	if ('undefined' != typeof WebSocketFactory){
	    log('exist');
	}else{
	    log('no');
	}
    });
    // 等待加载PhoneGap
    document.addEventListener("deviceready", onDeviceReady, false);
    
    // PhoneGap加载完毕，可以安全调用PhoneGap方法
    function onDeviceReady() {
	log('device ready!');
	checkConnection(); 
	//	获取位置信息成功时调用的回调函数
	//	该方法接受一个“Position”对象，包含当前GPS坐标信息
	var onSuccess = function(position) {
	    log('Latitude: '          + position.coords.latitude          + '\n' +
		'Longitude: '         + position.coords.longitude         + '\n' +
		'Altitude: '          + position.coords.altitude          + '\n' +
		'Accuracy: '          + position.coords.accuracy          + '\n' +
		'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
		'Heading: '           + position.coords.heading           + '\n' +
		'Speed: '             + position.coords.speed             + '\n' +
		'Timestamp: '         + new Date(position.timestamp)      + '\n');
	};
	
	// onError回调函数接收一个PositionError对象
	function onError(error) {
	    log('code: '    + error.code    + '\n' +
		'message: ' + error.message + '\n');
	}
	
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }  
    
    function checkConnection() { 
	var networkState = navigator.network.connection.type; 		 
	
	var states = {}; 
	states[Connection.UNKNOWN]  = 'Unknown connection'; 
	states[Connection.ETHERNET] = 'Ethernet connection'; 
	states[Connection.WIFI]     = 'WiFi connection'; 
	states[Connection.CELL_2G]  = 'Cell 2G connection'; 
	states[Connection.CELL_3G]  = 'Cell 3G connection'; 
	states[Connection.CELL_4G]  = 'Cell 4G connection'; 
	states[Connection.NONE]     = 'No network connection'; 
	
	log('Connection type: ' + states[networkState]); 
    }
    
    //$("a[href]").click(function(){
    //$.mobile.changePage($(this).attr('href'));
    //});
    

});

