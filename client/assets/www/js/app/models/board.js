define(function(require, exports, module){
    var Backbone = require('backbone');
    var boardid = null;
    var local_board = null;
    var template = require('text!template/board.tpl');
    
    //单个的帖子
    exports.thread = BackBone.Model.extend({
        urlBase:'/board/thread',
        id:null,
        authorid:null,
        authorname:null,
        publishtime:null,
        content:null,
        commentnumber:null
    });
    
    //整个版面
    exports.board = Backbone.Collection.extend({
        urlBase:'/board',        
        id:null,
        model: exports.thread
    });
   
    
    exports.setboardid = function(in_boardid){
        boardid = in_boardid;
        console.log("board id is set as",in_boardid);
        local_board = new this.board();        
        local_board.fetch({
                success:function(collection, response, options){                                        
                    console.log("Fetch CirlesManager success!");                    
                    var tpl = new jSmart(template);
                    var res = tpl.fetch({data:collection});
                    $('#boardcontent').html(res);
                    $('#boardcontent').listview('refresh');                    
                },
                error:function (collection, xhr, options){
                    console.log("Fetch CirlesManager failed!");
                    local_board = null;
                },
             });       
    };
    
    
    $("#myCirclePage").delegate("a[circle_id]", "click", function(){
        console.log(circle_id);
    });

});


