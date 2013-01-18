define(function(require, exports, module) {
    var $ = require('jquery')
    , Backbone = require('backbone')
    , global = require('model/global').global
    , user = require('model/user')
    , board = require('model/circleboard')
    , circle = require('model/circle')
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


    function playSound(name, loop) {
	createjs.SoundJS.play(name, createjs.SoundJS.INTERRUPT_EARLY, 0, 0, loop);
    }
    window.playSound = playSound;
    var FightPage = Backbone.View.extend({
        events:{
            "click #beginFight": "beginFight",
        },

        initialize: function(){
            this.canvas = this.$el.find("canvas").get(0);
            $(this.canvas).width(this.$el.width()).height(this.$el.height() * 0.4);
            this.stage = new createjs.Stage(this.canvas);
            this.ready = false;
            var self = this;
            this.loadResources(function(){
                self.ready = true;
            });
            this.render();
        },
        loadResources: function(next) {
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
            var self = this;
            loader.onComplete = function(){
                next.call(self);
            };
	    loader.loadManifest(manifest);
        },
        updateName: function(){
            this.$el.find('#circleName').text(this.model.get('name'));
        },
        render: function(){
            this.updateName();
        },
        beginFight: function(){
            if (!this.ready){
                return;
            }

            var self = this;
            circle.fight(this.model, function(err, result){
                if (err){
                    if (self.stage) self.stage.removeAllChild();
                    if (self.animA) self.animA = null;
                    if (self.animB) self.animB = null;
                }else{
                    if (result.result == 'ok'){
                        self.stopOn = self.animA;
                        self.result = 'you win';
                    }else{
                        self.stopOn = self.animB;
                        self.result = 'you lose';
                    }
                }
            });
            this.stage.removeAllChildren();
            this.animA = new lib.A();
            //this.animA.loop = false;
            this.stage.addChild(this.animA);
            this.animB = new lib.B();
            //this.stage.addChild(this.animB);

            this.stage.update();
            createjs.Ticker.setFPS(24);
            createjs.Ticker.addListener(this.stage);
            this.playCount = 0;

            function checkEnd(timeline){
                if (timeline.position >= timeline.duration){
                    self.onAnimEnd(timeline);
                }
            }
            this.animA.timeline.onChange = checkEnd;
            this.animB.timeline.onChange = checkEnd;
        },
        onAnimEnd: function(timeline){
            var curAnim, nextAnim;
            this.playCount++;
            if (timeline == this.animA.timeline){
                curAnim = this.animA;
                nextAnim = this.animB;
            }else{
                curAnim = this.animB;
                nextAnim = this.animA;
            }

            if (this.stopOn == curAnim && this.playCount > 3){
                this.$el.find('#result').text(this.result);
                return;
            }
            this.stage.removeChild(curAnim);
            this.stage.addChild(nextAnim);
            nextAnim.gotoAndPlay(0);
        },
        remove: function(){
            createjs.Ticker.removeListener(this.stage);
            this.stage.removeAllChildren();
            this.stage = null;
            this.animA = null;
            this.animB = null;

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
