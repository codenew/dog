(function($){
    function log(info){
    	$('#log').prepend($('<p>').text(info));
    }
	$(function(){
		$("form").submit(function(e){
			e.stopPropagation();
			
		});
		
		$("#register").click(function(e){
			e.stopPropagation();
			pomelo.request("connector.entryHandler.entry", function (data) {
				var t1 = new Date().getTime();
			    log([data.msg, 'takes', t1-t0, 'ms'].join(' '));
			});
			log('sent.');
		});
	})
})(window.jQuery);