(function($){

    var pomelo = window.pomelo;
    var host = config.host;
    var port = config.port; 
    function log(info){
    	$('#log').prepend($('<p>').text(info));
    }
    var show = function(){log('not ready!');}
    pomelo.init({host: host, port: port, log: true}, function() {
    	log('ready!');
    	show = function() {
    		var t0 = new Date().getTime();
    		pomelo.request("connector.entryHandler.entry", function (data) {
    			var t1 = new Date().getTime();
        	    log([data.msg, 'takes', t1-t0, 'ms'].join(' '));
        	});
        	log('sent.');
      	};
    });
    $(function(){
    	$('#add_log').click(function(){
    		log('log add.');
    	});
    	$('#test').click(function(){show();});
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
    
})(jQuery);