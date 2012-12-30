define(function(require, exports, module){
    var $ = require('jquery')
    , User = require('model/user')
    , Pet = require('model/pet')
    , ListView = require('view/listview').ListView
    , petTemplate = require('text!template/petview.tpl');

    $(document).delegate("#petpage", "pageshow", function(){
        var petManager = Pet.getPetManager(User.getSelf());
        var petView = new ListView({
            el: $("#petList"),
            model: User.getSelf(),
            collection: petManager,
            template: petTemplate,
        });
        petView.render();
    });
});