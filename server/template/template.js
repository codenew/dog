var _ = require('underscore');
var fs = require('fs');

 _.extend(exports, {
    //load一个模板
    load: function(req, res){
        var id = req.param("templateid");
        if (id)
        {
            fs.readFile('./template/'+id+'.template.xml', function(err,data){
                    if (err){
                        res.json({result:"failed"});
                        console.log("Load template failed"+err);
                    }else{                        
                        //res.header('Content-Type','text/x-jsmart-tmpl');
                        res.json({result:"ok", data:data.toString()});
                        console.log("Load template ok"); 
                    }//else
                });                              
        }
        else
        {
            res.send('no such template',404);            
            console.log("Load template failed,id is null");
        }

    }
});