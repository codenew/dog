define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
    , _ = require('underscore')
    , User = require('model/user').User;

    var RegisterPage = Backbone.View.extend({
        events:{
            "submit form#register": "register",
        },

        initialize: function(){
            this.render();
        },

        register: function(e){
            console.log('submit');
            e.preventDefault();
            e.stopPropagation();
            User.register(
                this.$el.find("#username").val(),
                this.$el.find("#password").val(),
                function(err){
                    console.log('user.register with:' + err);
                    if (err){
                        //$("#messageWindow #messageString").text('login failed');
                        //$("#messageWindow").popup("open");
                    }else{
                        $.mobile.changePage('login.html');
                    }
                });
        },

        remove: function(){
            
            Backbone.View.prototype.remove.call(this);
        },

    });

    var page = null;
    $(document).delegate("#registerPage", "pageinit", function(){
        console.log('register pageinit');
    }).delegate("#registerPage", "pageshow", function(){
        console.log('register pageshow');
        page = new RegisterPage({
            el: $("#registerPage"),
        });
    }).delegate("#registerPage", "pagehide", function(){
        page.remove();
        page = null;
    });
});

