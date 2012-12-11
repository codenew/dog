(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.attack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// [right_hand.png]
	this.instance = new lib.right_hand_1("synched",0);
	this.instance.setTransform(82,-21.4,1,1,29,0,0,-20.1,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:125,regY:108.5,rotation:-0.1,x:163.9,y:152.4},0).wait(1).to({rotation:-29.5,x:172.6,y:146.1},0).wait(1).to({rotation:-58.8,x:175.6,y:139.5},0).wait(1).to({rotation:-45,x:181.1,y:143.8},0).wait(1).to({rotation:-31.2,x:185.4,y:148.3},0).wait(1).to({rotation:-17.4,x:188.2,y:152.8},0).wait(1).to({rotation:-3.6,x:189.7,y:156.9},0).wait(1).to({rotation:0.3,x:186.3,y:157.2},0).wait(1).to({rotation:4.4,x:182.8,y:157.3},0).wait(1).to({rotation:8.5,x:179.2},0).wait(1).to({rotation:12.6,x:175.5,y:157.4},0).wait(1).to({rotation:16.7,x:171.7,y:157.3},0).wait(1).to({rotation:20.8,x:167.8,y:157.1},0).wait(1).to({rotation:24.9,x:163.8,y:156.8},0).wait(1).to({rotation:29,x:159.8,y:156.4},0).wait(1));

	// [head.png]
	this.instance_1 = new lib.head_1("synched",0);
	this.instance_1.setTransform(20,19,0.99,0.99);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:125,regY:108.5,rotation:-7.8,x:143.7,y:125},0).wait(1).to({rotation:-15.8,x:143.6,y:123.7},0).wait(1).to({rotation:-23.8,x:143.8,y:122.4},0).wait(1).to({rotation:-21.8,x:148.6,y:123.5},0).wait(1).to({rotation:-19.8,x:153.4,y:124.5},0).wait(1).to({rotation:-17.8,x:158.1,y:125.4},0).wait(1).to({rotation:-15.8,x:162.9,y:126.4},0).wait(1).to({rotation:-13.8,x:161.7,y:126.5},0).wait(1).to({rotation:-11.8,x:160.6,y:126.6},0).wait(1).to({rotation:-9.8,x:159.4,y:126.8},0).wait(1).to({rotation:-7.8,x:158.3,y:126.9},0).wait(1).to({rotation:-5.8,x:157.2,y:127},0).wait(1).to({rotation:-3.8,x:156,y:127.1},0).wait(1).to({rotation:-1.8,x:154.9,y:127.3},0).wait(1).to({rotation:0,x:153.8,y:127.4},0).wait(1));

	// [right_leg.png]
	this.instance_2 = new lib.right_leg_1("synched",0);
	this.instance_2.setTransform(25,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:125,regY:108.5,rotation:5.7,x:144.9,y:129.8},0).wait(1).to({rotation:11.3,x:139.8,y:130.1},0).wait(1).to({rotation:17,x:135,y:130.5},0).wait(1).to({rotation:15.6,x:141.2,y:130.6},0).wait(1).to({rotation:14.2,x:147.5},0).wait(1).to({rotation:12.8,x:153.7},0).wait(1).to({rotation:11.3,x:160},0).wait(1).to({rotation:9.9,y:130.5},0).wait(1).to({rotation:8.5},0).wait(1).to({rotation:7.1},0).wait(1).to({rotation:5.7},0).wait(1).to({rotation:4.3},0).wait(1).to({rotation:2.8},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:0},0).wait(1));

	// [body.png]
	this.instance_3 = new lib.body_1("synched",0);
	this.instance_3.setTransform(25,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:125,regY:108.5,rotation:-4,x:149.2,y:125.8},0).wait(1).to({rotation:-8.2,x:148.4,y:122.1},0).wait(1).to({rotation:-12.4,x:148,y:118.5},0).wait(1).to({rotation:-12.5,x:152.7,y:119.8},0).wait(1).to({rotation:-12.6,x:157.5,y:121.1},0).wait(1).to({rotation:-12.7,x:162.2,y:122.3},0).wait(1).to({rotation:-12.8,x:167,y:123.5},0).wait(1).to({rotation:-11.2,x:166.1,y:124.4},0).wait(1).to({rotation:-9.6,x:165.2,y:125.3},0).wait(1).to({rotation:-7.9,x:164.4,y:126.1},0).wait(1).to({rotation:-6.3,x:163.5,y:127},0).wait(1).to({rotation:-4.7,x:162.6,y:127.9},0).wait(1).to({rotation:-3.1,x:161.8,y:128.7},0).wait(1).to({rotation:-1.4,x:160.9,y:129.6},0).wait(1).to({rotation:0,x:160,y:130.5},0).wait(1));

	// [left_hand.png]
	this.instance_4 = new lib.left_hand_1("synched",0);
	this.instance_4.setTransform(25,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:125,regY:108.5,rotation:-8.6,x:131.7,y:127.3},0).wait(1).to({rotation:-17.3,x:113.4,y:125.1},0).wait(1).to({rotation:-26.1,x:95.3,y:123},0).wait(1).to({rotation:-34.8,x:88.3,y:120.6},0).wait(1).to({rotation:-30.3,x:112,y:124.3},0).wait(1).to({rotation:-25.7,x:135.7,y:128.1},0).wait(1).to({rotation:-21.2,x:159.4,y:131.9},0).wait(1).to({rotation:-18.5,x:159.5,y:131.8},0).wait(1).to({rotation:-15.9,y:131.6},0).wait(1).to({rotation:-13.2,x:159.6,y:131.4},0).wait(1).to({rotation:-10.5,x:159.7,y:131.2},0).wait(1).to({rotation:-7.8,y:131.1},0).wait(1).to({rotation:-5.2,x:159.8,y:130.9},0).wait(1).to({rotation:-2.5,x:159.9,y:130.7},0).wait(1).to({rotation:0,x:160,y:130.5},0).wait(1));

	// [left_leg.png]
	this.instance_5 = new lib.left_leg_1("synched",0);
	this.instance_5.setTransform(25,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:125,regY:108.5,rotation:5.3,x:144.9,y:129.8},0).wait(1).to({rotation:10.7,x:139.8,y:130.1},0).wait(1).to({rotation:16,x:135,y:130.5},0).wait(1).to({rotation:14.7,x:141.3,y:130.6},0).wait(1).to({rotation:13.3,x:147.5},0).wait(1).to({rotation:12,x:153.7},0).wait(1).to({rotation:10.7,x:160,y:130.5},0).wait(1).to({rotation:9.3},0).wait(1).to({rotation:8},0).wait(1).to({rotation:6.7},0).wait(1).to({rotation:5.3},0).wait(1).to({rotation:4},0).wait(1).to({rotation:2.7},0).wait(1).to({rotation:1.3},0).wait(1).to({rotation:0},0).wait(1));

	// [tail.png]
	this.instance_6 = new lib.tail_1("synched",0);
	this.instance_6.setTransform(25,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:125,regY:108.5,rotation:-0.4,x:144.9,y:129.8},0).wait(1).to({rotation:-1,x:139.8,y:130.1},0).wait(1).to({rotation:-1.6,x:135,y:130.5},0).wait(1).to({rotation:-2.2,x:141.3,y:130.6},0).wait(1).to({rotation:-2.8,x:147.5,y:130.5},0).wait(1).to({rotation:-3.4,x:153.7},0).wait(1).to({rotation:-4,x:160},0).wait(1).to({rotation:-4.6},0).wait(1).to({rotation:-5.2},0).wait(1).to({rotation:-5.8},0).wait(1).to({rotation:-6.4},0).wait(1).to({rotation:-7},0).wait(1).to({rotation:-7.6},0).wait(1).to({rotation:-8.2},0).wait(1).to({rotation:-8.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,1,323.9,311);


// symbols:
(lib.body = function() {
	this.initialize(img.body);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,217);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,217);


(lib.left_hand = function() {
	this.initialize(img.left_hand);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,217);


(lib.left_leg = function() {
	this.initialize(img.left_leg);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,217);


(lib.right_hand = function() {
	this.initialize(img.right_hand);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,217);


(lib.right_leg = function() {
	this.initialize(img.right_leg);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,217);


(lib.tail = function() {
	this.initialize(img.tail);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,217);


(lib.tail_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tail();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250,217);


(lib.right_leg_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.right_leg();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250,217);


(lib.right_hand_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.right_hand();

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250,217);


(lib.Null1 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.left_leg_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_3 = new lib.left_leg();

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250,217);


(lib.left_hand_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_4 = new lib.left_hand();

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250,217);


(lib.head_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_5 = new lib.head();

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250,217);


(lib.body_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_6 = new lib.body();

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250,217);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;