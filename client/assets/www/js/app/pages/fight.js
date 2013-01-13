define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
    , global = require('model/global').global
    , user = require('model/user')
    , board = require('model/circleboard')
    , ThreadSet = require('model/circleboard').ThreadSet
    , listTemplate = require('text!template/board.tpl')
    , threadTemplate = require('text!template/thread.tpl')
    , easeljs = require('easeljs')
    , preloadjs = require('preloadjs')
    , tweenjs = require('tweenjs')
    , soundjs = require('soundjs')
    , movieclip = require('movieclip')
    , animA = require('anim/A')
    , animB = require('anim/B')
    , ListView = require('view/listview').ListView;

    var createjs = window.createjs;
    var lib = window.lib;
    var canvas, stage, exportRoot;

    function init(el) {
	canvas = el;//document.getElementById("canvas");

	var manifest = [
	    {src:"sounds/sound117.mp3", id:"sound117"},
	    {src:"sounds/sound122.mp3", id:"sound122"},
	    {src:"sounds/sound123.mp3", id:"sound123"},
	    {src:"sounds/sound244.mp3", id:"sound244"},
	    {src:"sounds/sound26.mp3", id:"sound26"},
	    {src:"sounds/sound267.mp3", id:"sound267"}
	];

	var loader = new createjs.PreloadJS(false);
	loader.installPlugin(createjs.SoundJS);
	loader.onComplete = handleComplete;
	loader.loadManifest(manifest);
    }

    function handleComplete() {
	exportRoot = new lib.A();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(24);
	createjs.Ticker.addListener(stage);
    }

    function playSound(name, loop) {
	createjs.SoundJS.play(name, createjs.SoundJS.INTERRUPT_EARLY, 0, 0, loop);
    }
    window.playSound = playSound;
    var FightPage = Backbone.View.extend({
        events:{
            "click #beginFight": "beginFight",
        },

        initialize: function(){
            var canvas = this.$el.find("canvas").get(0);
            $(canvas).width(this.$el.width()).height(this.$el.height() * 0.4);
            
            init(canvas);
            this.render();
        },
        updateName: function(){
            this.$el.find('#circleName').text(this.model.get('name'));
        },
        render: function(){
            this.updateName();
        },
        beginFight: function(){
            //            $.mobile.changePage("fight.html");
        },

        remove: function(){
            Backbone.View.prototype.remove.call(this);
        },

    });
    
    $(document).delegate("#fightPage", "pageshow", function(){
        var circle = global.get('currentCircle');
        page = new FightPage({
            el: '#fightPage',
            model: circle,
            template: listTemplate,
        });
    }).delegate("#fightPage", "pagehide", function(){
        if (page){
            page.remove();
            page = null;
        }
    });
    
});
