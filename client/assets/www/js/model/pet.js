define(function(require, exports, module){
    var Backbone = require('backbone')
    , config = require('app/config');

    exports.Pet = Backbone.Model.extend({
        url:function(){
            if (this.id){
                return config.server + '/pet/' + this.id;
            }
            return config.server + '/pet';
        },
        idAttribute: '_id',
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
        console.log(user.id);
        petManager.fetch({
            add:true,
            update:true,
            remove:true,
            data:{
                // user: user.id // no need to send current userid, since server could use session.userid
            },
            success:function(collection, response, options){
                //collection.trigger('change');
                console.log('petmanager fetched', collection.length);
            },
            error:function(collection, xhr, options){
                console.log('failed to fetch pet for user', user, xhr);
            }
        });
        return petManager;
    };
});


