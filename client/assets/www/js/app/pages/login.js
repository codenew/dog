define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
    var DogServer = require('../api').DogServer;
    var User = require('model/user').User;

    var LoginPage = Backbone.View.extend({
        events:{
            "submit form#login": "login",
            "click #register": "register",
        },

        initialize: function(){
            this.render();
        },

        login: function(e){
            console.log('submit');
            e.preventDefault();
            e.stopPropagation();
            User.login(
                this.$el.find("#username").val(),
                this.$el.find("#password").val(),
                function(err){
                    console.log('user.login with:' + err);
                    if (err){
                        //$("#messageWindow #messageString").text('login failed');
                        //$("#messageWindow").popup("open");
                    }else{
                        $.mobile.changePage('index.html');
                    }
                });
        },
        register: function(e){
            e.stopPropagation();
        },
    });

    var page = null;
    $(document).delegate("#loginPage", "pageinit", function(){
        console.log('login pageinit');
    }).delegate("#loginPage", "pageshow", function(){
        console.log('login pageshow');
        page = new LoginPage({
            el: $("#loginPage"),
        });
    }).delegate("#loginPage", "pagehide", function(){
        page.remove();
        page = null;
    });
});
