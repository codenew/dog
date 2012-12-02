
/*
 * GET users listing.
 */

exports.login = function(req, res){
    //res.send("respond with a resource");
    res.json({result:'ok',user:'kaikai',id:'1'});
    console.log(exports);
};

exports.logout = function(req, res){
    res.json({result:'ok'});
};
