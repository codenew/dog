define(function(require, exports, module){
    var Backbone = require('backbone');
    var boardid = null;
    
    exports.board = Backbone.Model.extend({
        urlBase:'/board',
        idAttribute: 'id',
	    location: null,
	    radius: null,
	    owner: 0,
    });
    
    exports.setboardid = function(in_boardid){
        boardid = in_boardid;
        console.log("board id is set as",in_boardid);
    };
    
    $("#myCirclePage").delegate("a[circle_id]", "click", function(){
        console.log(circle_id);
    });

});


