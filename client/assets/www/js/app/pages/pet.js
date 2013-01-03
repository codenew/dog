define(function(require, exports, module){
    var $ = require('jquery')
    , User = require('model/user').User
    , Pet = require('model/pet')
    , ListView = require('view/listview').ListView
    , DogServer = require('app/api').DogServer
    , Backbone = require('backbone')
    , petTemplate = require('text!template/petview.tpl');

    var PetPage = Backbone.View.extend({
        events:{
            "click #adopt": "adopt",
        },

        initialize: function(){
            this.petView = new ListView({
                el: $("#petList"),
                collection: this.collection,
                template: this.options.template,
            });
            this.petView.render();
            this.render();
        },

        adopt: function(){
            var self = this;
            DogServer.rpc('pet/adopt', {}, function(err, result){
                if (err){
                    console.log('adpot:', err);
                    return;
                }
                if (self.collection){
                    self.collection.fetch({
                        add:true,
                        update:true,
                        remove:true,
                    });
                }
            });
        },

    });

    var page = null;
    $(document).delegate("#petpage", "pageshow", function(){
        page = new PetPage({
            el: $("#petpage"),
            collection: Pet.getPetManager(User.getSelf()),
            template: petTemplate,
        });
    }).delegate("#petpage", "pagehide", function(){
        page.remove();
        page = null;
    });
});