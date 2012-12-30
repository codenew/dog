define(function(require, exports, module){
    var Backbone = require('backbone')
    , config = require('app/config');

    exports.Pet = Backbone.Model.extend({
        url:function(){
            return config.server + '/pet';
        },
        idAttribute: 'id',
        location: null,
        radius: null,	    
        name:null,
        user:null,
        userid:0	    
    });
    
    exports.PetManager = Backbone.Collection.extend({
        url:function(){
            return config.server + '/pet';
        },
        model: exports.Pet,
    });

    exports.getPetManager = function(user){
        var petManager = new exports.PetManager();
        console.log(user.get('id'));
        petManager.fetch({
            data:{
                user: user.get('id')
            },
            success:function(collection, response, options){
            },
            error:function(collection, xhr, options){
                console.log('failed to fetch pet for user', user, xhr);
            }
        });
        return petManager;
    };
});


