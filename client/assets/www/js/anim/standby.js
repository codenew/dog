(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.standby = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// [head.png]
	this.instance = new lib.head_1("synched",0);
	this.instance.setTransform(144,126,0.99,0.99,0,0,0,125,108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:108.5,scaleX:0.99,scaleY:0.99,x:144.2,y:126.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:144.3,y:125.9},0).wait(1).to({scaleX:1,scaleY:1,x:144.5,y:125.5},0).wait(1).to({scaleX:1,scaleY:1,x:144.7,y:125.2},0).wait(1).to({scaleX:1,scaleY:1,x:144.8,y:124.8},0).wait(1).to({scaleX:1,scaleY:1,x:145,y:124.5},0).wait(1).to({scaleX:1,scaleY:1,x:144.8,y:124.9},0).wait(1).to({scaleX:1,scaleY:1,x:144.6,y:125.2},0).wait(1).to({scaleX:1,scaleY:1,x:144.5,y:125.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:144.3,y:125.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:144.2,y:126.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:144,y:126.5},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1));

	// [right_hand.png]
	this.instance_1 = new lib.right_hand_1("synched",0);
	this.instance_1.setTransform(150,129,1,1,29,0,0,125,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:108.5,scaleX:1,scaleY:1,rotation:29.8,x:149.7,y:129.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:30.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:31.5},0).wait(1).to({rotation:32.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:33.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:34},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:34.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:35.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:36.5,y:129.4},0).wait(1).to({rotation:37.3,x:149.6,y:129.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:38.2,x:149.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:39,y:129.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:38.2,y:129.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:37.3,x:149.6},0).wait(1).to({rotation:36.5,x:149.7,y:129.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:35.7,y:129.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:34.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:34},0).wait(1).to({scaleX:1,scaleY:1,rotation:33.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:32.3},0).wait(1).to({rotation:31.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:30.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:29.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:29,x:149.8},0).wait(1));

	// [right_leg.png]
	this.instance_2 = new lib.right_leg_1("synched",0);
	this.instance_2.setTransform(150,129,1,1,0,0,0,125,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:108.5,scaleX:1,scaleY:1,rotation:0.2,y:129.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:1},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:1.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:1.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:1.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:1.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:1.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:2},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:1.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:1.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:1.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:1.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:1.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:1},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0},0).wait(1));

	// [body.png]
	this.instance_3 = new lib.body_1("synched",0);
	this.instance_3.setTransform(150,129,1,1,0,0,0,125,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:108.5,scaleX:1,scaleY:1,y:129.5},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// [left_hand.png]
	this.instance_4 = new lib.left_hand_1("synched",0);
	this.instance_4.setTransform(150,129,1,1,0,0,0,125,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:108.5,scaleX:1,scaleY:1,y:128.7},0).wait(1).to({scaleX:1,scaleY:1,y:127.8},0).wait(1).to({y:127},0).wait(1).to({scaleX:1,scaleY:1,y:126.2},0).wait(1).to({scaleX:1,scaleY:1,y:125.3},0).wait(1).to({scaleX:1,scaleY:1,y:124.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:123.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:122.9},0).wait(1).to({y:122},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:121.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:120.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:119.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:120.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:121.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:122},0).wait(1).to({y:122.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:123.7},0).wait(1).to({scaleX:1,scaleY:1,y:124.5},0).wait(1).to({scaleX:1,scaleY:1,y:125.3},0).wait(1).to({scaleX:1,scaleY:1,y:126.2},0).wait(1).to({scaleX:1,scaleY:1,y:127},0).wait(1).to({y:127.8},0).wait(1).to({scaleX:1,scaleY:1,y:128.7},0).wait(1).to({scaleX:1,scaleY:1,y:129.5},0).wait(1));

	// [left_leg.png]
	this.instance_5 = new lib.left_leg_1("synched",0);
	this.instance_5.setTransform(150,129,1,1,0,0,0,125,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:108.5,scaleX:1,scaleY:1,y:129.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:0,y:129.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.1,y:130},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:130.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-0.2,y:130.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-0.3,y:130.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-0.4,y:130.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-0.5,y:130.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-0.6,y:131},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:131.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-0.7,y:131.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-0.8,y:131.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-0.7,y:131.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-0.6,y:131.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:131},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-0.5,y:130.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-0.4,y:130.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-0.3,y:130.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-0.2,y:130.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-0.1,y:130.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:130},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:0,y:129.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,y:129.6},0).wait(1).to({scaleX:1,scaleY:1,y:129.5},0).wait(1));

	// [tail.png]
	this.instance_6 = new lib.tail_1("synched",0);
	this.instance_6.setTransform(150,129,1,1,0,0,0,125,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:108.5,scaleX:1,scaleY:1,y:129.5},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-26,323.9,311);


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