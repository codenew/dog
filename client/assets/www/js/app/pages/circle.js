define(function(require, exports, module) {
    var $ = require('jquery');
    var board = require('model/board');
    var template = require('text!template/board.tpl');
    var ListView = require('view/listview').ListView;
    
    $(document).delegate("#circleDetailPage", "pageshow", function(){
        board.get_thread_set( function(thread_set){
              
            var threadView = new ListView({
                el: $("#threadlist"),                
                collection: thread_set,
                template: template,
            });
            threadView.render();
//            if (thread_set == null){
//                console.log("Fetch thread set error");
//            } else {
//                var tpl = new jSmart(template);
//                var res = tpl.fetch({data:thread_set});
//                $('#threadlist').html(res);
//                $('#threadlist').listview('refresh');
//            }
        });//get_thread_set
    });
    
    
    $(document).delegate("#buttonSubmitThread","click", function(){
        var posttext = $("#newThread").val();                
        board.add_thread(posttext);
     });
        
});

