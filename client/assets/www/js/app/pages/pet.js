define(function(require, exports, module){
    var $ = require('jquery')
    , User = require('model/user').User
    , Pet = require('model/pet')
    , ListView = require('view/listview').ListView
    , DogServer = require('app/api').DogServer
    , petTemplate = require('text!template/petview.tpl');

    var petManager = null;
    $(document).delegate("#petpage", "pageshow", function(){
        petManager = Pet.getPetManager(User.getSelf());
        var petView = new ListView({
            el: $("#petList"),
            //model: User.getSelf(),
            collection: petManager,
            template: petTemplate,
        });
       // petView.render();
    });
    $(document).delegate("#petpage", "pageinit", function(){
        $("#adopt", $(this)).click(function(){
            DogServer.rpc('pet/adopt', {}, function(err, result){
                if (err){
                    console.log('adpot:', err);
                    return;
                }
                if (petManager){
                    petManager.fetch({
                        add:true,
                        update:true,
                        remove:true,
                    });
                }
            });
        });
    });
});