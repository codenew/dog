(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.pet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// [pet_claw.png]
	this.instance = new lib.pet_claw_1("synched",0);
	this.instance.setTransform(172,149,1,1,0,0,0,172,149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:172.5,regY:149.5,rotation:1,x:172.5,y:149.6},0).wait(1).to({rotation:2},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:3.9},0).wait(1).to({rotation:4.9,x:172.4},0).wait(1).to({rotation:5.9},0).wait(1).to({rotation:6.8},0).wait(1).to({rotation:7.8},0).wait(1).to({rotation:8.8},0).wait(1).to({rotation:9.8,y:149.7},0).wait(1).to({rotation:10.8,y:149.6},0).wait(1).to({rotation:11.7},0).wait(1).to({rotation:12.7,y:149.7},0).wait(1).to({rotation:13.7,x:172.3,y:149.6},0).wait(1).to({rotation:14.7,x:172.4,y:149.7},0).wait(1).to({rotation:15.6,y:149.6},0).wait(1).to({rotation:16.6,y:149.7},0).wait(1).to({rotation:17.6,x:172.3},0).wait(1).to({rotation:18.6},0).wait(1).to({rotation:19.6},0).wait(1).to({rotation:20.5},0).wait(1).to({rotation:21.5},0).wait(1).to({rotation:22.5},0).wait(1).to({rotation:23.5},0).wait(1).to({rotation:24.4},0).wait(1).to({rotation:25.4,x:172.2},0).wait(1).to({rotation:26.4},0).wait(1).to({rotation:27.4},0).wait(1).to({rotation:28.4},0).wait(1).to({rotation:29.3},0).wait(1).to({rotation:30.3},0).wait(1).to({rotation:31.3,x:172.1},0).wait(1).to({rotation:32.3,x:172.2},0).wait(1).to({rotation:33.2,x:172.1},0).wait(1).to({rotation:34.2},0).wait(1).to({rotation:35.2},0).wait(1).to({rotation:36.2},0).wait(1).to({rotation:37.2,y:149.8},0).wait(1).to({rotation:38.1,y:149.7},0).wait(1).to({rotation:39.1},0).wait(1).to({rotation:40.1},0).wait(1).to({rotation:41.1},0).wait(1).to({rotation:42},0).wait(1).to({rotation:43,x:172,y:149.8},0).wait(1).to({rotation:44},0).wait(1).to({rotation:43.1,y:149.7},0).wait(1).to({rotation:42.2,y:149.8},0).wait(1).to({rotation:41.3,y:149.7},0).wait(1).to({rotation:40.4,x:172.1},0).wait(1).to({rotation:39.5,y:149.8},0).wait(1).to({rotation:38.6,y:149.7},0).wait(1).to({rotation:37.7},0).wait(1).to({rotation:36.8},0).wait(1).to({rotation:35.9},0).wait(1).to({rotation:35,y:149.8},0).wait(1).to({rotation:34.1,y:149.7},0).wait(1).to({rotation:33.2,x:172.2},0).wait(1).to({rotation:32.3,x:172.1,y:149.8},0).wait(1).to({rotation:31.4,x:172.2,y:149.7},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:29.6},0).wait(1).to({rotation:28.7,y:149.8},0).wait(1).to({rotation:27.8,y:149.7},0).wait(1).to({rotation:26.9},0).wait(1).to({rotation:26},0).wait(1).to({rotation:25.1,x:172.3},0).wait(1).to({rotation:24.2},0).wait(1).to({rotation:23.3},0).wait(1).to({rotation:22.4},0).wait(1).to({rotation:21.6},0).wait(1).to({rotation:20.7},0).wait(1).to({rotation:19.8},0).wait(1).to({rotation:18.9},0).wait(1).to({rotation:18},0).wait(1).to({rotation:17.1,y:149.6},0).wait(1).to({rotation:16.2,x:172.4,y:149.7},0).wait(1).to({rotation:15.3,x:172.3,y:149.6},0).wait(1).to({rotation:14.4,x:172.4},0).wait(1).to({rotation:13.5,y:149.7},0).wait(1).to({rotation:12.6,y:149.6},0).wait(1).to({rotation:11.7},0).wait(1).to({rotation:10.8},0).wait(1).to({rotation:9.9,y:149.7},0).wait(1).to({rotation:9,y:149.6},0).wait(1).to({rotation:8.1,x:172.5},0).wait(1).to({rotation:7.2,x:172.4},0).wait(1).to({rotation:6.3},0).wait(1).to({rotation:5.4,x:172.5},0).wait(1).to({rotation:4.5,x:172.4},0).wait(1).to({rotation:3.6,x:172.5},0).wait(1).to({rotation:2.7,x:172.4},0).wait(1).to({rotation:1.8,x:172.5,y:149.5},0).wait(1).to({rotation:0.9,y:149.6},0).wait(1).to({rotation:0,y:149.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// [pet.png]
	this.instance_1 = new lib.pet_1_1("synched",0);
	this.instance_1.setTransform(172,149,1,1,0,0,0,172,149);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:172.5,regY:149.5,x:171.4,y:150},0).wait(1).to({x:170.4,y:150.3},0).wait(1).to({x:171.9,y:151.2},0).wait(1).to({x:174,y:148.5},0).wait(1).to({x:177},0).wait(1).to({x:174.2,y:146.2},0).wait(1).to({x:172.1,y:144.7},0).wait(1).to({x:174.1,y:146.2},0).wait(1).to({x:173.4,y:144.5},0).wait(1).to({x:174.2,y:143.2},0).wait(1).to({x:172.5,y:142.1},0).wait(1).to({x:170.5,y:142.8},0).wait(1).to({x:172.3,y:142.3},0).wait(1).to({x:172.9,y:140.2},0).wait(1).to({x:172.6,y:141.8},0).wait(1).to({x:170.3,y:143.5},0).wait(1).to({x:172.3,y:142.5},0).wait(1).to({x:176,y:142.9},0).wait(1).to({x:174.7,y:143.6},0).wait(1).to({x:172.8,y:143.2},0).wait(1).to({x:168.7,y:140.6},0).wait(1).to({x:168.6,y:142},0).wait(1).to({x:169.8,y:143.3},0).wait(1).to({x:168.6,y:141.2},0).wait(1).to({x:171.5,y:144},0).wait(1).to({x:172.5,y:143.8},0).wait(1).to({x:172.1,y:143.1},0).wait(1).to({x:172.4,y:145.1},0).wait(1).to({x:171.1,y:144.8},0).wait(1).to({x:173.2,y:147.7},0).wait(1).to({x:172.7,y:147.5},0).wait(1).to({x:173.6,y:145.7},0).wait(1).to({x:176.3,y:146.5},0).wait(1).to({x:172.5,y:146.6},0).wait(1).to({x:170.4,y:149.5},0).wait(1).to({x:172.4,y:150.8},0).wait(1).to({x:174,y:151.3},0).wait(1).to({x:172,y:152.6},0).wait(1).to({x:168.4,y:153.7},0).wait(1).to({x:168.8,y:156.9},0).wait(1).to({x:169.6,y:155.5},0).wait(1).to({x:170.6,y:154},0).wait(1).to({x:172,y:154.6},0).wait(1).to({x:171.5,y:152},0).wait(1).to({x:171.3,y:154.3},0).wait(1).to({x:171,y:157.5},0).wait(1).to({x:170.5,y:159.1},0).wait(1).to({x:169.4,y:161.3},0).wait(1).to({x:167.6,y:162.2},0).wait(1).to({x:168.5,y:162.8},0).wait(1).to({x:169.5,y:162.1},0).wait(1).to({x:170.8,y:162.5},0).wait(1).to({x:170.7,y:163.4},0).wait(1).to({x:169.7,y:162},0).wait(1).to({x:172.2,y:162.3},0).wait(1).to({x:173.8,y:165.3},0).wait(1).to({x:174.4,y:167.9},0).wait(1).to({x:173.9,y:165.6},0).wait(1).to({x:169.9,y:162.8},0).wait(1).to({x:169.8,y:167},0).wait(1).to({y:168.7},0).wait(1).to({x:171.3,y:168},0).wait(1).to({x:172.5,y:168.5},0).wait(1).to({x:172.2,y:167.9},0).wait(1).to({x:175.3,y:171.6},0).wait(1).to({x:174.3,y:174.2},0).wait(1).to({x:171.3,y:172.4},0).wait(1).to({x:170.7,y:170.2},0).wait(1).to({x:169.5,y:167.1},0).wait(1).to({x:172.6,y:167.9},0).wait(1).to({x:172.5,y:167.1},0).wait(1).to({x:169.7,y:167.9},0).wait(1).to({x:171.8,y:170.4},0).wait(1).to({x:173.8,y:169.4},0).wait(1).to({x:174,y:169.8},0).wait(1).to({x:170.7,y:172.1},0).wait(1).to({y:172.9},0).wait(1).to({x:172.2,y:172.1},0).wait(1).to({x:169.4,y:171.2},0).wait(1).to({x:168.6,y:172.1},0).wait(1).to({x:168.1,y:168.7},0).wait(1).to({x:168.2,y:167.9},0).wait(1).to({x:168.6,y:169.6},0).wait(1).to({x:169,y:167.1},0).wait(1).to({x:172,y:167.5},0).wait(1).to({x:173.9,y:169.5},0).wait(1).to({x:172.6,y:170.7},0).wait(1).to({x:171.4,y:170.8},0).wait(1).to({x:170.6,y:170.4},0).wait(1).to({x:172.5,y:172.1},0).wait(1).to({x:171.8,y:170.2},0).wait(1).to({x:170.3,y:170.3},0).wait(1).to({x:170.1,y:172.5},0).wait(1).to({x:169.9,y:170.9},0).wait(1).to({x:172.9,y:172.2},0).wait(1).to({x:173.2,y:171.6},0).wait(1).to({x:173.3,y:171},0).wait(1).to({x:173.6,y:172.9},0).wait(1).to({x:169.6,y:172.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-13.7,368.7,326.7);


// symbols:
(lib.pet_1 = function() {
	this.initialize(img.pet_1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,345,299);


(lib.pet_claw = function() {
	this.initialize(img.pet_claw);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,345,299);


(lib.pet_claw_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pet_claw();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,345,299);


(lib.pet_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.pet_1();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,345,299);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;