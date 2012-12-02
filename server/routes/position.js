var _ = require('underscore');

exports = _.extend(exports, {
    list: function(req, res){
	res.json({
		result:'ok', 
		data:[
{
    name:'张江地铁站', 
    location:{latitude:'123', altitude:'32'},
    range:'30m',
    owner: null,
},
{
    name:'圆环广场',
    location:{latitude:'124', altitude:'32'},
    range:'40m',
    owner: {userid:1001, nickname:'江南一霸'},
},
		      ],
	    }); // end of list.function.res.json({
    },
    take: function(req, res){
	res.json({
		result:'failed',
	    });
    }
});