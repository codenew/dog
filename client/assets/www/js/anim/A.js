(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.A = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// 狗待机
	this.instance = new lib.shape108("synched",0);
	this.instance.setTransform(463.5,320.6,0.983,0.983);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},79).wait(30));

	// 狗受伤
	this.instance_1 = new lib.狗受伤();
	this.instance_1.setTransform(490.6,319.5,1,1,0,0,0,23.8,-7.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).wait(30));

	// 瓶子
	this.instance_2 = new lib.瓶子();
	this.instance_2.setTransform(65.3,382.8,1.03,1,0,0,180);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).to({_off:true},14).wait(29));

	// 图层 14
	this.instance_3 = new lib.猫笑();
	this.instance_3.setTransform(51,298.5,1,1,0,0,0,1.3,-1.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81).to({_off:false},0).wait(28));

	// 猫扔
	this.instance_4 = new lib.猫扔();
	this.instance_4.setTransform(33.4,300,1,1,0,0,0,33.3,29);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({_off:true},15).wait(28));

	// 猫攻击
	this.instance_5 = new lib.猫攻击_修正();
	this.instance_5.setTransform(45,301.2,1,1,0,0,0,270,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},66).wait(43));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("Ai7AuQgIgOgMgIIgGABIgLgBQgSgDgIgSQgJgRAPgPQAOgOARAIQACgMAFgKQAIgOAPgDQAUgEAIATQAGAPgCAOIBJAsIAMgCIgFgXIgEgIIgDgBQgWgEAAgUQgBgVAPgJQAOgKAKAEQAKACALARQAHgTAPgGIAbgBQAOAHAAAKQAAAKgFAKQgDAIgJACQgIABACAIIAFAfQAHgFACgHQAGgTATgFIAMgDIAEAAIASAFIAMAJIADgDQAQgLASgIIADgEQAFgUAWABIAFAAQAQACAKAOQAGAHgCAKQgDARgKAKIAJgEQAhgFAFAcIgBAEQARgJANASQAKAOgJAOQgHAKgMgDIgHAAAi8AtIABABAiHBSIgDgaIgEgIIgCgCIgDgEQgGgJAFgMQAHgTAXAHQAPAGADAPQAKgMAMgEAi0A5IgHgLAiqBHIgEgFIgGgJADPBAIgEAFAiqBHIAFAGIABABAhCAMQALAAANAGIAHAFQAMgOASgGQAFgCAEgBIAAAAAgjAXQAFAFABAGIAAAFQgBAFgDAFIAAABIgFAGQgFAEgHgBQgPgBABAPIAAAFIBZgHQgDgJAHgHIACgBIAGgEIAGgDQAVgIAQAMABXAzIAEgKIAAgEIgBgHIgKgQQgFgFgHgCIAFgCQAIgDAEgGQAFgNgGgIACgAMIACgIQADgJAIgFACKAXIATgKIADgBABQAOQAGgJAQAAQAVgBAMAPIADAEABUA2IgBgBIgDgCABXBWQAEgGAAgIQAAgJgFgGIgCgDIADgDACTAvIAGgHIAMgPQgGgDABgKACQAoIABAGIAAADIACgCACQAoIgGgRADFBPIAGgKADVA7IALgCADPBAIAGgFACRAxIgiAlAhABOIACAK");
	this.shape.setTransform(416.9,337.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C26B01").s().p("AiEhDIA+AAIBFgKQALgFAIgIIAgAeIBTBlIgHAEIgUAIQgIACgIAFIgzANIiBASIACg8QACgXgIgZQgIgZgegZIAAAA").cp();
	this.shape_1.setTransform(440.2,355.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#39A530").s().p("AiSBUIAzgSIAhgPIAJgGIABgDIABACIAAgDQAEgGgKgJIgLgNIgkgvIgqgvIAAgCIBiABQA3ABBFAbQBEAcADAJQACAIgFAJQgFAGgrAWQhAAdiyAbIAAAA").cp();
	this.shape_2.setTransform(459.7,355.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAEIgDADIgBgBIgDgDIAHABAAcAAIgBgGIAJABIgGAFIgCAA").cp();
	this.shape_3.setTransform(428.6,342.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#AAAAAA"],[0.443,0.882],2.7,-4.6,-1.5,7.2).s().p("AhGAyIAhglIACgCIAGgHIAMgNQgFgDABgKIABgIQADgLAIgFIAJgDQAggGAEAeIAAAEQAQgJAOASQAKAMgKAOQgGAKgMgDIgHAAIgLACIgGAFIgFAFIgGAKIhLAIIgIgB").cp();
	this.shape_4.setTransform(435.3,341.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AB9hVIgGgQIATgKIADgBQgBAJAGADIgMAQIgJgBABRAjQAOASgQAPIADAIQAFAPgJANIgGADQgbALgVggIhrgCQgFAmgtgLIgFgGQgQgXAVgSIgEgFQgMgWASgRIATgCQAPgCAFAaIB1AFQAOgVAWAAQAMgBAIAKIAAAA").cp();
	this.shape_5.setTransform(418.8,350.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BCBCBC").s().p("AAgADIggAlIgYAAQAEgGAAgIQAAgJgFgGIgCgDIADgDIAEgIIAAgEIgBgHIgKgQQAGgJAQAAQATgBAMAPIADAEIAGARIABAEIAAAD").cp();
	this.shape_6.setTransform(428.2,342.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAEAEA").s().p("AhLASIgCgKIBYgHQgCgHAHgHIACgCIAFgEIArABIAEADIABABIACACQAFAHAAAHQAAAHgFAGIgCABIg8AEIhWgC").cp();
	this.shape_7.setTransform(418.3,344.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFFF","#AAAAAA"],[0.443,0.882],5.6,-2.9,-4.6,4.8).s().p("AALAvIgEgEQgKgPgVABQgPAAgGAJQgGgFgHgCIAGgCQAIgDADgIQAFgNgGgGIADgDQAQgLASgIIADgEQADgUAXABIAFAAQAPACAKAOQAGAHgCAKQgCAPgLAKQgIAFgDALIgBAIIgDABIgTAK").cp();
	this.shape_8.setTransform(429.7,335.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#AAAAAA"],[0.443,0.882],-0.1,-5.5,0.5,5.7).s().p("AAsAeIAAABQgFADgHACQgRAGgMAOIgGgFQgMgGgLAAIgFgZIgEgIIgEgCQgWgEAAgSQAAgVAOgJQAPgJAKADQAJADALAQQAFgSAQgHIAdAAQAOAGAAAKQgBALgEAKQgEAIgJABQgJACACAGIAHAe").cp();
	this.shape_9.setTransform(413,334.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFFF","#AAAAAA"],[0.443,0.882],0.8,-6.1,-0.2,6.6).s().p("ABHgtQAGAJgFAMQgEAIgIAEIgFACQAHACAFAFIAKAOIABAGIAAAFIgEAKIgHgBQgQgLgVAHIgGADIgGAEIgCACQgHAHADAJIhZAHIAAgGQgBgOAPABQAHAAAFgDIAFgGIAAgBQADgGABgEIAAgFQgBgHgFgEQAMgMASgGQAGgCAFgDIAAgBQAHgFAAgHQAGgTATgFIAMgCIAEAAIASAFIAMAI").cp();
	this.shape_10.setTransform(418.2,339.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#834101").s().p("AC0AEIAGgHIANADIgEAAIgPAEAi7gBIAFAEIABABIgRgDIALgC").cp();
	this.shape_11.setTransform(418.6,345.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEDBBA").s().p("ADoAHQgIAIgNAFIhFAJIg+ABIjkAAIg0gHIgTgHQgMgGAAgEIACgGIAQgLIAOgFIAGAJIgCABIgJAEIgHAHIABAAIA4AKIBgAFICPgBIBQgEIAXgGIAHgDIAEgCIAFgEIAAAAQgGgHgKgCIAGgFIAPAEIAQAJIAHAIAA9gWIgrgBIAGgDQAVgIAQAMIAAAAAB+gYIAAgDIACABIgCAC").cp();
	this.shape_12.setTransform(418.8,345.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AC9hDQAeAYAIAaQAIAYgCAYIgCA7Ih9AGQgaACgkgBIjCgSIgsgLQgXgGgPgNIAwhOQAWgfAcgZIAOgMIgCAGQAAAEAMAGIATAHIA0AHIDkAAAC+gLQgIgKgMACQgWgBgOAUIh3gDQgFgagNACIgTACQgSAQAMAVIAEAFQgVASAQAWIAFAGQArALAFgmIBtADQAVAfAbgLIAGgCQAJgOgFgOIgDgIQAQgQgOgQIAAAA").cp();
	this.shape_13.setTransform(407.9,355.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AFmAyIAAABIgCACIgJAHIggAPIg0ASIhnATIiIAIIjDgGIhpgOIgWgGIgSgHQgLgFgfgZIA7hcQAEgKAWgUIBFg2IABABIAHALIgOAFIgQANIgOAMQgcAZgWAfIgwBOQAPANAXAGIAsALIDEASQAkABAYgCIB9gGICDgRIAzgOQAIgEAIgDIAUgHIAHgFIhThlIgggdIgHgKIgQgJIgPgEIALgCIAZAKIAdAXIABACIArAvIAkAvIALANQAKAJgFAGIAAAAAi6hdIgLAFIARACIAdAEIBJAGIBWACIA8gEIADAAIAYAAIAJABIBNgIIAPgEIAEgCIgNgEIAEgFQAKACAGAIIAAABIgFAEIgEACIgHADIgXAGIhQAEIiPABIhggFIg4gKIgBAAIAHgJIAJgEIACgBIAEAF").cp();
	this.shape_14.setTransform(418.5,354.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFFFF","#AAAAAA"],[0.443,0.882],0,-4.1,0.3,4.2).s().p("AAZAeIACAKIhHgGIgDgaIgEgIIgCAAIgDgEQgGgJAFgMQAHgTAXAHQAPAGADAPQAJgMALgEIAMgCQALAAANAGIAHAFQAFAFABAGIAAAFQgBAFgDADIAAABIgFAGQgFAEgHgBQgPgBABAPIAAAF").cp();
	this.shape_15.setTransform(407.8,342.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFFFFF","#AAAAAA"],[0.443,0.882],-4.4,-6.2,4.5,7).s().p("AABBLIgBgBIgDgGIgEgFIgGgJIgHgLQgIgOgMgIIgGABIgLgBQgSgDgIgSQgJgQAPgQQAOgOARAIQACgMAFgKQAIgOAPgDQASgEAIAUQAGAOgCAOIBJAsQgMAEgKAMQgDgPgPgGQgXgGgHASQgFAMAGAJIADAEIACACIAEAIIADAaIgdgE").cp();
	this.shape_16.setTransform(400.2,338.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#996600").s().p("Ag/jIQAPgLAYACIBegHIAgAEQgCANgGAPIgEARQgCA4gfAsIgQAZQgdAmAgAZIADAPIgcBSIAVAUIgFBAIiIAPQAFgTALgPIAIgJQAVgeABglQAAgKgEgHQgGgMgBgMQgBgRgNgMQABgGgCgDIgBgCQgMgpAZghIACgDIgYggIAghpIgEgM").cp();
	this.shape_17.setTransform(63.5,351.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE2B5").s().p("ACyi1IgVBkIAFAYIAQAEIgFAHIgFALIgBAHQAAAggFgHIAPA0IAFAiIAAAiQABAdgQAcQgQAcgEAPIkGgNIABgEIgBgFIAAgCIADgHIACgHQALg5ggg1IAWgmIgngxQgHgVABgWIAAgjIgHgjQgOgugGgnIEwAJIAuAFIAJAV").cp();
	this.shape_18.setTransform(37.3,351.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("ABzjEIAEAMIgfBpIAXAgIgBADQgZAhALApIACACQACADgBAGQAMAMABARQABAMAHAMQAEAHgBAKQgBAlgVAeIgHAJQgLAPgGATICKgPIAGhAIgWgUIAdhSIgEgPQgfgZAcgmIARgZQAegsADg4IADgRQAGgPACgNIgfgEIhgAHQgZgCgPALIAAAAABhitIgJgWIgvgEIkwgKQAGAoAOAuIAHAiIABAkQgCAVAHAWIAnAxIgWAmQAgA1gKA5IgCAHIgDAHIAAABIAAAFIAAAFIEGANQAEgQAQgbQAPgcgBgdIAAgiIgFgiIgOg3QAFAJAAggIABgHIAFgKIAFgHIgRgEIgFgZIAWhjAD2jlQAeAAAVAJQgTA9gIA6QgBAIgEAGQghApgMAvIAVAlIgcBRQAkAcgOAvQgFASgHALIgGAAQhIgBhMAPIjygMQgaABgIgKQgCgLADgKQAQgtgegjQghgnAognQgTgOgJgWQgFgHABgKQACgpgGgrIgCgJQgEgVgKgTQgVgngKgfIArgKQEqgODJAOIAAAA").cp();
	this.shape_19.setTransform(45.5,350.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#333333").ss(1,1,1).p("Ag5hTIADgEQgKgeADghIAAgEQATANgCAaIgBATIAAAGQAdgRAkARQghATgsgMIgeAhIAAADQAlgOAcADIAGAAAgggmIgGAAIgDAAAhhglIABgCIAGgHIADgEQABgTAHgRAhWgmIgBgJIgDABAhsglIgDAQIACgCIAAgBIAFgGIAHgHAhsglQAGgVgDgWAh8gkIAAgZAhvgVIgBABIAAAAIABgBAh0gQIAEgEAh8gYIAAASIAIgKAhwgUIgCAMAhwgUIABAAIAyANAh1BHIAugqIABgDQAGAiAXgBQgRg1gpABIgqAEIgGACQgZAGgSAOQALANAWgGQACAAAAAIIABAUAhogeIA/gIAh8gYIAAgMAjvgSIAHAFQAQANAJAQIADgCIADgBQAEANAHAHAj2geIASgmQATgqABAnQABAOgNAMQgKALgMAFIgFACIAIAJAjjAaIAUgKAgpA7IACAGAh8gGIgRARAjGAnIAIgGAj3gbIgCAAQgnAPggAHIALAFIAKAGIANANQAkgvAXA2Aj7ggIAFACAlAgFIgCgBIgDgBQAggfAlAGIAFAAIAEAFIAFgCIgEgBAERBiIADgSIgCgJQgFgIgNAAIgFAAIgRAAIgKABIgCgHIgFgJQgqgzgpAtQARADAQAJIARAJAkSAxQgDgRgJgNAkSAxIAAAAAkHAzQAQgNAUgMADqA/IAGgKQAJgNAJgFIAUgBQAQAFARAaQATAdgFAmQgCAXgQAAQgvgBANg4ACTAAQgSARgLATIgBADIAAACIARABACKgNIgCgBIgHAKABAgcIAUgNIAMgGIAZgLQgigOgjgIIAAADQgGAYAKAYIACAGIAGgFABUgpIACADIAHgHIADgCABBABQAQAJATgBIAJABIgFgLIgGgBIgBABIgEAFAA0gHIAtAEIABABIADgGIAAgBABlgJIAGgKIAJgRABfgWIAGANABlgJIAAABIADAHABvAQIADgFIgFgBIACAGIAEARABzApIABgGIgBgCIglgEAByALIACgBIANgOABWgmIAJAQACBAwIAFgGAB1AnIAAAAIgBACIAAAAIABgCABzApIABAAAB0ApIABAAIADARAB0AjIABAEIABgDAgpA7QAQgBAXgQQALgJgPgQQAjgPAkAaQAGAEACAKIACAGQAUgIAUABABLAwIAEAaAB0ApIgFAKIAEgKABvAzIAFgKABLAwIgRAHAg2hXIAJgJ");
	this.shape_20.setTransform(84.7,305.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#857D50").s().p("Al0g7IHBg8ICMANQCoAXBHA7IuPCRIA4gXIAGgEIAFgFIAQiU").cp();
	this.shape_21.setTransform(143.6,356.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC9966").s().p("AgNgPIgEAKIAFgKIABAAIAPABQARADAQAJIARAHIhnALIgEgYQAUgIAUABIAAAAAAAgIIAEgGIgEAGAgLgPIADAPIgDgP").cp();
	this.shape_22.setTransform(97.7,311.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00FF00").s().p("AAGAVIgPgJQgRgJgRgDQApgtApAzIAFAJIgmAG").cp();
	this.shape_23.setTransform(102.5,310);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#99CCFF").s().p("AAdACQgUAMgOANIgLgCIAAAAQgDgRgJgLQAigxAXA2IAAAA").cp();
	this.shape_24.setTransform(58.9,308.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AElgPIAWgFIABANIABAHIgkANQhkAVhoACIjSgKIhmgQQgrgGgmgMIAGgbIDhAkQBmALBogGICRgQIABAAIAagFIAGAAQANABAEAHQgEgHgNgBIgGAA").cp();
	this.shape_25.setTransform(80.4,313.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhZjwIgGA1QgOBYAIAtIAQBMQAHAgACAmQADAlACABQABAAAAABQAFAqAJAqQAIAHADAGQAJAVAZACIAKACQAVAAAWgLQAKgQABgTQAGgwgKgvIgCgQQgCg0AUgsQAMgbgKgcQgWhDAFhEIAAgOQACgQgCgQIAmgBQgCAXACAYIACASQAGAsAKApIABALQgOCZgDCcQAFAKAKACQATAEASgJIAIgEQAggdgCgwQAAghACghIABgVQAFhBgFg+QgBgiAKghQALgiAFgiIAEguIAKgKIAVgEQADAZgEAXIgKBNQgKBiABBeIgBAUQgCASgFAQIgKAaQgMAbAEAfIAhASQACAIgHAEQgZAQggAEIgaAGQijAhimgiIgFgIIgNgEQgLgKgIgQIgGgTQgBgTgEgUIgCgJQgVhfgBhdQgBhOgJhPIgHgqQgEgagQgTIA1ALIAxFHIAKCiIAOAMQAHAGAIACIAEABQAtAKAEgwQABgKgDgIQgUhVAGhYQACgWgKgXQgPgjgCgmQgDgnANgmIACgKIAJg2IAhAEAkfi0IAIA4IgogIIAAgXIADgEIAAgEIADgHQANgEANgGIAAAAAE+ipIABABIABAhQgUAIgTAEIAGg1IADgBIASACIAAABQAEAEAGABIAAAA").cp();
	this.shape_26.setTransform(80.5,342.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AA2AbIhrgRQAQgLAVgMIARgKIAEgCIADgBQADANAHAHQAMALAVgFQACAAAAAHIABAUAALAAIAHgGIgHAG").cp();
	this.shape_27.setTransform(63.7,309.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("ACJlJIAGANIh5gMIhYgEIAFgGIA9gHIAIAAIBaAJIADAGIAGgFIAeAGAjdj+IBtAQIAmAEQBgAIBjgFIBqgLIAmgHIABAIIALgBIAQgBIgaAFIgBAAIiRASQhoAGhmgLIjhgmIgGAbQAmAOArAGIBmAQIDSAKQBogCBkgVIAkgNIACABIgEARQgIAGgLADIgHBDIABgBIAWADIATAKIABACIADAdIgDAaQgUANgaAAIgDADIgEABIgVC8IgQCWIgFAFIgGAEIg4AXIgmAKQhBAQhGgFIiUgEQgrgEgkgYIgQg4QgPidgViZIg1gDQgEgTADgUIAFgaIASgJIAUgFIgGgpQgFghgcgUIgHgxIAdgPIAlgNIACgBIAKAHIg4AXIgDACIACAAIBRATIABAAIAKACAhSlMIhnAKIgEABIgHgFQA4gNA6gEIAAALAhYi0IgigEIgIA2IgDAKQgMAmACAnQADAmAPAhQAJAXgBAYQgGBYAUBVQACAIgBAKQgEAwgtgKIgDgBQgIgCgIgGIgOgMIgKiiIgxlHIg1gLQARATAEAaIAGAqQAKBPABBMQAABfAVBfIACAJQAEAUACATIAFATQAIAQALAKIANAEIAGAIQClAiCkghIAagGQAfgEAZgQQAHgEgBgIIgigSQgDgfALgbIAKgaQAGgQACgSIAAgUQgBhgAKhgIALhNQADgXgCgZIgWAEIgKAKIgEAuQgFAigLAiQgKAhACAgQAEBAgFBBIgBAVQgCAhABAhQABAwggAdIgHAEQgTAJgTgEQgKgCgFgKQADicAOiZIgBgLQgKgpgGgsIgCgSQgCgYADgXIgnABQADAQgCAQIgBAOQgFBEAXBBQAJAcgMAbQgTAuABA0IACAQQAKAvgFAwQgCATgKAQQgVALgWAAIgKgCQgYgCgKgVQgDgGgHgHQgJgqgFgqQAAgBgCAAQgCgBgCglQgDgmgHggIgPhOQgIgrANhYIAHg1AjdiAIAEAuQADAUAHARQAZA6gPBGQAHASAEATQANBDgJBIIAIASQAZAaAfgQIAJgZIgEgHQgGgpgJgqQgIglAHgkQAFgegKgdIgOgrQgKglAFgkIAOg+IAFgzIhjgPIAMBKIAAACAkeh4QgOAGgNAEIgCAHIAAAEIgDAEIAAAXIAoAIIgIg4AhUhyQACADgBAHIADB1QAAAfAFAEQAFAEgCAWQgCAWAEAaQAKA8AHA6QADAXAQASQAZAcAlgQQAMgFABgNQAFgkgDglIgEg2QgCg1ARgzIACgOQAAgzgTg1QgFgOAEgMQAGgOABgQQABgMgCgOIgCgJIgBgLIh5gJIgCBHAEUjEIgWAFQAEAegDAfIgQBQIgBADIgCAQIgEC4IgBAEQgRAwgHA1IABABIABABIAXAMIAsnUADGioQACgKAHgKIhuAMQAAAYADAWQADAkAJAiIADAVQABCMgQCOIAAAJQAEATgDARIAGAIQATACARgLIAIgLQAIgRADgTQAHgrADgrIAAh4QgCgYAFgVQALg7AHg8IAAgCIAFgkAE+htQgGgBgDgEIgBgBIgSgCIgDABIgGA1QAUgEATgIIgBghIgBgB").cp();
	this.shape_28.setTransform(80.4,336.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF99FF").s().p("ABeADIgQAHIAQgHIAEAbQhiAFhhgIIAugpIAAgCQAGAfAYAAIABAFIgBgFQAPgBAWgPQAMgIgRgRQAmgOAjAZQAGAFADAJIABAE").cp();
	this.shape_29.setTransform(82.7,310.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF9900").s().p("AAAAgIglgEIgBgTQAAgJgCABQgWAFgLgLQASgOAZgGIAGgBIAogFQApAAARAzQgXAAgGgfIgBACIgsAp").cp();
	this.shape_30.setTransform(73,309.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("Ag+k2IAyANIgygNIgBAAIABgCIgBACIAAgBIABgBIACgCIAAgBIBZAEIB5AMIAAAAIgDAGIgBAAIgtgEIAtAEIABAAIADgGIAAAAIAAAAIAAAAIADAIIgDgIIAAAAIAcAEIgNAQIgCACIACgCIANgQIACAAIAQAFIBGAVQAWAGATAKQgJAFgJAMIgSAEIgFgJQgqg0gpAvIgRgCIAAgBIABgEQALgTASgSQgSASgLATIgBAEIAAABIgBAAIgFAKIAEgKQgUAAgUAHIgCgGQgCgJgGgFQgkgZglAOQARARgNAIQgXARgQABQgPg1gpAAIgqAFIgGABQgZAGgSAOQgHgHgEgMIgDAAIgDACQgJgSgQgNIAFgBIBngKIAAASIAIgJIgIAJIAAgSQAEAAAEAJIACAIIADgMACOkdIAEgGIABgCIAGACIAFANIgJgCQgTACgQgKQAQAKATgCIAJACIgFgNIgGgCIgBACIgEAGACgkRIADgEIgFgBIACAFIgCgFIAFABIgDAEIAEASIgEgSACkj4IABgGIgBgBIglgEIAlAEIABABIgBAGIABAAIgBAAAhLkpIgRAUIARgUAkykEIA4gXIANANQAJANADASIhRgTIAAgCAjWhvIAAgCIgMhKIBjAPIgGAzIgNA+QgGAkALAjIAOAtQAKAdgGAeQgHAkAIAlQAKAqAFApIAEAHIgJAZQgfAQgYgaIgIgSQAIhIgNhDQgDgTgHgSQAOhGgYg6QgIgRgCgUIgEguAhNhhIAChHIB4AJIABALIACAJQACAOgBAMQgBAQgFAOQgFAMAGAOQASA1AAAzIgCAOQgRAzACA1IAEA2QAEAlgFAkQgCANgMAFQgkAQgZgcQgQgSgDgXQgHg6gKg8QgEgaACgWQACgWgFgEQgFgEgBgfIgDh1QABgHgBgDIAAAAAEbizIgtHUIgXgMIgBgBIAAgBQAHg1ARgwIABgEIAEi4IABgQIABgDIAQhQQAEgfgFgeIAXgFACmj5IAAgBIgBACIAAAAIABgBIgBABIAAAAIABgCIAAABAClj+IABAEIABgDIgBADIgBgEADNiXIgFAkIAAACQgHA8gMA5QgEAXABAYIAAB4QgDArgHArQgDATgHARIgJALQgQALgTgCIgHgIQADgRgDgTIgBgJQAQiOgBiMIgCgVQgJgigEgkQgCgWAAgYIBtgMQgGAKgCAKIAAAAACgjuIAFgKIgFAK").cp();
	this.shape_31.setTransform(79.8,334.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AjJgtIAAgLIAQgBIgDAPIADgPIALgBIALgBIAuAAIg/AIIgFAGIgBABIgCACIgBABIABABIgCALIACgLIABAAIgDALIgDgHIAEgFIgEAFQgDgJgFAAIAAAAAi0gzIAGgHIgGAHADGA7IgBgJIADAKIgCgBACkAgIgGALIgLABIgBgIIASgEADKANIgUACQgTgKgXgFIhFgUIgRgFIgBAAIAHgJIABAAIABAAIB7AmIARAJAAegoIAeAGIgHAJIgcgEIgBAAIgGgNIAMACIgFALIAFgLAgKgxIgGAFIgDgFIAJAA").cp();
	this.shape_32.setTransform(92.3,307.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#99CCCC").s().p("Ag5hTIADgEQgKgeADghIAAgEQATANgCAaIgBATIAAAGQAdgRAkARQghATgsgMIAAAAAj7ggIAEAFIgCAAQgnAPggAHQAggHAngPIACAAIAIAJIAHAFQAQANAJAQIgUAKQgXg2gkAvIgNgNIgKgGIgLgFIgCgBIgDgBQAggfAlAGIAFAAAjygdIgEgBIASgmQATgqABAnQABAOgNAMQgKALgMAFIAAAAAECAjIAUgBQAQAFARAaQATAdgFAmQgCAXgQAAQgvgBANg4IADgSIgCgJIgBgNIgWAFIgRAAIAGgKQAJgNAJgFIAAAAABAgcIgIgBQgKgYAGgYIAAgDQAjAIAiAOIgZALIgMAGIgUANAg2hXIAJgJIgJAJ").cp();
	this.shape_33.setTransform(84.7,305.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(162,168,199,0.549)").ss(0.1,1,1).p("AFegBIAAADAldgBIAAAD");
	this.shape_34.setTransform(346,317.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(162,169,200,0.451)").ss(0.1,1,1).p("AjqALIgogWAETAFIAAgGAgEgBIAAAO");
	this.shape_35.setTransform(503.5,211.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9C9C9C").s().p("AC8AFQjTBTiEAwIggAMIAYkdQB0AADrgKIAACY").cp();
	this.shape_36.setTransform(238.5,242.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9F9B5").s().p("ACFO7IAAA4IkNAAIAFxOIAAkjIAAgyIAAhXIAAgkIAAiaIAAkSQA1gTAwgGQBYgLBLAkIAAAIIAAUTIAEgJIgEAKIAACyIAAHEACEFHQgEAMAEAAIAAgM").cp();
	this.shape_37.setTransform(270.5,298.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#80800B").s().p("AAaGfIgxFEIAAiyIAEgJIgEAIIAA0SIAoBlIAJgKIAAQmAgXIzIAAANQgEAAAEgNIAAAA").cp();
	this.shape_38.setTransform(286.3,275.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EEE3F4").s().p("ADS6MIALMqQALUDgeTlIgSAHImXAAMAAAg0ZIGxAA").cp();
	this.shape_39.setTransform(-6.4,165.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B6B183").s().p("AWXk/IgFRPMgsoAAAIAAqgIGaAAIARAAICCgaIB2gXMAiKgF+AHInZIAbAFIgSAFIPGjEIAAAxIvwCpIAhggAQ+qMQCEgwDVhTIAAAkIlZBf").cp();
	this.shape_40.setTransform(114.2,321.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#857D50").s().p("ADSh7IPvipIAAEjMgiJAF+QI9h5JUleIAJghAzAGnICCgTIiCAaIAAgHANolOIFZhfIAABYIvGDEIASgFII8itIAfgL").cp();
	this.shape_41.setTransform(135.5,289.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E4E8F3").s().p("AAAObIAEmrQADmqhHvPIBpgRQAxPagxMaIggAgIgJAh").cp();
	this.shape_42.setTransform(155.6,188.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AkCoUQDiCuEgAuIgOFnIACDIQADCTAMCLIn6gsIgLv9").cp();
	this.shape_43.setTransform(79.2,61.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CCCCCC").s().p("Ag4GqQgLiLgEiTIgBjGIANloIB4gTIgMB3IgNEEIAFDGQAICZAYCRIiBgM").cp();
	this.shape_44.setTransform(110.9,72.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9BAAD2").s().p("AkbN9IgbgFQAxsagxvaQDkDEDECAQBaA6AhAsQBFFHAFI9IgYEeIo6Ct").cp();
	this.shape_45.setTransform(190.9,185.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#93920D").s().p("ADLIUIq6gBIjcAAIAAwmQLLAKLMAUIgFQJIn8AA").cp();
	this.shape_46.setTransform(360.6,263.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7CB64E").s().p("A2aGfIAAg4IWisCIAjgDISSACIDeCdIAAKeMgs1AAA").cp();
	this.shape_47.setTransform(427.4,358.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#578035").s().p("AriGEIAAnDIAzlEIDcABIK6AAIAAAFIAAgFIH8ABIgjADI2iMCAnTmCIAAAFIAAgF").cp();
	this.shape_48.setTransform(357.8,355.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F3F27A").s().p("AJJIMIyQgCIAFwJIHdgGIDkACIEYgIICyACIAAQV").cp();
	this.shape_49.setTransform(490.3,264.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9ACFAD").s().p("AthIqIgJAKIgqhmIAAgIQhKgkhaALQgxAGg0ATIAAESQjsAKh1AAQgFpAhElEQgigthag6QA4gWA3giQB/hQCJhEQCKhECNg7QBxgxBugnIA1gTQBXgeBfgEQAMAbARAaQDgFkOsE3QB/AoCNApIBZAaIgNAAIAMADIMiEOIAADTIiygCIAAgIIAAAIIkYAIIjmgCIgogYIAoAYIndAGQrLgUrNgKIAAAAAT6I0IAAAQIAAgQ").cp();
	this.shape_50.setTransform(375.6,154.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EFEFEF").s().p("AAFABIgKgBIALAAIgBAB").cp();
	this.shape_51.setTransform(468.1,164.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#CBAF78","#FCEAC7"],[0,0.263],-3.4,-113.8,4,97.3).s().p("AhtMtIAAwVIAAjTIAAktIAAjhIDbA2IAAddIjbid").cp();
	this.shape_52.setTransform(559.9,235.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#79BF8D").s().p("ASYInIsikOIACgEIhZgZQiNgqiAgqQurk0jhllQgQgagNgbIBpAEQB2ALBvAmIBHAcQCPA8CPA5IEYBuIAEABIEWBtQCKA1CMAyIEWBlQCKA0CSAxQCUAyBuAbIAAEt").cp();
	this.shape_53.setTransform(431.2,136.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A87611").s().p("ABuBtIjbg2IAAijIDbAqIAACv").cp();
	this.shape_54.setTransform(559.9,133.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D2801C").s().p("AARhMIEllGIAAMlIjegqImNhEQA0hCB5iGIAZgbIB+iNIACgB").cp();
	this.shape_55.setTransform(539.9,86);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#68B77B").s().p("AqvgzIgBgCQA8gZA7giIESidQAkgUAkgSQBagtBcgjIBAgWQBfgcBigBQARAaAZAZQAqArA+AlQA3AiBHAdIgZAcQh5CFg0BDIGPBBIAACmIAADhQhugbiUgyQiSgxiKg0IkUhnQiMgyiKg1IkYhr").cp();
	this.shape_56.setTransform(479.9,117.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4FA664").s().p("AjHhgIBGACQCYALCXAgIAbAGIgCABIiACNQhHgeg1ghQg+gkgqgqQgZgZgRgbIAAAA").cp();
	this.shape_57.setTransform(521.6,82.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#C1CEF2","#7C9EE2"],[0,0.69],0,65.5,0,-106.3).s().p("A4nKOQjGiAjkjDIhrAQIAHk4IAfqwMBBTAAAIAAHjIklFEIgbgGQiXggiZgLIhHgCQhiACheAbIhDAXQhcAihaAuQgkASgkAUIkRCcQg8Aig8AZIgCABIkYhuQiQg5iNg8IhHgbQhugmh3gMIhpgDQheAEhXAeIg2ATQhuAnhxAxQiNA7iJBEQiKBEh/BQQg3Aig3AWIAAAA").cp();
	this.shape_58.setTransform(360,62.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BD92D8").s().p("ALDSGQpWFgo7B6Ih2AXIiCASQAezlgL0DIgLsqIF/AAIAEBtIALQAIH6ArICDAMQgYiRgJiZIgEjIIAMkEIAMh3IAAgLQj7hQj5iMQhFgmhEgqIPkAAIgfKyIgHE5QBJPPgDGqIgEGr").cp();
	this.shape_59.setTransform(84.9,164.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999999").s().p("ADGCkQkggujhisIgEhtIACAAQBEAqBEAmQD5CJD8BQIAAAMIh6AS").cp();
	this.shape_60.setTransform(85,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(109));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-2.6,599.9,402.7);


// symbols:


















(lib.元件8 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.1,1,1).p("AgjANIgLADAgZAIIAtgOIAGgCIAVgHAgjANIAKgF");
	this.shape.setTransform(-12.4,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#217E7D").s().p("ABkCnIgvAQQgbgDgYgRQgVgRABgbQASgngKgZQgMgagKgJIgcgVQgRgNgRgUQgMgrASgiQATgiAPgRQAPgRAPgDQATAFgMAWQgnAZgPArQgJAbASASQAnAhAZAqQAaAsgQAnQgOAnBmAMIAAAA").cp();
	this.shape_1.setTransform(-20.3,-3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAcC7IALgFIgCAHIgJgCIgkgQQgRgJgKgQQgJgQALgeQALgegOgYQgVgegZgQQgagSgHgZQgIgaANgjQAMgjAQgSIAXgWQAHgFANgDQAXgDgJAhQgvAlgKAzQAFAXANAIQAOAIAVAaQAUAXAFAJIAGAPQACAFAGAWQAFAVgLAZQgJAhBhAPIAbANIghgLQhmgMAQgmQAOgngYgsQgbgqgngiQgSgSAJgaQAPgsAngZQAMgWgTgEQgPACgPASQgPARgTAiQgSAiAMAqQARAVARANIAcAUQAKAKAMAZQALAagTAnQgBAbAXARQAWARAbACIgLAFABWCmIAGgCIgGAC").cp();
	this.shape_2.setTransform(-18.9,-3.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.9,-22.4,23.9,37.9);


(lib.元件7 = function() {
	this.initialize();

	// 图层 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.1,1,1).p("AgNgZIAeA0AASAeIACAFAgRgiIgCAAAgNgZIgEgJAASAeIgBgD");
	this.shape_3.setTransform(-12.6,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#217E7D").s().p("AA+BxIAhA2IhGgRQgwgMgYgcQgYgdACgMQgEgWAEgTIAKgwQAGgfgHgSIgMgfIgOgZQgJgNACgSQACgTAXARQAKAGAFAJIAWAqQAEANgBAWQgCAVgGAVQgLArALAuQADAMAKANQAIAIAKAGQAfARAkgIIAAAA").cp();
	this.shape_4.setTransform(-20.3,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABAByIgEgJIAEAJQglAIgegRQgLgGgHgIQgLgNgDgMQgLguAMgrQAFgVACgVQACgWgFgNIgWgqQgEgJgLgGQgWgRgCATQgDASAJANIAPAZIAMAfQAGASgFAfIgKAwQgFATAEAWQgCAMAZAdQAYAcAvAMIBGARIAFACIgEABIgBgDIABADIgQADQgtAAglgXIgpgZQgYgPgLghIgDgNQgDgfALgdQAKgZgEgdIgEgYIgHgTIgUgqQgHgPAHgTQANgKAPAKIAWATIAYAiQAPAZgLAwQgLAtABA4QANAfAVAHIAoAHIANABIACAAIAJAGIgDADIgCAA").cp();
	this.shape_5.setTransform(-20.5,-1.7);

	this.addChild(this.shape_5,this.shape_4,this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.7,-19.2,20.4,35.1);


(lib.元件6 = function() {
	this.initialize();

	// 图层 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.1,1,1).p("AAIgPIgJAWAAIgPIAAgBIAAAAAgEAMIADgFAgEAMIgDAF");
	this.shape_6.setTransform(-11.1,13.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#217E7D").s().p("ABhBQIgLAYIg1gNIglgSIhFgsQgSgOgDgVQgEgQAHgSQAHgSAIgJIAZgcIAKgIIAPACQAIABAAAHQAAAGgEAHIgYAWQgMALgBAYQgCAZAGAJIALALICNA6").cp();
	this.shape_7.setTransform(-20,4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABeBPIAAAAQAFADAFACIgKgEIAAgBIAAABIiNg6IgLgLQgGgIACgZQABgZAMgKIAYgXQAEgGAAgGQAAgHgIgCIgPgBIgKAIIgZAcQgIAJgHASQgHARAEARQADAUASAOIBFAsIAlASIA1ANIAIACIgGAEIgFgBIg5gOIgagLIhEgoIgSgUQgNgRgBgTQgBgVAIgSQAIgSAJgIIASgTIARgMQAKgEAMAJQAMAJgEAIIgKASQgHAKgOALIgKATIgDANIAAAKIACAFQADAGALAHICIBCABQBtIADgFIgDAF").cp();
	this.shape_8.setTransform(-19.7,4.2);

	this.addChild(this.shape_8,this.shape_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.1,-6.8,20.9,22.5);


(lib.元件5 = function() {
	this.initialize();

	// 图层 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(0.1,1,1).p("AAOgNQgJANgNAMAgOASIAGgGAAOgNIABgD");
	this.shape_9.setTransform(-11.7,13.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#217E7D").s().p("AAuA7QgJAOgOANQgXgNgQgUIgMgOIgKgQIgGgPQgCgIAEgWQAEgYAOgRQANgRAOgEQARgEgKAYIgUAdQgfArAnAaQAhAZAPAAIAAAA").cp();
	this.shape_10.setTransform(-14.9,6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAxA4IADACIgEACIABgEIgBAEQgPAAghgZQgngaAfgrIAUgdQAKgYgRAEQgOAEgNARQgOARgEAYQgEAVACAJIAGAPIAKAQIAMAOQAQAUAXANIAAAAIABAEIgIABIAHgFIgHAFQgHgBgJgIIgkgnIgLgSIgFgRQgCgJACgPQABgPALgUQALgUATgPQAUgKAIAIQAIAHgNAZIgTAbQgYAfAcAaQAcAVAVAGIAAAA").cp();
	this.shape_11.setTransform(-15.1,5.9);

	this.addChild(this.shape_11,this.shape_10,this.shape_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.3,-3.2,10.5,18.5);


(lib.元件4 = function() {
	this.initialize();

	// 图层 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVgDQgVgEgaAHIgkANQgJACgMAJQArgyAsADIAbADIABATIgLgCAAigBQAOABABgGQAAgHAHACIAQALQAXAWgXgLQgSgJgUgDIAAAA").cp();
	this.shape_12.setTransform(0,-0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABTgCIATAiIgQgOQgGgFgIgDIgigJQgSgBgRABQgXABgWAHQgWAHgRAMQgRAMgCgCQgDgBAJgQQAIgRAZgRQAQgNAUgGIApgFIAjAKQAVAJALAQIAAAAAAVgJIALACIgBgTIgbgDQgsgDgrAyQAMgJAJgCIAjgLQAbgJAVAEIAAAAAAigHQAUAFARAHQAXALgWgVIgQgMQgHgCgBAHQAAAGgOgBIAAAA").cp();

	this.addChild(this.shape_13,this.shape_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.1,-3.8,20.5,7.8);


(lib.元件3 = function() {
	this.initialize();

	// 图层 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABYAaIAKgBIABAGQgVALgcgBIgCAAIgPABIA3gQABlAUIAWgUIAMAFIAJAQQgaABgLAGIgGgIACLgjIAJAAQAcACALAaIAGASIgBAMIgrgCIgCgIIgEgHIgCgFQgFgGgHAAIAJgbIABgDAiEgrIAGAdIgCABIgKAOQgHALAAAQIgvAAIAEgTIALgbQAIgQASgGIATgFIAAACAhaAcIgEAOIgrgLQgFgMAJgMIAJgNIAKAPIAIAJQAHAGAJAEIAAAAAgSArQgiAFgjgEIABgFIAFgIIA/AM").cp();
	this.shape_14.setTransform(-1.2,-2.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#33CCCC").s().p("ACugDIgBAAIAAADQgDAQALAQIAYAeIBMAYIg4AGQBAAOgVAJQgVAJgpgDIgagBIACgMIgCgRQgCgOgJgHQgKgJgMgDIg3gTQgIgDAOAIQAOAHgCADQgCADABAMQAAALgKANQgKAMgPAIQggAQggAEIAIgDIAMgIQAGgGgCgKQgCgKgHgCQgbgDgfAEIgEADIgGAHIAAAEIADAJQAGAJALAFIgEAAIgtgEQgVgEgSgIQgMgHgIgMIgHgSIgFggIATgPIg6AUQgOAGgHAMQgHAOgEAQIgEAZIg4AGIAagcIgdgCIgDgDIAFgDIABgBQAngdAFghIABgBQABgJgBgIIgBgPIABAAIgBgbIgBABIAAgFIABgEIAFgRIgBgKIgRgWIgBgZIApACIA5ASQAzgkBDgFQA+gEA7AbIACACQAAAEADACQAYAEAXgLQAYgNAXgEIAYABQgKAsgdAPQADASgCASIgEAZ").cp();
	this.shape_15.setTransform(0.6,-12.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AD9iWIgJAQIgMA1IgdAlIgHArIAEAFQAJAUATANQAgAXApAEIAQAJIAjANIg8AHQAyAUgGAFIgmANIhFAMIgXABQgZgBgSgGQgogIgfAPQgLAFgKAIIAAABIgcAAIgxgKIgeALIgbAAIg9gPQgygLg0ALIgLADQgaAJhYgIIBMgjIhGgKIAegHQAcgPARgXQALgOAGgRIAGgUIAEgyIgfheQABgDADABQAvgMAuATIAeAJQAMgEAMgFQAngSAogIIBHACQAjAFAfARQARAIASAAQAMgHAUgDIAtgNQAbgIAVAHIAAAAACzgIIAFgZQACgSgDgSQAdgPAJgsIgYgBQgWAEgYANQgXALgYgEQgDgCgBgEIgBgCQg8gbg+AEQhCAFgzAkIg5gSIgpgCIABAZIAQAWIACAKIgGARIAAAEIAAAFIAAgBIACAbIgBAAIABAPQABAIgBAJIgBABQgGAhgmAdIgCABIgEADIADADIAdACIgaAcIA4gGIAEgZQADgQAIgOQAHgMAOgGIA6gUIgTAPIAFAgIAHASQAHAMANAHQARAIAVAEIAtAEIAFAAQgLgFgGgJIgEgJIABgEIAFgHIAFgDQAcgEAdADQAHACADAKQACAKgHAGIgMAIIgHADQAggEAfgQQAQgIAKgMQAJgNAAgLQAAgMACgDQABgDgOgHQgOgIAJADIA3ATQALADAKAJQAKAHACAOIABARIgBAMIAaABQApADAVgJQAUgJg/gOIA3gGIhLgYIgZgeQgKgQACgPIABgEIAAAAABLB2Ig3AQIAPgBIACAAQAcABAVgLIgBgGIgKABAgfCHIg/gMIgFAIIgBAFQAjAEAigFIAAAAAhmB4QgJgEgHgGIgIgJIgLgRIgJAPQgIAMAFAMIAqALIAFgOAiQAvIAAgCIgUAFQgSAGgIAQIgLAdIgDATIAvAAQgBgQAHgLIALgQIABgBIgFgdAB+A3IgBADIgJAbQAHAAAFAIIACAFIAEAHIACAIIArACIABgMIgGgUQgLgagcgCIgJAAABYBwIAGAIQALgGAagBIgJgQIgMgFIgWAU").cp();
	this.shape_16.setTransform(0,-12.1);

	this.addChild(this.shape_16,this.shape_15,this.shape_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.2,-28.1,70.5,32);


(lib.元件2 = function() {
	this.initialize();

	// 图层 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#217E7D").s().p("AgwicIABAAIAWgPIAgAOIAGABQgCAQACAOIAAADIg2ACIAAgEQAAgMgEgLIgDgIACQgHIAKAHIAJAPQAKA4gbAqIgMARIgPAPQBWgIAhAJQAGALgTADQhbAMhDgLQAfgEAXglQAYglgGgeQgGgfgEgBIgQgSIALgKQAKgHAKAHIAAAAAiLBnIAAADIAIARIACACIABABQAVAdAjAJIg0AIIhygKQAIgXBjAJIgIgSQgFgMgCABIgIgMQgEgMgOgUIgBgBQgHgNAAgPIABgSQAAgIAEgEIAFgFQADgCAFgCQAPgFAMAVIgEAIIgFAOQgHAXAHAXIAEAMIABAA").cp();
	this.shape_17.setTransform(0.6,9.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#29A09F").s().p("AghiPIA2gCIABgBQAHA9AoAsIAtApIAHABQAGAMAEAYQAFAXgTAdQgUAdggAIQgMAAABgSQACggAFgfIADgOIAHgSIACgIIgBgFIgJgBQghA1AMBDIADAHIAEANIAJAIIgtgBIgGgWIgGhrIgBgDIgDAAIgCCEIglgBQAEgJgBgNIgGhFQgDgXgIgWQgEgJgKADIAPB8QgvgMgSgtQgGgQABgTIAPgjIAQgSIAyhOQAMgXgBgYIAAAAAiDBRIABADIgBAAIAAgD").cp();
	this.shape_18.setTransform(-0.1,11.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ACQgYQgLgHgKAHIgKAMIAQAQQADACAGAeQAGAegXAlQgYAlgfAEQBDALBcgLQASgEgGgLQghgJhWAJIAPgQIAMgRQAbgqgJg2IgJgPIgKgJAgwitIADAIQADAMABAMIAAADQAAAYgLAXIgzBOIgPARIgPAlQgCATAGAPQASAtAvAMIgPh7QALgEAEAJQAIAWADAXIAGBFQAAANgDAJIAlABIACiDIAEgBIACADIAFBrIAEAWIAtABIgJgHIgDgNIgDgIQgNhCAig3IAJAAIABAIIgCAHIgHASIgEAPQgFAegBAgQgBASAMABQAggIATgdQATgegEgXQgFgXgGgNIgGgCIgtgoQgpgsgHg8IAAAAIgBgCQgBgPABgPIgFgBIAUAAIAAAwQAAAFAFAQQAEAQAUAVIApAvQAIAJAAgJQADgMAIgFIACgBIAFgCQAWgDASAPIADADIAEAFIACAEQANAhgHAoQgFAqgbAUIBegGQAKABAHAKIgCAPQgBAKgTAJQheARhOgNQgNAMgRAAQgSACgPgHQgbAJgbgJIgTgCIguAEIgIAAQhFgDg0gNQgOgJALgOQACgUBhAJIgHgLQgEgJgFgHIgWgkQgNggAMgaQACgKAWgNQATgCATAMIAHAEIAJgNIAphBQAOgVgCgkIAAgBIgDgbIgEgBIATAAAiLBZIAAAAIgBgCIAAgBIgEgMQgHgXAGgXIAFgOIAFgHQgMgUgQAGQgFABgDADIgFADQgDAEAAAHIgBATQgBAOAIANIABABQANAUAEAMIAIAMQADAAAEAMIAJARQhjgJgIAXIBxAKIA1gIQgjgIgWgeIgBgBIgBgCIgIgRAh6gJIgCAAIABABIABgB").cp();
	this.shape_19.setTransform(0.6,11.2);

	this.addChild(this.shape_19,this.shape_18,this.shape_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-7.6,51.5,36.4);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0000").ss(0.1,1,1).p("AgUgjQAMAQABADQANAQAKAXIADAGIAAABIACAG");
	this.shape_20.setTransform(-11.4,14.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#217E7D").s().p("AAfBRQgUgGgVgRIgDgEQgOgOgLgVIgBgCQgJgMAAgGIgCgPIAAgMIACgLIAFgOIANgRQAIgJAJgBIAVABQARABANAKIAKAMQALAdgVADQgJgJgFgWIgYgBQgRAGgEAOQgEAOAAAOQAAALAIAKIAMAPQAFAGABAAIABAAIAAAAQAPARALAYIADAG").cp();
	this.shape_21.setTransform(-12.5,9.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AACAkIAAAAIgBAAQgCAAgFgGIgMgPQgHgKAAgLQgBgOAFgOQAEgOARgGIAYABQAEAWAKAJQAUgDgLgdIgJgMQgOgKgRgBIgVgBQgJABgIAJIgMARIgFAOIgDALIAAAMIACAOQAAAHAJAMIACACQAKAVAOAOIAEAEQAVARATAGIADACIgDAAQgNAAgdgRQgYgUgIgRIgLgYQgDgHAAgMIACgWIAFgPIAKgUQAFgHASgHIAjgBQARAGAKAIQAKAJACAJQADAOgBAGQgBAHgIAHQgIAGgLgKQgLgKgBgQQgagFgGAdQgHAaAMAPQAKAQABADIAAAAAAeBTIAAACIAAgC").cp();
	this.shape_22.setTransform(-12.5,9.1);

	this.addChild(this.shape_22,this.shape_21,this.shape_20);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.4,0.6,11.8,17.6);


(lib.元件611 = function() {
	this.initialize();

	// 图层 1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA3gtQAHABAHAIIALAMQAGAPADAOIAEAlIhPgWIABgQQABgPAJgPQAFgMANgFIAMgCAgWgmQAKAJgBAaIgGAYIhJAZQAAgZALgWIAJgTQAJgPAKgDIAPgFQAHgBAJAGIAAAA").cp();
	this.shape_23.setTransform(0.2,-8.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAngvQATgKARAQQAOAOAEATQAKAggGAaIgEgBIgpgOIgIABIgEACQgRAFgIgKIgFgGIgBgIIAFgiQAFgWAUgKIAAAAAgWgmQgJgGgHACIgPAFQgKADgJAOIgJATQgLAWAAAZIBJgZIAGgYQABgZgKgKIAAAAAA3gsIgMABQgNAGgFALQgJAPgBAPIgBAQIBPAWIgEglQgDgNgGgPIgLgNQgHgHgHgBIAAAAAgMgeIADAWQABAUgJAUQgNAJgOgCIgEgEIgzARIACgWIAIgfQAMgjAigMQAWgDAJAVIAAAA").cp();
	this.shape_24.setTransform(0.2,-8.6);

	this.addChild(this.shape_24,this.shape_23);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-13.9,20,10.6);


(lib.元件511 = function() {
	this.initialize();

	// 图层 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF0000").ss(0.1,1,1).p("Ag/gDIAxgDIBHAGAhGgEIAHABABBAFIgIgFABBAFIAIADAhGgEQgCgBABgC");
	this.shape_25.setTransform(0.1,7.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("ABCBUIgIgFIAIAFIgBABIgBAAIgDAAIgDAAIgBgCIAAgDIABgBIARgXIAEgKIABgBIAAgBIABgCIABgBIAFgVQAFgVgPgUIgGgGIAAgDIAAgBQgNgRgTgLIgagNIgKgCQglgHgfAVIgLAKQgJANgDAOQgDARAEAPIAGASIAOAhIABABIADAGQACADgBAEIAAAAIgHgBIgBgBIAAgBIAAgBIgOgbQgQgiAFgkIAFgQQAKgRAQgLQAOgJAQgBIAIgCQArgFAkAcIAOAMIAMAQIAOAcQAEAGAAAJQgBAUgJASIgBADIgUAcIAAADIAAABAAhgmIABABIABACIgBACIgGABIgBgEIABgCIABgBIACAAIACABAANgRIAAACIgBABQgFADgHgDIAAgBIAAgDIAAgBIADgBIAAgBIAIACIABAAIABACAALAAIACAAIABAAIAAACIAAACIgGABIgBgEIABgBIABAAIACAAAAigMIACgBIACABIABABIAAADIAAACIgGAAIgBgDIABgDIABAAAA5gIIABgEIADgBIAFABIABABIABABIgBADIAAABIgJAAIgBgCAg+BKIgBABIgBAAIgBABIgDgBIgBgBIAAgBIAHABAAzAWIgFAAIgBgDIAAgDIADgBIAEACIAAACIgBADABCAmIAAACIgBABIgDABIgCgBIgCgFIABgCIADgCIAAAAIACABIACAFAAKAcIACAAIADABIAAAAIABADIgBACIgFABIgBgEIAAgCIABgBAAcAqIACABIABABIAAACIAAACIgGABIgBgEIABgCIADgBAg+glIAAACIgBACIgFABIgBgEIAAgCIADgBIADABIABABAgzgOIACABIABABIAAACIgBACIgFABIgBgEIAAgCIAEgBAgGgtIAAADIgGAAIgBgDIABgDIABAAIACgBIACABIABABIAAACAgiguIACABIABABIABADIgCAEIgCABIgDgBIgBgFIAAgCIAEgCIAAAAAgTgSIACAAIACgBIACABIABABIAAACIgBADIgFAAIgBgDIAAgDAgRAZIAAACIAAACIgGABIgBgEIABgCIADgBIACABIABABAgqAjIABAEIgCADIgCABIgDgBIgBgEIAAgDIAEgBIAAgBIACABIABABAg1AKIACABIABABIAAADIAAACIgGAAIgBgDIABgDIADgB").cp();

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC99").s().p("AA7BOIhHgIIgxADIAAAAQABgEgCgDIgDgGIgBgBIgOghIgGgSQgEgPADgRQADgOAJgNIALgKQAfgVAlAHIAKACIAaANQATALANARIAAABIAAADIAGAGQAPAUgFAVIgFAVIgBABIgBACIAAABIgBABIgEAKIgRAXAA6gJIABACIAJAAIAAgBIABgDIgBgBIgBgBIgFgBIgDABIgBAEAAjgNIgBAAIgBADIABADIAGAAIAAgCIAAgDIgBgBIgCgBIgCABAAMgBIgCAAIgBABIgBAAIABAEIAGgBIAAgCIAAgBIgBAAIgCgBAAOgSIgBgCIgBAAIgIgCIAAABIgDABIgBABIABADIAAABQAHADAFgDIABgBIAAgCAAignIgCgBIgCAAIgBABIgBACIABAEIAGgBIABgCIgBgCIgBgBAAdApIgDABIgBACIABAEIAGgBIAAgCIAAgCIgBgBIgCgBAALAbIgBABIAAACIABAEIAFgBIABgCIgBgDIAAAAIgDgBIgCAAABDAlIgCgFIgCgBIAAAAIgDACIgBACIACAFIACABIADgBIABgBIAAgCAA0AVIABgDIAAgCIgEgCIgDABIAAADIABADIAFAAAg0AJIgDABIgBADIABADIAGAAIAAgCIAAgDIgBgBIgCgBAgpAiIgBgBIgCgBIAAABIgEABIAAADIABAEIADABIACgBIACgDIgBgEAgQAYIgBgBIgCgBIgDABIgBACIABAEIAGgBIAAgCIAAgCAgSgTIAAADIABADIAFAAIABgDIAAgCIgBgBIgCgBIgCABIgCAAAghgvIAAAAIgEACIAAACIABAFIADABIACgBIACgEIgBgDIgBgBIgCgBAgFguIAAgCIgBgBIgCgBIgCABIgBAAIgBADIABADIAGAAIAAgDAgygPIgEABIAAACIABAEIAFgBIABgCIAAgCIgBgBIgCgBAg9gmIgBgBIgDgBIgDABIAAACIABAEIAFgBIABgCIAAgC").cp();

	this.addChild(this.shape_27,this.shape_26,this.shape_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.7,-8.6,19.5,17.3);


(lib.元件411 = function() {
	this.initialize();

	// 图层 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(0.1,1,1).p("AB7guIgcAlQgLAOgNAKIARAYQANASARANIgZAAIhDgPQgZgIgRAaIgdAkIgDgXQgEgWAAgYQgBgVgXgNQgPgHgLgNIgUgQIAlgIIA5gDQAGAAgDgBQAXgPANgYQAKgQALgLIALBAIAAABIBQgG");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF00").s().p("AB7guIgcAlQgLAOgNAKIARAYQANASARANIgZAAIhDgPQgZgIgRAaIgdAkIgDgXQgEgWAAgYQgBgVgXgNQgPgHgLgNIgUgQIAlgIIA5gDQAGAAgDgBQAXgPANgYQAKgQALgLIALBAIAAABIBQgGIAAAD").cp();

	this.addChild(this.shape_29,this.shape_28);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.3,-10.9,24.7,22);


(lib.元件311 = function() {
	this.initialize();

	// 图层 1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AgBgBIAAADIADgDIgDAA").cp();
	this.shape_30.setTransform(-12.2,-39.7);

	this.addChild(this.shape_30);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.4,-40,0.5,0.5);


(lib.元件211 = function() {
	this.initialize();

	// 图层 1
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF9999").s().p("AAJgjIAsAZQgkBQg9g9IgIgRIAtgYQgKAYAIATIABAGQADgZANgZIABgC").cp();
	this.shape_31.setTransform(0.3,17.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BCBC9C").s().p("ADcgvQAUAegJAiQgLAmgkAUQgLAHAAgCQgLAGgKgBIgxgDQgVgHgTgLIgpgaQgWgPgTAPIgcAUQgYATgdAKIgCABIgpAHIgsgEQgXgFgKgPQgKgPgBgVIgCgjIAFggIACgHIAJgOQAHgKAHgGIAXgQQAQgKANABIANACQAnAFAjAUQAKgIAIAAIAJAEIAAAUIAPAJIAKAEIATAAIAGgCIASgLIAGgIIAFgQQAGgGAHACIAIALQA8gYBBAMIARANIAPAU").cp();
	this.shape_32.setTransform(0.5,8.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999966").s().p("AB+ggQAmgkAwgHIALAAQARAAANAHQAQAIAFACIAYARQASAOgLAnIgCAHIgIAFQgOAMgZgDQgLgCgIgKIgGgIIgPgeQgIgNgMgHQgTgKgQANIgiAdIAKAMQATAVABAZIACAcIhDAEQgFgLgQgLQgxgSgpAHQgsAHgUAaIhCgQIARgsIAGgMQAEgIgFgGIgJgJQgSgQgXAEQgaARgOAYQgOAagUAWIgMAMQgMAJgMgHQgRgFgDgQIAAgFQgHg3AvgeQAUgNATgLIATgKQAqgJAcAZIARARIAIAGIAJgNQAegaATgJQAUgKAigBQAegCAeANQAdAOANARIALALIAFADIADABIAHgF").cp();
	this.shape_33.setTransform(0.2,-9.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AC7iKIgMABIgRAPIgDAEIgBAGIABAGIAIATQAQAegHAdQAgABAVAYIABABQAeAhgCAtQgCAlgbAWIgkAbIgcAIIgXABIgpgHIgagIQgEAGgEANQgEAMgiAQQghAPgWgPQgWgOgFgLIgIgUIguAQIg2AEQgZgBgTgNIgSgNQgRgaABgaQgCgpAPgjQAUgqAugRIAahDQgFgagWADQgHALgQAOQgRANgNAgQgOAhggAHQgiAHgTgeIgCgLQgHgUAHgXIADgIQAgg8BAgaQAkgOAoAQIAeAZIATgSQAMgKAVgMQAVgMAqAEQBIgDAvAzIA0geQAOgIAUgFIATgCIAUAEQAUAHAcAOQAcAPADA4QABAVgRALQgiAYgogTIgJgJQgOgQgJgbQgDgJgMgFIAAAAACBiQIgHAFIgEgBIgEgDIgLgLQgOgRgdgOQgdgNgfACQghABgUAKQgUAJgdAaIgJANIgJgGIgQgRQgdgZgqAJIgSAKQgUALgTANQgvAgAGA3IABAFQACAQARAFQAMAHANgJIAMgMQAUgWAOgaQANgaAbgRQAWgEATAQIAIAJQAFAIgEAIIgFAMIgRAsIBCAQQATgaAsgHQAqgHAwASQARALAFALIBCgEIgCgcQgBgZgSgVIgLgOIAjgdQAPgNATAKQANAHAHANIAPAgIAGAIQAIAKAMACQAYADAPgMIAHgFIADgHQALgpgSgOIgYgRQgGgCgQgIQgMgHgSAAIgKAAQgxAHglAkIAAAAADhAVIgPgUIgRgLQhBgMg8AWIgIgJQgHgCgGAGIgFAOIgGAIIgSALIgGACIgTAAIgKgEIgPgJIAAgSIgJgEQgIAAgKAGQgjgSgngFIgNgCQgNgBgQAKIgXAPQgHAFgHAKIgJAOIgCAHIgFAiIACAjQABAVAKAPQAKAPAXAFIAsAEIApgHIACgBQAdgKAYgTIAcgUQATgPAWAPIApAaQATALAVAHIAxADQAKABALgGQAAACALgHQAkgUALgmQAJgkgUgeIAAAAAAMB8IgCACQgMAZgDAbIgBgGQgIgVAKgYIgtAYIAIATQA8A9AlhSIgsgZ").cp();
	this.shape_34.setTransform(0,1.4);

	this.addChild(this.shape_34,this.shape_33,this.shape_32,this.shape_31);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.4,-19.6,64.9,42.1);


(lib.元件111 = function() {
	this.initialize();

	// 图层 1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AApACQgHACgDgEQAHgLAIAIQADADgIACIAAAAAgmgCIADABQABABgBABIgBAGIgHAAIgDgCIAAgCIACgDQACgCAEAAIAAAA").cp();
	this.shape_35.setTransform(-7.7,-12.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCCCCC").s().p("ABrh1QAEAAADADIAEAIIgEAHQgDAEgEAAQgFAAgBgEQgCgDACgEIACgIQgBgDAFAAIAAAAABYAhQAIACAGAEIgBAUIgNgaAgzAgIAngEIAMABIACATIAABFQgcAEgVgPIgQgMQgFgmAMgPIAFgJAhmhtIgFAWQgLAAgDgOQAEgJAPABIAAAAABzBgIAHAGIgPAHIgCgmIAGASIAEAH").cp();
	this.shape_36.setTransform(-7.2,-2.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999966").s().p("ABIAAQgGgEgIgCIgBgDIgRgMIABAJIARAkIAGA9QANAGACAKIgFAGQg4ANgfgNQgDgHADgHIAFgGIABg+QAFgYgUgbIgGAQIAAAAIgNgBIgnAEIgBgMIgFgGQgGAIgFAPIgJAkQADAOABAOQACATAAAUQgxALgxgNQAFgQAKgGQAFgEAIAAIAFgzIAAgNIAJgmIAchFIAIgKQBZAFBagKIALAZQAiAeAsAKQAKADAIAFQARANAHASIAFANQAIAegLAcIgLAVIgBAGIgEAJQgpANgogHIgCgOIgKgHQAKgFAMgCQAagHAJARQABgLgRgKIgNgJQgTgRgHgaQAAgJAEgIQAFgNAIgEIAHgIQgNgHgPAOIgHALIgCAL").cp();
	this.shape_37.setTransform(-4.2,1.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#228C2F").s().p("ACjglIATADQBMANAAARQAAAQhMANIi2AMQhqAAhLgMIgigHQAoADApgKIAEgGIgFgpIAEAJIAHAHIAMAGIAqAHQgGAIAFAJQAEAHAJACQA4ANAvgTIBHgDIAjgNIAEgFIAIgdAj+gKIgCAKIgBgEIADgG").cp();
	this.shape_38.setTransform(0,12.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#996600").s().p("ABYgUIABABIgGAnIgqABQAIAAAGgFQAGgGAAgIQAAgGgGgGQgHgFgJAAQgKAAgHAFQgGAGAAAGQAAAIAGAGQAHAFAKAAIhBADQAKgFgDgTQgCgKgMgEIgSACIgKAJQgGANAIAMIAHADIgkgBIAKglIABgBIA0gIIBVgCIAXAEIAFAA").cp();
	this.shape_39.setTransform(-7.6,-13.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6F6D4A").s().p("AADgtIANAEIAHALQAJAhgaAYIgVATIgJgzQAJgFAJgEQABgXAIgIIAAAA").cp();
	this.shape_40.setTransform(18.6,0.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AjuBxIABgHIAJgNIATgJIABgIIAAAAIAEhAIAGgMIAAgLIAIgbIAcg0IgMgEQgIgCgIgKIgFgNIACgIQAJgQAbADIASgDIAAACIgKAnIAkABIgHgDQgJgMAGgPIALgJIARgDQAMAEADAMQADAUgKAFIBCgDQgKAAgGgGQgHgFAAgIQAAgIAHgGQAGgGAKAAQAKAAAGAGQAFAGAAAIQAAAIgFAFQgFAFgIABIAogCIAFgoIgBgCIAQADIADgCQAdACACAaIgJAOQgHAIgRAAIANAWIB0A+IALgIIALgdIAEgCQAjgFAHAiQAHAhgWAcQgRAWgZAIIgEAUIgIAcIgEAGIgjAPIhHACQgxATg2gNQgJgCgEgHQgFgJAGgJIgqgHIgMgHIgHgHIgEgIIAFArIgEAGQgpAKgogEIgkgGIgFgIIAAgFIACgLAAyiIQgFAAABAEIgCAHQgCAEACAEQABADAFAAQAEAAADgDIAEgIIgEgHQgDgEgEAAIAAAAAhsANIgFAJQgMAPAFAnIAQALQAVAPAegDIAAhGIgCgSIgBgBIAHgOQAUAcgGAYIAAA+IgGAGQgCAHACAGQAiANA1gMIAGgHQgDgJgMgGIgHg9IgQgmIgBgJIAQAMIACACIANAbIABgVIACgLIAHgJQAPgNANAHIgIAGQgIAEgEANQgFAJABAKQAHAaATAQIAMAKQARAKAAALQgJgRgaAHQgMABgKAFIAKAHIABAPQApAGAogNIAEgIIACgHIAKgUQALgcgHgfIgFgPQgIgQgRgMQgIgGgJgCQgsgKgigeIgMgZQhaAJhZgEIgIAJIgbBGIgJAmIAAAMIgFAzQgIABgGAEQgJAGgFAPQAwAOAxgLQABgUgCgUQgCgNgDgOIAKgmQAEgQAHgFIAEAEIABALADNgnQgLAHAAAXQgJAFgJAEIAIAzIAXgTQAagXgJghIgGgLIgNgEAgTh4QAIgDgDgEQgIgIgHALQADAFAHgBIAAAAAifh/QgPgBgEAJQADANALABIAFgWAhkh+QgEgBgCADIgCAEIAAACIADADIAHAAIABgGQABgDgBgBIgDgBAA6BNIgEgHIgGgSIACAmIAPgGIgHgH").cp();
	this.shape_41.setTransform(-1.5,-0.4);

	this.addChild(this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.7,-15.8,51.7,31.7);


(lib.元件1_1 = function() {
	this.initialize();

	// 图层 1
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AgvADIAzgUIBLgVQAbAMAFAeQABAHgHANIgUAEIgGABQgbAHgVANIgZAOIgTAIIgHgCIgEgBQgKgEgHgHQgXgVAQgdIgCgCQgPgXgXAKIgDAAQAHgQgSgFIgEgBQADgSgHgSIAAgBIAAAAQAQAIAbgLQABASAcADIABAAIgBABQgJACAGAJQAEAGAHgBQgWANAFAVIAAABAguAKQAAgEgBgDIgDACAguAKQAPASAEAZIADAPAgwAHIACADAAGA/QgKgVANgYQAPgYAfAGQAPADAIALIAHAO");

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgjAgQgMgUAOgXQAQgaAdAIQAOADAIAMIAHAOIgFAAQgcAFgTAOIgYAN").cp();
	this.shape_43.setTransform(4.4,3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00FF00").s().p("AA1ANIgHgNQgIgLgOgDQgdgIgQAYQgOAZAMAUIgWAIIgHgBIgEgCIgCgOQgEgagQgQQABgEgBgCIA0gXIBKgVQAbAMAEAgQABAHgHALIgUAF").cp();
	this.shape_44.setTransform(3.2,1.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgHgdIACADQANASAEAXIADAPQgKgEgFgHQgXgTAQgdIAAAA").cp();
	this.shape_45.setTransform(-4,3.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CCCCCC").s().p("AAggPQgJACAGAJQAEAEAHAAQgWAMAFAXIAAABIgDACQgPgZgVAKIgDAAQAGgQgRgFIgFgBQAEgQgIgSIABgCQAQAJAZgLQABARAcAEIAAAB").cp();
	this.shape_46.setTransform(-7.1,-3.2);

	this.addChild(this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.1,-7.1,22.3,14.3);


(lib.shape374 = function() {
	this.initialize();

	// Layer 1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#29A09F").s().p("AhsArQgMgNAKgcQAsgEAOgIIAygYQAMgGAOgDIA4ABQAjANABAfQgDAJgQAAQgQAAgYgPIghAFQgfAFhGAbIggALQAYgJgXAIIAAAA").cp();
	this.shape_47.setTransform(0.3,0.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhrAHIgWADIAhgKIAcgLIBEgbIAbgIQAfgNAdAOQAWALASAUIADAWQgQAWgRgCIgTgFQgTgHgCgGIgeAEQgHACgHAEQgbAPgfAFIgPADIgUAGIgsAEIASgGQAXgHgYAJIAhgMQBGgaAfgGIAhgFQAYAQAQAAQAQAAADgKQgBgfgjgMIg4gCQgOADgNAHIgxAXQgPAGgrAHIAAAA").cp();

	this.addChild(this.shape_48,this.shape_47);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.9,-5.3,26,10.8);


(lib.shape373 = function() {
	this.initialize();

	// Layer 1
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B7ECEB").s().p("AAGhmIAFACIAEABIAJAFIAMAMQAUAegFASIgHAZQgGAegOAfIgIAQQgFAMgPAJIAGgBIgCADQgTAWgRgUQgTgVAFgfIAJg4QAEgbALgaQALgaAVgIIAAAA").cp();
	this.shape_49.setTransform(9.9,6.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#29A09F").s().p("ABoiYQgXAHgLAbQgLAZgEAcIgJA5QgFAdATAVQARAUATgVIAEgEIACAAQAGgFAIgDQAZgJAnACIAPAEQAIACAEAHQANASgRAZQguAvhwAKQC0gKAIAMIgFAIQgGAGh1AFQh0AGjdgFQgDgUCoABQhbgOgMgaQgJgIAPgSQAagcAegBQBKgHAzAWQgFgbhBgDQALgNAHgPIAHgNIAFgLQAFgpgJghQADgUAfgYIgBgLIA1gDIAQgBIAEAAIAIgCIALAEIADABIAAAAIADAC").cp();
	this.shape_50.setTransform(0.1,11.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#207979").s().p("AgDAZIAAAAIgLACIgVABIAQgOIARgOIARgMIASgNIADgCQgBAUgmAgIAAAA").cp();
	this.shape_51.setTransform(12.8,-25.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#33CCCC").s().p("ABLg+IAFgCIAEAAQAngFAgAYIAGALIgYBDQgYAEgQgRIAKglIgMgKIgHgCIgKACIAAAAIgEAAIgdAWIgBAJIAKgDQAJgCAIgGIAGgFIALAAIgEAoQARAjAfgOIgBAFQgJAYAZAKIgBABIguANIgdAGIAAABIgVADIgSABIgyADIhJgDIgygEIgTACIAigaIgGgRQAUgTABgFQgBgFAVggQAUgdAVgPQAVgPAhgGIALgIQAJgHAggQIA4gaIAAABIgSANIgSAOIgSAOIgPAOIAUgBIAMgCAA0gVQAQgJABgHQgKAAgHAGQgUALgSAQIAGAEIAggV").cp();
	this.shape_52.setTransform(4.9,-16.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("ACIkWQAZgKAPgBIAGgBQABAcghAWQAcAEAXAMQApAUgfAyIgKAYIAFALIgKAEIgCAIQAhgNAEAUIACAKQgBAUgdAJIg8APIgeAEQAOADAKAHIAHAGQASAUgBAgIgBAQIgCALQgGAhgVAmIAJAGIAwgGQAJABAIAFQAjATgWAtQgGAMgOAIIgsAaIBKAFQAWAGABAGQACAFgEAHQgDAHgyAHIihAGIhMgCIhKACQhGAFhAgIIgBgIQgCgCADgKQAEgLAgAAIA3gDIgagYQgFgTAPgXQAVgcAfgIIAWgEIAfgDQAPgMAIgOIAIgYQAFgggEggQgCgYAJgHIAYgVIgBgKIgcAAIAAgBIgNABIghABIhsgDIA5gaIAZgPIg5gDIA9gWIAigtIAbgkQAQgQASgLQAagSAPgDQAOgCAegSQAegSAdgKIAAAAACAjiIgFABQAngiABgUIgDABIg4AaQggAQgJAIIgLAHQgjAGgTAPQgUAPgVAfQgUAgAAAFQAAAFgUATIAGARIgiAaIASgCIAyAEIBHADIA0gDIASgBIAVgDIAAgBIAdgGIAugNIABgBQgZgKAJgYIABgFQgfAOgRgjIAEgqIgLAAIgGAFQgIAGgJAFIgKACIABgLIAdgVIAEgBIAAAAIAKgBIAHACIAMAJIgKAnQAQARAYgEIAYhFIgGgLQgggXgnAEIgEABABki4IggAVIgGgEQASgQAUgLQAHgFAKgBQgBAHgQAJIAAAAABlCcIgIACQARgJAFgNIAIgQQAOgeAGggIAHgaQAFgRgUgcIgMgNIgJgFIgEgBIgFgBIgDgCIAAAAIgDgBIgLgEIgIACIgEAAIgQABIg1ADIABALQgfAXgDATQAJAhgFApIgFALIgHAPQgHAPgLANQBBADAFAbQgzgWhKAHQgeABgaAcQgPASAJAIQAMAaBbAOQiogBADAUQDdAFB0gGQB1gFAGgGIAFgIQgIgMi0AKQBwgKAugvQARgZgNgSQgEgHgIgCIgPgEQgngCgZAJQgIADgGAFIgCAA").cp();

	this.addChild(this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.1,-29.1,50.5,58.3);


(lib.shape363 = function() {
	this.initialize();

	// Layer 1
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("ABqi2Qi+AAiJB3IghAhIgOAPQhLBXgLBwIBlAAQAOhtBahNIAkgcQBfhCB8AAQBvAABXAyIAzhKQhtg/iMABIAAAA").cp();
	this.shape_54.setTransform(-5.9,-51.7);

	this.addChild(this.shape_54);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.5,-70.1,71.2,36.8);


(lib.shape362 = function() {
	this.initialize();

	// Layer 1
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("ABqixQi/AAiIB4IghAgIgOAQQhIBSgOBpIBmAAQARhlBWhMIAjgaQBghCB8AAQBuAABXAzIA0hKQhug/iLAAIAAAA").cp();
	this.shape_55.setTransform(-5.9,-52.2);

	this.addChild(this.shape_55);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.4,-70.1,71.1,35.7);


(lib.shape361 = function() {
	this.initialize();

	// Layer 1
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("ABpiuQi/AAiIB3IghAhIgOAPQhDBNgRBiIBlAIQAShjBUhJIAjgaQBghCB8AAQBuAABXAyIA0hKQhug/iLABIAAAA").cp();
	this.shape_56.setTransform(-5.8,-52.5);

	this.addChild(this.shape_56);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.2,-70.1,70.9,35.2);


(lib.shape360 = function() {
	this.initialize();

	// Layer 1
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("ABnipQi/AAiIB4IghAgIgOAQQg8BFgUBWIBjAQQAUhaBQhHIAjgaQBghCB8AAQBuAABXAzIA0hKQhug/iLAAIAAAA").cp();
	this.shape_57.setTransform(-5.6,-53);

	this.addChild(this.shape_57);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.8,-70.1,70.5,34.1);


(lib.shape359 = function() {
	this.initialize();

	// Layer 1
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("ABmilQi/AAiIB3IghAhIgOANQg6BEgUBRIBjASQAWhXBMhDIAjgaQBghCB8AAQBuAABXAyIA0hKQhug/iLABIAAAA").cp();
	this.shape_58.setTransform(-5.5,-53.4);

	this.addChild(this.shape_58);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.6,-70.1,70.3,33.4);


(lib.shape358 = function() {
	this.initialize();

	// Layer 1
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("ABihCQh8AAhfBCIgkAaQhAA5gaBHIhjgSQAWhCAwg5IAOgNIAhghQCJh3C+AAQCMgBBtA/IgzBKQhXgyhvAAIAAAA").cp();
	this.shape_59.setTransform(-5.1,-54.7);

	this.addChild(this.shape_59);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.9,-70.1,69.5,30.8);


(lib.shape357 = function() {
	this.initialize();

	// Layer 1
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("ABdg2Qh8AAhfBAIgkAcQg1AvgbA5IhjgVQAWgyAmguIAOgPIAhgfQCJh3C+AAQCMgBBtA/IgzBKQhXgyhvAAIAAAA").cp();
	this.shape_60.setTransform(-4.6,-55.9);

	this.addChild(this.shape_60);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.9,-70.1,68.5,28.4);


(lib.shape356 = function() {
	this.initialize();

	// Layer 1
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("ABYgtQh8AAhgBAIgjAcQgtAngaAvIhigYQAUgnAegkIAOgPIAhgfQCIh3C/AAQCLgBBuA/Ig0BIQhXgwhuAAIAAAA").cp();
	this.shape_61.setTransform(-4.1,-56.8);

	this.addChild(this.shape_61);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.8,-70.1,67.5,26.6);


(lib.shape355 = function() {
	this.initialize();

	// Layer 1
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("ABSglQh8AAhfBAIgkAcQgkAggYAlIhhgcQAQgcAWgZIAOgQIAhgeQCJh4C+AAQCMAABtA/IgzBIQhXgxhvAAIAAAA").cp();
	this.shape_62.setTransform(-3.5,-57.6);

	this.addChild(this.shape_62);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.7,-70.1,66.4,24.9);


(lib.shape354 = function() {
	this.initialize();

	// Layer 1
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("ABLgdQh8AAhgBAIgjAcQgdAZgVAcIhdgjIAYgfIAOgPIAhghQCIh1C/AAQCLgBBuA/Ig0BIQhXgwhuAAIAAAA").cp();
	this.shape_63.setTransform(-2.8,-58.4);

	this.addChild(this.shape_63);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.2,-70.1,64.9,23.4);


(lib.shape353 = function() {
	this.initialize();

	// Layer 1
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("ABEgWQh8AAhgBAIgjAcQgVATgSAUIhagoIAKgLIAOgQIAhggQCIh2C/AAQCLAABuA/Ig0BIQhXgxhuAAIAAAA").cp();
	this.shape_64.setTransform(-2.1,-59.1);

	this.addChild(this.shape_64);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.8,-70.1,63.5,21.9);


(lib.shape352 = function() {
	this.initialize();

	// Layer 1
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AA7gNQh8AAhgBAIgjAcIgXAWIhYgsIAGgGIAhghQCIh1C/AAQCLgBBuA/Ig0BIQhXgwhuAAIAAAA").cp();
	this.shape_65.setTransform(-1.2,-60);

	this.addChild(this.shape_65);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32,-70.1,61.7,20.2);


(lib.shape351 = function() {
	this.initialize();

	// Layer 1
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AAxgHQh8AAhgBAIgjAcIgJAJIhSg0IATgRQCIh2C/AAQCLAABuA/Ig0BIQhXgxhuAAIAAAA").cp();
	this.shape_66.setTransform(-0.2,-60.6);

	this.addChild(this.shape_66);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-70.1,59.7,18.9);


(lib.shape350 = function() {
	this.initialize();

	// Layer 1
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AAoAAQh8AAhgBBIgaAVIhSg0IABgBQCIh2C/AAQCLAABuA/Ig0BIQhXgyhuAAIAAAA").cp();
	this.shape_67.setTransform(0.6,-61.4);

	this.addChild(this.shape_67);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.2,-70.1,57.9,17.3);


(lib.shape349 = function() {
	this.initialize();

	// Layer 1
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AAeAHQh8AAhgBCIgHAFIhRg1QCChmCyAAQCMgBBtA/Ig0BIQhWgyhvAAIAAAA").cp();
	this.shape_68.setTransform(1.6,-62.2);

	this.addChild(this.shape_68);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.3,-70.1,55.9,15.8);


(lib.shape348 = function() {
	this.initialize();

	// Layer 1
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AAUANQh2AAhcA8IhOg5QB8hXCkAAQCMgBBtA/IgzBIQhXgyhvAAIAAAA").cp();
	this.shape_69.setTransform(2.6,-62.8);

	this.addChild(this.shape_69);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.3,-70.1,54,14.6);


(lib.shape347 = function() {
	this.initialize();

	// Layer 1
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AAKARQhoAAhUAvIhQg6QB1hJCXAAQCLAABuA/Ig0BIQhXgzhuAAIAAAA").cp();
	this.shape_70.setTransform(3.7,-63.2);

	this.addChild(this.shape_70);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.2,-70.1,51.8,13.7);


(lib.shape346 = function() {
	this.initialize();

	// Layer 1
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AAAARQheAAhMAkIhMg7QBtg9CJAAQCJAABuA/Ig0BIQhXgzhsAAIAAAA").cp();
	this.shape_71.setTransform(4.8,-63.2);

	this.addChild(this.shape_71);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.8,-70.1,49.5,13.7);


(lib.shape345 = function() {
	this.initialize();

	// Layer 1
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AgRARQhPAAhEAbIhBhDQBggsB0AAQCKAABtA/IgzBIQhXgzhtAAIAAAA").cp();
	this.shape_72.setTransform(6.5,-63.2);

	this.addChild(this.shape_72);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,-70.1,46.2,13.7);


(lib.shape344 = function() {
	this.initialize();

	// Layer 1
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgjARQhDAAg7ATIgyhKQBRgdBfAAQCKAABtA/IgzBIQhXgzhtAAIAAAA").cp();
	this.shape_73.setTransform(8.3,-63.2);

	this.addChild(this.shape_73);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.9,-70.1,42.6,13.7);


(lib.shape343 = function() {
	this.initialize();

	// Layer 1
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AgzARQg5AAg0AOIgjhPQBDgTBNAAQCKAABtA/IgzBIQhXgzhtAAIAAAA").cp();
	this.shape_74.setTransform(9.9,-63.2);

	this.addChild(this.shape_74);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.7,-70.1,39.4,13.7);


(lib.shape342 = function() {
	this.initialize();

	// Layer 1
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("Ag9hDQhCAAg6AOIAcBRQAugLAyAAQBsAABXAzIA0hIQhtg/iKAAIAAAA").cp();
	this.shape_75.setTransform(10.9,-63.2);

	this.addChild(this.shape_75);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.7,-70.1,37.3,13.7);


(lib.shape341 = function() {
	this.initialize();

	// Layer 1
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AhLhDIhgAIIAQBTIBQgHQBtAABXAzIAzhIQhtg/iKAAIAAAA").cp();
	this.shape_76.setTransform(12.3,-63.2);

	this.addChild(this.shape_76);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-70.1,34.6,13.7);


(lib.shape340 = function() {
	this.initialize();

	// Layer 1
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AhahDIhCAEIAGBUIA8gEQBsAABXAzIA0hIQhtg/iKAAIAAAA").cp();
	this.shape_77.setTransform(13.8,-63.2);

	this.addChild(this.shape_77);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-70.1,31.5,13.7);


(lib.shape339 = function() {
	this.initialize();

	// Layer 1
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AiJATIAjgCQBsAABXAzIA0hIQhug/iJAAIgjABIgHAAIAABVIAHAA").cp();
	this.shape_78.setTransform(15,-63.2);

	this.addChild(this.shape_78);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,-70.1,29.1,13.7);


(lib.shape338 = function() {
	this.initialize();

	// Layer 1
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AhyARQBuAABWAzIAzhIQhtg/iKAAIgSAAIABBVIARgB").cp();
	this.shape_79.setTransform(16.2,-63.2);

	this.addChild(this.shape_79);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.9,-70.1,26.7,13.7);


(lib.shape337 = function() {
	this.initialize();

	// Layer 1
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("Ah1ASQBnACBRAwIA0hIQhng7h/gEIgGBV").cp();
	this.shape_80.setTransform(17.7,-63.2);

	this.addChild(this.shape_80);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.8,-70.1,23.8,13.7);


(lib.shape336 = function() {
	this.initialize();

	// Layer 1
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AhmASQBVAIBEApIA0hIQhYgzhqgKIgLBU").cp();
	this.shape_81.setTransform(19.3,-63.1);

	this.addChild(this.shape_81);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9,-69.8,20.6,13.4);


(lib.shape335 = function() {
	this.initialize();

	// Layer 1
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AhYATQBFALA4AiIA0hIQhJgphTgOIgVBS").cp();
	this.shape_82.setTransform(20.6,-62.9);

	this.addChild(this.shape_82);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.7,-69.4,17.9,13);


(lib.shape334 = function() {
	this.initialize();

	// Layer 1
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AhJAVQA0ANArAaIA0hIQg4ggg9gPIgeBQ").cp();
	this.shape_83.setTransform(22.1,-62.5);

	this.addChild(this.shape_83);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14.7,-68.6,14.9,12.2);


(lib.shape333 = function() {
	this.initialize();

	// Layer 1
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("Ag3AaQAgALAbARIA0hIQglgVgmgOIgkBP").cp();
	this.shape_84.setTransform(23.9,-61.9);

	this.addChild(this.shape_84);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18.3,-67.3,11.3,10.9);


(lib.shape332 = function() {
	this.initialize();

	// Layer 1
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AgKAuIAyhIIgngTIgoBMIAdAP").cp();
	this.shape_85.setTransform(25.5,-61.1);

	this.addChild(this.shape_85);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(21.5,-65.8,8.1,9.4);


(lib.shape331 = function() {
	this.initialize();

	// Layer 1
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("ABqi2Qi+AAiJB3IghAhIgOAPQhLBXgLBwIBlAAQAOhtBahNIAkgcQBfhCB8AAQBvAABXAyIAzhKQhtg/iMABIAAAA").cp();
	this.shape_86.setTransform(-5.9,-51.7);

	this.addChild(this.shape_86);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.5,-70.1,71.2,36.8);


(lib.shape330 = function() {
	this.initialize();

	// Layer 1
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#29A09F").s().p("ACbBVIgEAIIgDAGIgCAAIhigPQgYgFgQgTIgIgLIgehUQgHgTgRgNQgMgIgOgBIgegCQgNACgGAKQgKAOgNgDIgCgGQAUgqAuAFQA4AGAUAzIACAGQAJAWADAUIAAACQAEASALANQAQASAWAFIBkAW").cp();
	this.shape_87.setTransform(-0.1,-0.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("ACSBgIAEABIAEADQACAVgugQIhRgXIgOgGQgPgMgMgSIgdhUQgHgXgagMIgjABQgLAEgCADIgDAEIgUAOQgQAHgEgRIAAgLQAIgSATgMQAhgWAmAQQAgANATAcIAOAZIACAMIAIAaQAFAYAUAQQAIAFAJADIBsAbIADAAQAFABAAAGIgBACIgMgCIhjgWQgWgFgQgSQgLgNgEgSIgBgCQgDgUgIgWIgDgGQgUgzg3gGQgvgFgTAqIACAGQAMADAKgOQAHgKANgCIAeACQAOABALAIQASANAGATIAfBUIAHALQARATAYAFIBiAPIABAA").cp();

	this.addChild(this.shape_88,this.shape_87);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.6,-11.1,33.3,22.5);


(lib.shape329 = function() {
	this.initialize();

	// Layer 1
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#29A09F").s().p("AClhbIAWAOQgHALgKAYQgLAfgTAbQgTAdgXAXQgLALgPAFIhDASQgyAOhMgpQgjgdgLgcQgMgbgDgPQgEgPAAgTQADgeAOgMQAFgHAJADQAFAHgEAIIgEAPQAAAoASAjIATAfQARAUAXALQAfAPAigDQAbACAbgIQAdgJAUgTQAUgTANgWIAHgLIAXgxIAPgf").cp();
	this.shape_89.setTransform(-0.4,0.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AChhaIgPAfIgXAxIgHALQgNAWgUASQgVAUgcAIQgbAIgbgBQgiADgfgPQgXgMgRgTIgTgfQgSgjAAgoIAEgQQAEgHgFgIQgJgCgFAGQgOANgDAdQAAATAEAPQADAPAMAbQALAdAjAdQBMAoAygNIBDgSQAPgFALgLQAXgXATgdQATgcALgfQAJgYAIgLIAEgFQAKgJABAFIgIAOIgBADIgPAaIgVAtQgNAegZAcQgTAVgaAKQhgAkg0gVQgzgVgUgVQgUgVgVgrQgIgZABgfIACgOQADgSAJgPQAJgNARAEIAIAIQADAFgGATQgHAUANAiIAQAhIASAWQAVAZAhAIQA2ANAwgWIATgLIAZgVIASgWIAPgeQANgiAVgdIAEgGIAEABIACABIgEAI").cp();

	this.addChild(this.shape_90,this.shape_89);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.8,-11.4,39.7,22.9);


(lib.shape328 = function() {
	this.initialize();

	// Layer 1
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#29A09F").s().p("ABqgdIgBABIACADIABAFIgCAUIgCAKIgSAFIgFANIABAgQAKApATAHQATgfARADQAhAMgDApQgGA4gqAnIAAAJQA/gHAnAHQATADgTASIjYAMIi/gHIg/gJIADgFQANgSBSAMQATgDgGgPQgug0AJg7IAGgIQALgIAOgBQAVADADATQAOgHAGgWQAHgMgBgSQgDgJAAgGIAAAAIAAgBIAAAAQgKgWABgYQAFgQAGABQAagFAWAFQAPgDgCgPQADgUgIgPQhHgfhSAOIAUgUIgVgCQAkgXADgqQABgWAHgVIgKgnIBDANQBMgqBLAZIAUAKIBUgQQgGAcgZANQgFAgABAeQABAMALAHQAaAOAeAMIgoAEIAgAPIhzAEQgRADgOALQgJAIgDATQgCAVAOAGIAQgDIACAAIAhABAhWApIgBADIAAABIABgE").cp();
	this.shape_91.setTransform(-0.3,0.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("ABmgaIghgBIgCAAIgQADQgOgFACgVQADgUAJgIQAOgKARgDIBzgFIgggPIAogEQgegLgagPQgLgGgBgMQgBgfAFgfQAZgOAGgbIhUAQIgUgLQhLgZhMArIhDgOIAKAoQgHAVgBAVQgDAqgkAYIAVACIgUATQBSgNBHAeQAIAQgDATQACAPgPADQgWgEgaAEQgGgBgFAPQgBAaAKAVIAAABIAAAAIAAABQAAAGADAIQABASgHAMQgGAWgOAHQgDgTgVgDQgOABgLAJIgGAIQgJA7AuAzQAGAPgTAEQhSgNgNATIgDAEIA/AJIC/AIIDYgNQATgSgTgDQgngHg/AHIAAgJQAqgnAGg3QADgpghgNQgRgCgTAeQgTgGgKgpIgBghIAFgNIASgEIgDAMIgFAKIgCADIgCACIACAPIABAGIADAJIACADIAQAVQABgMAQgLIARAAQAOACAJALQAOAVACAZQACAsgZAnQgIAMgLAFIAygGQAdAAAcAIQAOAHgHAMQgiAXglgBIhpADIhyAFIiAAAQgwgDgugLIgEgPQAIgNAOgDIBSgDQgWglgMgrQgFgRAIgRQAKgVASgLQAbgIASAVIAGgIIAAgQQgEgjgBglQgBgOAOgLQAMgJAQAEIAegCQAJgOgJgSQgsgQgwADIhBAHIgugDIA3gZIgxgGIAIgBQAegHATgZQAQgWAAgaQgBgsgGguIAMgBIAsACIAeAKQAtgWAvAAQA0gBAwAVIBBgPIAYgBIgwBnQAGATAQALQAUAOAaAFQATAEAQAKIgrAFIAeAQIgQAFQg3ATg4gKQgWgEgUAIQgQAGABAGIgBAVIACABIAYACIAUAHIAEADAhaAsIgBAEIAAgBIABgD").cp();

	this.addChild(this.shape_92,this.shape_91);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.9,-28.2,52,56.6);


(lib.shape327 = function() {
	this.initialize();

	// Layer 1
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#29A09F").s().p("ABIAZIgGAIIgEAAIgGgBIgDAAIgBABQgLgOgQgFQgbgMggAFQgVADgQAMIAAgkIAUgMIAHgDIAOgDIANAAIANAAIAMAEIALAGIATANIAQALIAPAPIADAI").cp();
	this.shape_93.setTransform(0.2,0.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AA1AiIABAHIgCAAIgMgIIgEgDIgFgCIgEgDIgBAAQgpgOgoASIgQAHQgGACgBgFIAIgKQARgMAUgDQAhgFAbALQAQAGAKAOIAAAAABJAZIgDgIIgPgOIgQgMIgSgMIgMgGIgMgEIgNgBIgNABIgNADIgHACIgVANIgFADQgFADgCgFIAAgBQALgPAUgHIADgCIAKgDIAqADIAXAHIAHAEIAGAEIAGAFIAOANIANAMIAIAKQADACgCAEIgJAB").cp();

	this.addChild(this.shape_94,this.shape_93);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.2,-4.1,16.7,8.3);


(lib.shape326 = function() {
	this.initialize();

	// Layer 2
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("ABigPIAAAAQATACASAIIAFAFIgCAAQgTALgWADIACgEIACgOQABgGgEgFIAAAAABOgQIgDAGIgCALIAAAMIADADQgcAAgXgQIAGgCQAOgMASgCIAPAAAhhgOQgEAFACAGIABAOIADAEQgXgDgTgMIgCAAIAEgDIABgBQASgIATgCIAAAAAgfgBIAHACQgXAQgbAAIACgDIAAgMQAAgFgCgGIgDgGIAPAAQASACANAMIAAAA").cp();
	this.shape_95.setTransform(-3.3,-18.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("ACRgFIACABIASgRIAHgEIABAAIABAAIABABIAAABIABAAIAAACIAAACIgBACIgDABIgBAEIgDABIgPALIACADIAAADIgBABIgDABIgFgDIgIAFQgZANgaACQgYABgagJIgEgCQgLgEgEgHIgJABIAAgBIgBgBIAAgBIAEgDQAmgeAzAIIAQACQAPAGANAKIAAAAABigPIgBAAIAAABQAEAEgBAGIgBAOIgDAFQAWgEAUgLIACAAIgFgFQgSgHgTgDIAAAAABOgQIgPABQgSACgOALIgGACQAXAQAbABIgCgDIAAgNIACgLIADgGAisgYIABAAIAHAEQAHAKALAHIACgBQAMgKAQgGIAPgCQAzgIAnAeIAEADIAAABIgBACIgJgBQgEAHgLAEIgEACQgaAJgZgBQgagCgYgNIgIgFIgFADIgDgBIgBgCIAAgCIACgDIgPgLIgDgBIgBgDIAAgBIgDgBIgBgCIAAgEIAAAAIABgBIABgBIABAAAgfgBQgNgLgSgCIgPgBIADAGQACAGAAAFIAAANIgCADQAbgBAXgQIgHgCAhhgNIAAgBQgTADgSAHIgBACIgEACIACABQATALAXAEIgDgFIgBgOQgCgGAEgEIAAAA").cp();
	this.shape_96.setTransform(-3.2,-18.8);

	// Layer 1
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#29A09F").s().p("AghiRIA3AEQAHA2AoAsIAtAqIAHABQAGAMAEAYQAFAXgTAdQgUAdggAIQgMgBABgRQACghAFgeIADgOIAHgTIACgHIgBgGIgJAAQghA1AMBCIADAIIAEANIAJAIIgtgCIgGgWIgGhrIgBgDIgDABIgCCDIglAAQAEgKgBgMIgGhGQgDgWgIgXQgEgHgKACIAPB8QgvgMgSgtQgGgQABgTIAPgjIAQgSIAyhPQAMgXgBgYIAAAAAiDBQIABACIgBAAIAAgC").cp();
	this.shape_97.setTransform(-0.1,11.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#217E7D").s().p("AAOh5Ig3gDIAAgEQAAgMgEgLIgDgIIAVgIIAoAIQgCAQACAOIABAIACQgKIAKAJIAJANQAKA4gbApIgMASIgPAPQBWgIAhAJQAGAKgTAEQhbAMhDgLQAfgFAXgkQAYglgGgeQgGgfgEgBIgQgSIALgKQAKgHAKAHIAAAAAiLBkIAAADIAIARIACABIABACQAVAdAjAIIg0AIIhygKQAIgWBjAJIgIgSQgFgMgCABIgIgMQgEgMgOgUIgBgBQgHgNAAgPIABgSQAAgIAEgEIAFgFQADgCAFgCQAPgEAMAUIgEAIIgFANQgHAXAHAYIAEALIABAB").cp();
	this.shape_98.setTransform(0.6,9.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#33CCCC").s().p("ABEhKQARADAQgIQARgJAQgDIARABQgHAfgUAKQADATgFAUQgGAQANAPIAOASIA1ARIgnAEQAtAKgPAGQgPAGgcgCIg5gCQgeAFgcAJIgSgCIgGgBQAHgBAFgEQAIgFgCgJQgCgKgIABIgkABQgIADAAAHQAAAHAIAFQAFAEAHABQgnAOgogNQgYgIgaAAIg0AFIASgUIgUgBIgBgCIADgCQAigagCgfIgBgiIAEgMIgCgHIgLgPIgBgRIAdABIAoAMQAkgZAugDQArgDAqATIABABQAAADACABIAAAA").cp();
	this.shape_99.setTransform(-1.2,-17.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AACkbQAYADAWAMQALAGANgBIA2gPQATgGAPAFIgGALIgJAlIgUAaIgFAeIADAFQAGAOANAJQAWAQAdADIAMAGIAYAJIgqAFQAiAOgEADIgaAJIgwAJIgugEQgmgHgaAVIAAAxQAAAFAFAOQAEAQAUAVIApAvQAIAJAAgJQADgMAIgFIACgBIAFgCQAWgDASAPIADADIAEAFIACAEQANAjgHAoQgFAqgbAUIBegGQAKABAHAKIgCAPQgBAKgTAJQheARhOgNQgNAMgRAAQgSACgRgHQgZAJgbgJIgTgCIguAEIgIAAQhFgDg0gNQgOgJALgOQACgUBhAJIgHgLQgEgJgFgHIgWgkQgNggAMgaQACgMAWgNQATgCATAMIAHAEIAyhOQAOgVgCgiIAAgBIgDgbQgqgNgggBIgzAFQgTAGg9gGIA1gYIgxgHIAVgFQAigSAMglQAGgVgBgWIgWhCIADgCQAggIAgANIAVAHIARgHQAcgMAbgGIAyACAA3j4QgCgBAAgDIgBgBQgqgTgrADQguADgkAZIgngMIgdgBIABARIALAPIABAHIgEAMIACAkQACAfgiAaIgEACIACACIAUABIgSAUIA0gFQAaAAAYAIQAnANAogOQgHgBgFgEQgJgFABgHQgBgHAIgDIAkgBQAIgBACAKQACAJgIAFQgEAEgGABIAGABIAQACQAcgJAegFIA5ACQAcACAPgGQAPgGgtgKIAngEIg1gRIgOgSQgNgPAGgSQAFgUgDgTQAUgKAHgfIgRgBQgQADgRAJQgQAIgRgDIAAAAAgjgbQAAAYgLAVIgzBOIgPATIgPAlQgCATAGAPQASAtAvAMIgPh7QALgEAEAJQAIAWADAXIAGBFQAAANgDAJIAlABIACiDIAEgBIABADIAFBrIAFAWIAtABIgJgHIgDgNIgDgIQgNhCAig3IAJAAIABAIIgCAHIgHASIgEAPQgFAegBAgQgBASAMABQAggIATgdQATgegEgXQgFgXgGgNIgGgCIgtgqQgpgsgHg0IgBgIQgBgPABgPIgngJIgVAIIADAIQADAMABAMIAAADACWBVQgLgHgKAHIgKAMIAQASQADACAGAeQAGAegXAlQgYAlgfAEQBDALBcgLQASgEgGgLQghgJhWAJIAPgQIAMgRQAbgqgJg3IgJgQIgKgJAiFDIIAAAAIgBgCIAAgBIgEgMQgHgXAGgXIAFgOIAFgHQgMgWgQAGQgFABgDADIgFAEQgDAFAAAHIgBATQgBAOAIANIABABQANAUAEAMIAIAMQADAAAEAMIAJARQhjgJgIAXIBxAKIA1gIQgjgIgWgeIgBgBIgBgCIgIgRAh0BkIgCAAIABABIABgB").cp();
	this.shape_100.setTransform(0,0.1);

	this.addChild(this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.2,-28.4,52.7,57.2);


(lib.shape108 = function() {
	this.initialize();

	// Layer 2
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#CCCCCC").s().p("ABuApIASAIIgBAaIgRgiAhAAoQAVgHAcACIAPACIADAXIAABXQgkAFgbgTIgCgDIgRgMQgHgwAPgTIAHgLACQiOQAEAEAAAFQAAAGgEAEQgFAEgFAAIgHgEQgDgEADgGIACgJQAAgFAFAAQAFAAAFAFIAAAAACDBZIAIAXQAHAMAHAEIgTAIIgDgvAiHhsQgMgBgFgRQAGgLASABIgHAc").cp();
	this.shape_101.setTransform(3.7,20.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AA0ADQgJACgEgFQAJgOAKAKQAEAEgKADIAAAAAgtAJIgJAAIgEgDIAAgCIADgEQACgDAFAAIAEACQABABAAACIgCAH").cp();
	this.shape_102.setTransform(3,6.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#996600").s().p("ABtgUIACADIgHAwIg1ADQAKgBAIgHQAIgGAAgKQAAgKgIgGQgJgHgMAAQgMAAgIAHQgIAGAAAKQAAAKAIAGQAIAIAMAAIhRADQANgHgEgZIgTgQIAYgJQAPgIAEgJQAnAPAqADIAcgBAhNAAQgIAUALAPIAJADIgtgBIAGgnIAogHIgNAJ").cp();
	this.shape_103.setTransform(3.1,5.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6F6D4A").s().p("AD0AwIAIAOQALAsghAdIgcAXIgLhBIAWgMQABgdANgJIARAFAigiKIAlAUQg1Abg8gNIgRgMQAogWAXgPIAEgEQAJAKARAJIAAAA").cp();
	this.shape_104.setTransform(13.7,13.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#BCBC9C").s().p("ADlhhIAVAPIALAPQAhApgNAvQgNAvgsAYIgNAGQgOAHgMgBIgSgBQhMAFhAg+QgbgTgZATIgEAEIgSAOIgTAOQgfAVgbAIIgzAJIg2gFQgcgFgLgTQgMgTgCgZIgCgrIAGgnIACgIIALgSIARgTIAdgTQATgMAPABQA5AEAxAcQANgJAJAAIALAEIAAAYIATAMIAMAEIAYAAIAHgCIAWgNIAHgKIAGgTQAIgIAIADIAKAOQBJgeBPAPIAAAA").cp();
	this.shape_105.setTransform(-4.9,-8.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#999966").s().p("AE0l+QATAKAHACIAdAVQAWARgNAyIgDAJIgJAGQgSAPgegFQgOgCgKgMIgHgKIgSgnQgJgPgQgJQgXgNgTAQIgNALIgNANIgQAMIANAQQAXAaABAfIACAiIhRAFQgGgNgUgOQg7gVgzAIQg1AIgZAgIhQgUIAVg2IAHgOQAFgKgHgKQgagfgiAGQggAUgQAgQgSAggYAbIgPAOQgPALgOgIQgVgGgDgUIgBgGQgIhDA5gmIAwgeIAWgNQA0gLAiAgIAVAUIAKAIIALgQQAkghAYgLQAYgLAogCQAngCAjAQQAkAQAQAVIANAOIAGADIAEABIAJgGQAtgrA7gIQAegDAUALIAAAAAA6kWIgFgDIgGADIgDAGIADAGIAGADQADAAACgDIADgGIgDgGADZEDIgSgIIgBgDIgVgPIABAMIAVAvQAIAlAAAnQAQAIADAMIgHAIQhGAPgpgQQgDgIADgJIAGgHIABhNQAHgfgZglIgIAUIAAABIgRgCQgcgCgUAHIgBgOIgGgHQgIAJgGATIgKAwQAHApAAAqQg9AOg8gRQAKgfAZgBIAAgNIABAAIAFgzIAAgQIALgyIAjhXIAKgLQBtAFBzgMIAOAfQArAmA3ANQAMADAKAHQAVAPAJAXIAGATQANAwgaArIgEAHIgCAIIgFALQgyAQgzgIIgCgSIgMgJQAMgGAPgCQAhgJALAWQABgOgWgNQgkgWgMgrQAAgMAFgLQAGgRAKgFIAJgKQgRgIgSARIgJANIgCAOAhKkOQACADAEAAQAEAAACgDQACgCABgEQgBgEgCgCIgGgDIgGADIgDAGIADAG").cp();
	this.shape_106.setTransform(-5.2,-0.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AEHmZQAYAIAiASQAiASAEBFQABAYgUAPQgqAdgxgYQgYgTgOgsQgFgLgNgGIgQACIgUARIgEAFIgCAHIACAIIAKAXQAUAlgJAjQAoACAaAeQAkAqgCA4QgDAtghAYIg5AuIAEgBQAkABADAhIgMASQgIAKgWAAIAQAbICSBNIANgJIANglIAGgDQArgFAJAqQAJArgcAkQgVAcgeAKQgGAegKAeIgFAGQgEAFgoAOIhYADQg+AYhFgQQgLgDgGgJQgGgLAIgMIg1gIIgNgIIgIgJIgFgKIAFA1IgFAIQhKAShIgSIgHgKIAFgdIALgQIAYgLIAAgLIABAAIAFhQIAHgPIAAgQIALgiIAihAQgEgCgKgDQgLgDgKgNIgGgPIADgLQALgUAiAEIgigMIgNgOQg5AchBgEQgfgBgWgQIgXgQQgVgdACggQgDgyATgrQAYg1A5gVIAehRQgGgfgbADQgIANgTARQgUAQgRAnQgRAogmAJQgqAIgXgkIgDgNQgIgZAIgcIAEgKQAnhJBOgfQAsgSAxAUIAkAeIAXgWIAogaQAagPA2AFQBVgEA5A/IASgLQAWgPAYgMQARgJAYgGIAwACAAakXIACAGIgCAGQgDADgDAAIgGgDIgCgGIACgGIAGgDIAGADAETl/QgUgLgdADQg7AIguArIgIAGIgFgBIgFgDIgOgOQgQgVgjgQQgkgQgmACQgpACgYALQgYALgjAhIgMAQIgKgIIgUgUQgjgggzALIgXANIgvAeQg5AmAHBDIABAGQAEAUAUAGQAPAIAPgLIAOgOQAZgbARggQAQggAggUQAigGAbAfQAGAKgFAKIgHAOIgUA2IBQAUQAYggA1gIQA1gIA6AVQAUAOAGANIBRgFIgCgiQgCgfgWgaIgNgQIAPgMIAOgNIANgLQATgQAXANQAPAJAJAPIASAnIAIAKQAKAMAOACQAeAFARgPIAJgGIAEgJQANgygXgRIgdgVQgGgCgUgKIAAAAADHiwQhPgOhIAdIgKgOQgJgCgIAHIgFAUIgHAJIgVAOIgHACIgZAAIgNgFIgSgLIAAgYIgLgFQgKAAgMAKQgygcg4gFQgPgBgUAMIgcATIgRAUIgLARIgDAJIgFApIABArQACAZAMARQAMASAcAGIA2AEIAygIQAbgIAfgVIAUgNIASgOIAEgEQAbgTAaATQA+A8BMgEIATAAQAMABAOgGIAMgGQAtgXANgvQANgxghgoIgLgPIgWgQAgHD5IgHALQgPATAHAwIARAMIACADQAZATAmgFIAAhXIgDgXIgBgBIAJgUQAZAlgHAfIgBBNIgHAHQgDAJADAIQAqAQBFgPIAHgIQgDgMgQgIQABgngJglIgVgvIgBgMIAVAPIACADIAQAiIACgaIACgOIAIgNQATgRARAIIgKAKQgJAFgHARQgFALABAMQALArAlAWQAVANgBAOQgLgWghAJQgOACgNAGIAMAJIADASQAyAIAzgQIAFgLIABgIIAFgHQAZgrgMgwIgGgTQgKgXgVgPQgKgHgLgDQg4gNgqgmIgPgfQhzAMhtgFIgKALIgiBXIgMAyIAAAQIgFAzIAAAAIgBANQgZABgJAfQA8ARA9gOQABgqgIgpIALgwQAGgTAJgJIAFAHIABAOAGRC6IgRgFQgNAJgBAdIgWAMIALBBIAcgXQAhgdgLgsIgIgOADIBBQgEgFgFAAQgGAAABAFIgDAJQgCAGACAEIAIAEQAFAAAEgEQAEgEAAgGQAAgFgEgEIAAAAAChArIgdACQgpgEgogPQgFAKgPAHIgYAJIATATQAEAZgNAGIBTgDQgMAAgJgHQgIgHAAgKQAAgKAIgHQAJgIAMABQAMgBAIAIQAIAHAAAKQAAAKgIAHQgHAGgKABIA0gCIAHgyIgBgEABnBQQAJgEgEgFQgJgKgKAOQAFAHAJgCIAAAAAC8EqIADAvIATgIQgHgEgIgMIgHgXAhrkPIgCgGIACgGIAGgDIAHADQACACAAAEQAAAEgCACQgDADgEAAQgEAAgCgDIAAAAAgDAAQgRgJgJgKIgEAFQgXAOgoAUIARAMQA8ANAzgbIgjgSAgZBCIANgLIgoAGIgGApIAsABIgJgDQgKgPAIgTIAAAAAhOBjIAHgcQgSgBgGALQAFARAMABIAAAAAAEBWIABgHQABgEgBgBIgFgCQgCAAgDADIgDAGIABACIADADIAIAA").cp();
	this.shape_107.setTransform(-1.9,-0.7);

	// Layer 1
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#228C2F").s().p("ADkgkQBfAPAAAVQAAAWhfAPQheAQiGAAQiFAAhegQQhfgPAAgWQAAgVBfgPQBegQCFAAQCGAABeAQIAAAA").cp();
	this.shape_108.setTransform(12.8,37.5);

	this.addChild(this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45,-42.7,90.2,85.6);


(lib.shape49 = function() {
	this.initialize();

	// Layer 1
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(1,1,1).p("AgvADIAzgUIA2gQIAVgFQAbAMAFAeQABAHgHANIgUAEIgGABQgbAHgVANIgZAOIgMAFIgHADIgHgCIgDgBIgBAAQgKgEgHgHQgXgVAQgdIgCgCQgPgXgXAKIgDAAQAHgQgSgFIgEgBQADgSgHgSIAAgBIAAAAQAQAIAbgLQABASAcADIABAAIgBABQgJACAGAJQAEAGAHgBQgWANAFAVIAAABAguAKQAAgEgBgDIgDACAgwAHIACADQAPASAEAZIADAPAAGA/QgKgVANgYQAPgYAfAGQAPADAIALIAHAO");

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AgjAgQgMgUAOgXQAQgaAdAIQAOADAIAMIAHAOIgFAAQgcAFgTAOIgYAN").cp();
	this.shape_110.setTransform(4.4,3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgFgaQANASAEAXIADAPQgKgEgFgHQgXgTAQgdIACAD").cp();
	this.shape_111.setTransform(-4,3.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00FF00").s().p("AA1ANIgHgNQgIgLgOgDQgdgIgQAYQgOAZAMAUIgPAGIgHACIgHgBIgCgBIgCgBIgCgOQgEgagQgQQABgEgBgCIA0gXIA0gQIAWgFQAbAMAEAgQABAHgHALIgUAF").cp();
	this.shape_112.setTransform(3.2,1.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#CCCCCC").s().p("AAggPQgJACAGAJQAEAEAHAAQgWAMAFAXIAAABIgDACQgPgZgVAKIgDAAQAGgQgRgFIgFgBQAEgQgIgSIABgCQAQAJAZgLQABARAcAEIAAAB").cp();
	this.shape_113.setTransform(-7.1,-3.2);

	this.addChild(this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.1,-7.1,22.3,14.3);


(lib.shape44 = function() {
	this.initialize();

	// Layer 1
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#207979").s().p("AAGAZIAAAAIgKACIgTABIAJgOIAMgOIAKgMIANgNIACgCQAIAUgZAgIAAAA").cp();
	this.shape_114.setTransform(-5.7,-25.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B7ECEB").s().p("AAuBZIgXAMQgPAHgKgDQgNgEgLgdIgSguIgKgiIAAAAIABgBIgBgBIgEgnQgBgWAHgQQAGgRARgBIADABIABABIANAEIAMAFIAOAMQAZAcAKAdIAFAQQAHAegCAfIAAAQQAAAMgNAJIAAAA").cp();
	this.shape_115.setTransform(3.5,6.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#29A09F").s().p("AgwgoQgIgKgZADIgbAJIhOAmQgWAAgYgwQgEgHAFgJQABgJAJABQAKgDAFAGQAJAlAjgPIA3glQANgWgUgbIA0gDIAQgBIAEAAIAHgCIANAEQgRABgHAQQgHAQABAXIAEAnAA0A7IAJgCQASgSA2ADIAQAEQAJACAIAHQAUASgGAZQgbAvhrAKQCwgKANAMIgCAIIh2ALQhzAGjegFQgLgUCoABQhhgOgXgaQgMgIAIgSQAOgcAdgBQBHgHA+AWQgQgbhFgDQAHgNAAgPQAEgjgMgNQAagNAaACIAAABIAKAkIASAsQALAdAKADQAMADAQgHIAWgLAAPiRIA/gSIAGgKQAOgIASAFIANALIAGAJQAKATgKAKQgSAAgFgWIhIAjIgZgRQgNgHgNgDIAagE").cp();
	this.shape_116.setTransform(2.9,9.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#33CCCC").s().p("AAMg+IAFgCIADAAQAmgFApAYIALALIAGBDQgXAEgYgRIgGglQgHgHgJgDIgHgCIgKACIAAAAIgEAAIgUAWIAEAJIAJgDIANgIIAEgFIAKAAIAOAoQAgAjAZgOIABAFQABAYAeAKIgBABIgoANIgbAGIAAABIgUADIgQABIgxADIhLgDIgzgEIgSACIAXgaIgNgRQAMgTgCgFQgCgFAHggQAGgdAPgPQAPgPAggGIAIgIIAfgXIArgaIAAABIgMANIgNAOIgKAOIgJAOIASgBIALgCAAHgVQAMgJgCgHQgJAAgGAGIgYAbIAHAEIAWgV").cp();
	this.shape_117.setTransform(-6.3,-16.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAajgQAxAUgJAyIAAAYIAJALIgHAEIABAIQAbgNANAUIAHAMQAWgJAUANQANAHAEALQAIAVgIAXQgCAMgUgFQgQgHACgRIg+AfIAVAyIADALQAIAhgEAmIALAGIAugGQAJABAKAFQArATgDAtQgBAMgKAIIgiAaIBMAFQAZAGAEAGQAEAFgBAHQAAAHgwAHIieAGIhOgCIhHACQhFAFhDgIIgFgIQgCgCgBgKQgBgLAfAAIA3gDIglgYQgNgTAGgXQAIgcAcgIIAVgEIAdgDQALgMACgOQAAgXgHgUQgZAKgaASQgaARgYgUQgigeADgoIAGgHQAIgFAKgCQAPgEAKAMIAGAUIAVAAIAfgUIATgQQAIgHgVghIgcAAIAAgBIgNABIghABIhtgDIAWgOIAYgMIATgPIg6gDIAzgWIAQgtQAEgWAHgOQAJgQAOgLQAUgSAOgDQANgCAWgSQAWgSAZgKQAVgKAPgBIAGgBQAMAcgXAWQAdAEAaAMIAAAAAgujiIgEABQAZgigIgUIgDABIgsAaIggAYIgHAHQghAGgOAPQgPAPgHAfQgHAgADAFQACAFgMATIANARIgXAaIARgCIA0AEIBKADIAzgDIARgBIASgDIAAgBIAagGIApgNIAAgBQgdgKgCgYIAAgFQgaAOgegjIgNgqIgLAAIgEAFIgNALIgIACIgEgLIATgVIAFgBIAAAAIAJgBIAIACQAIACAHAHIAFAnQAXARAXgEIgGhFIgKgLQgogXglAEIgEABAgTA6QgagCgaANQAMANgEAlQAAAPgGANQBEADAPAbQg9gWhGAHQgeABgOAcQgIASANAIQAWAaBhAOQiogBAMAUQDdAFB0gGIB2gLIACgIQgOgMiwAKQBsgKAbgvQAGgZgVgSQgHgHgJgCIgQgEQg2gDgSASIgJACQANgJAAgNIAAgQQACgegHggIgFgQQgKgegZgZIgQgNIgMgFIgNgEIgBAAIgDgBIgLgEIgHACIgEAAIgQABIg0ADQAUAbgMAUIg3AlQgkAPgIglQgFgGgLADQgIgBgCAJQgFAJAFAHQAXAyAWgCIBOgmIAcgJQAYgDAJAKIABABIgBAAAArguIgcAEQAPADANAHIAZARIBJgjQAEAWATAAQAKgKgKgTIgHgJIgMgLQgSgFgOAIIgHAKIg/ASAg3i4IgYAVIgIgEIAbgbQAFgFAKgBQABAHgLAJIAAAA").cp();

	this.addChild(this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.4,-29.1,57,58.3);


(lib.shape43 = function() {
	this.initialize();

	// Layer 1
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(1,1,1).p("AgCgxQgEgFgJABIADgEQAMgLgJgNIAFgBQAIgFAGgGIABADQAHASAUgCQgIAGADANIAAACIAAAHIgCAFAAfAEIAAAAAAAgnIAAgBIgCgJAAAgnIgCAGQANABAJAJQAEADgDAFIADAEQACAFgHAEIgHACQgSAHgXAAIgFgBIgSADIgCgGQASgLAdgIIAcABAAeADQgEgGgBgLQACgOAEgNAg0AJQADAEACAGAgkBFIAEAPIABABQAYgDAHgVQAGgXgUgEAAeADIABABAgfBVQAHANAUgHIAmgNQALgEAKgGIgHgK");
	this.shape_119.setTransform(0.7,0.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF0000").s().p("AACgYQAWAEgIAVQgHAVgWADIgBgBIgEgPIADgBIARgOQAHgGgHgMIAAAA").cp();
	this.shape_120.setTransform(-1,6.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00FF00").s().p("AAwALIAGAKQgKAGgLAEIgmANQgUAHgHgNQAYgDAIgVQAGgVgVgEIAAgBQgMgLgQgCIgFgBQgCgGgDgEIASgDIAFABQAXAAASgIIATAEIAAABQgUAKABAQQAAAUATAGIASAA").cp();
	this.shape_121.setTransform(0.8,4.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B7ECEB").s().p("AAQhbIAAgCIACABIgBABIgBAAAA0gqIABAbQgBAbAIAcIACAIIgUAeIgQALIgRAEIgRABIgJAAIgSgIIgPgPIgEgHIgFgUIAAgMIgBgEQgBgaACgYIADgBIAGgDIADAOIABACQAHAKAVgEIAlgOQALgEAKgGIgGgJIASgF").cp();
	this.shape_122.setTransform(2.1,9.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AAbADQgTAJgVgBIgGAAIgSACIgBgGQARgLAbgIIAeABIADAEQACAFgGACIgIAD").cp();
	this.shape_123.setTransform(-0.8,-0.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#29A09F").s().p("AAahwIgDgBQgEgIgBgKQACgPAEgMIBXAEQAQAFADAMIABAOIgPATQgrAgg3ABQgFAAAEgCQgIgYAegIIAcgIQARgFAHgNIgvANQgLACgHAEIAAAAABFAcIgCgIQgIgaACgdIgBgbIABAAIAUgJQgVAwARAoIgIALAgzgqQgDAaACAYIAAAEIABAMIAFAUIAEAHIAPAPIARAIIAJAAIASgBIARgEIAPgLIgCACIALgGIAHgGIAHgGQAngfAxAPQAJACAGAHQASASgJAZQghAvhuAKQCygKAMAMIgDAIIh4ALQhyAGjfgFQgIgUCnABQhfgOgTgaQgMgIALgSQAXglAtAKIAtAIIARABIgkgXQALgLgBgSIgFgiQAWgEANgGIAAAAAg7hrQADAEACAHIgWACQgaAGgMASQAFAIAKgHQAOgKAPgBIAEgBIAJgBIAEgEQAIgGANAJQAHAMgNANIgGACIhEAXQgeAJgVgUIAAgLIBMhQIAIgRIBIgFIgCAHQANABAJAJQAEADgDAEIgcgBQgdAJgSANIACAF").cp();
	this.shape_124.setTransform(1.4,11.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#CCCCCC").s().p("AAVADQgFAMgBAPQABAKAEAIIgTgDIAIgEQAGgDgCgFIgDgFQADgEgDgDQgKgJgNgBIACgHIAAgBIgCgHQgEgFgJABIADgEQAOgLgLgNIAFgBQAKgEAFgGIABACQAGASAUgBQgIAFADAOIABABIAAAIIgCAD").cp();
	this.shape_125.setTransform(1.8,-4.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("ABuhJQgOgFgHgNIgBgCIAAgBIAAgBIAAgBIgEgDIAAgNQgbAOgcgjIgHgqIgLAAIgFAFQgGAGgHAFQgEACgEAAIgDgLIAVgVIAEgBIAAAAIAKgBIAIACIAOAJIABAnQAVARAXgEIAEhFIgJgLQgmgXgnAEIgCABIgEABQAcgigGgUIgCABQgVALgaAPQgbAQgHAIIgJAHQghAGgRAPQgQAPgLAfQgMAgACAFQABAFgOATIALARIgbAaIASgCIAzAEIBKADIAygDIACAJIAAABIhHAFIgIARIhLBOIAAALQAUAUAegJIBEgXIAHgCQANgNgHgMQgNgJgJAGIgEAEIgIABIgEABQgPABgPAKQgKAHgFgIQANgSAagGIAWgCIAFAAQAQACAMAMIAAAAQAGAMgGAHIgUAPIgCACIgGADIgDABQgNAGgVAEIAFAkQABASgLALIAjAXIgQgBIgugIQgsgKgYAlQgKASAMAIQATAaBfAOQiogBAIAUQDeAFB0gGIB4gLIADgIQgMgMiyAKQBugKAhgvQAJgZgSgSQgGgHgJgCQgxgPgnAfIgHAGIgHAGIgLAGIACgCIAUgeIAIgLQgRgqAVgwIgUAJIgBAAIgTAFIgSgBQgTgFAAgWQAAgQAUgKIAAAAIACgBQAHgEALgBIAvgMQgHAMgRAEIgcAIQgeAIAIAYQgEACAFAAQA3gBArggIAPgRIgBgOQgDgMgQgFIhXgEIACgFIAAgIIAAgBQAjgHAigMAAdkhIAGgBQAJAcgbAWQAdAEAbAMQAuAUgQAyIgEAYIAJALIgJAEIAAAJIADAEIAJgDQAOgDAKAHIADABQAAABABAAIAEAKIACABQABAHgGAFIgCACIgCABIAAADQgIANgmAHIAfADQAKABAIAFIANAHQAPAQgJASIguAoQgJARgDATQgDASABAOQABANAKAKIAkgHQARgDARAJQApATgJAtQgDAMgLAIIglAaIBLAFQAYAGADAGQADAFgBAHQgCAHgwAHIigAGIhMgCIhJACQhFAFhDgIIgDgIQgDgCABgKQABgLAfAAIA3gDIghgYQgLgTAJgXQAMgcAdgIIAugDQAXgUgJghIgKAEIgKACQghADgYgUQgIgSAJgOIAVgYQAMgNAUgOIAOgNIAJgTIhIAAIhsgDIAYgOIAZgMIAVgPIg6gDIA2gWIAWgtQAHgWAJgOQALgQAPgLQAYgSANgDQAOgCAZgSQAYgSAbgKQAUgKAPgBIAAAAAgSjCQAGgFAJgBQABAHgNAJIgbAVIgGgEQANgQARgLIAAAA").cp();

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#33CCCC").s().p("ACVBZQgiAMgjAHQgDgOAIgFQgUABgHgSIgBgCQgGAGgKAEIgFABQALANgOALIgDAEQAJgBAEAFIgyADIhKgDIgzgEIgSACIAbgaIgLgRQAPgTgCgFQgBgFALggQALgdARgPQAQgPAigGIAIgIQAHgHAagQQAagPAWgLIAAABIgOANIgOAOIgOAOIgLAOIAUgBIALgCIAFgCIADAAQAngFAmAYIAKALIgFBDQgWAEgWgRIgBglIgOgKIgIgCIgKACIAAAAIgEAAIgWAWIACAJQAFAAAEgDQAHgCAHgGIAFgFIALAAIAHAoQAcAjAbgOIAAANIAFADIAAABIAAABIAAABIAAACQAIANAOAFAAUgfQgRALgLAQIAHAEIAZgVQAMgJAAgHQgKAAgGAGIAAAA").cp();
	this.shape_127.setTransform(-4,-16.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#207979").s().p("AAbgbQAFAUgdAgIAAAAIgKACIgUABIALgOIAOgOIAMgMIAPgNIACgC").cp();
	this.shape_128.setTransform(-0.8,-25.1);

	this.addChild(this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.4,-29.1,52.9,58.3);


(lib.狗受伤 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// 图层 1
	this.instance = new lib.元件411("synched",0);
	this.instance.setTransform(37.6,-9.6,0.815,0.815);

	this.instance_1 = new lib.元件411("synched",0);
	this.instance_1.setTransform(27.6,-22.5,1.32,1.32);

	this.instance_2 = new lib.元件311("synched",0);

	this.instance_3 = new lib.元件211("synched",0);
	this.instance_3.setTransform(27.6,-11.3,0.998,0.998,46.2);

	this.instance_4 = new lib.元件111("synched",0);
	this.instance_4.setTransform(18.2,17.8,1,1.147,0,29.3,0);

	this.instance_5 = new lib.元件611("synched",0);
	this.instance_5.setTransform(-2.3,-11.9);

	this.instance_6 = new lib.元件511("synched",0);
	this.instance_6.setTransform(-0.8,-35.3,0.711,0.711);

	this.instance_7 = new lib.元件411("synched",0);
	this.instance_7.setTransform(5.9,-35.3,0.227,0.227);

	this.instance_8 = new lib.元件411("synched",0);
	this.instance_8.setTransform(-13.5,-35.3,0.227,0.227);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{scaleY:1.147,skewX:29.3,x:18.2,y:17.8}},{t:this.instance_3,p:{rotation:46.2,x:27.6,y:-11.3,scaleX:0.998,scaleY:0.998}},{t:this.instance_2},{t:this.instance_1,p:{scaleX:1.32,scaleY:1.32,rotation:0,x:27.6,y:-22.5}},{t:this.instance,p:{scaleX:0.815,scaleY:0.815,rotation:0,x:37.6,y:-9.6}}]}).to({state:[{t:this.instance_4,p:{scaleY:1.147,skewX:29.3,x:18.2,y:17.8}},{t:this.instance_3,p:{rotation:46.2,x:27.6,y:-11.3,scaleX:0.998,scaleY:0.998}},{t:this.instance_2},{t:this.instance_1,p:{scaleX:1.32,scaleY:1.32,rotation:0,x:27.6,y:-22.5}},{t:this.instance,p:{scaleX:0.815,scaleY:0.815,rotation:0,x:37.6,y:-9.6}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.147,skewX:29.3,x:18.2,y:17.8}},{t:this.instance_3,p:{rotation:46.2,x:27.6,y:-11.3,scaleX:0.998,scaleY:0.998}},{t:this.instance_2},{t:this.instance_1,p:{scaleX:1.32,scaleY:1.32,rotation:0,x:27.6,y:-22.5}},{t:this.instance,p:{scaleX:0.815,scaleY:0.815,rotation:0,x:37.6,y:-9.6}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.147,skewX:29.3,x:18.2,y:17.8}},{t:this.instance_3,p:{rotation:46.2,x:27.6,y:-11.3,scaleX:0.998,scaleY:0.998}},{t:this.instance_2},{t:this.instance_1,p:{scaleX:0.796,scaleY:0.796,rotation:-30.2,x:27.6,y:-22.5}},{t:this.instance,p:{scaleX:1.396,scaleY:1.396,rotation:40.9,x:37.6,y:-9.6}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.147,skewX:29.3,x:18.2,y:17.8}},{t:this.instance_3,p:{rotation:46.2,x:27.6,y:-11.3,scaleX:0.998,scaleY:0.998}},{t:this.instance_2},{t:this.instance_1,p:{scaleX:0.796,scaleY:0.796,rotation:-30.2,x:27.6,y:-22.5}},{t:this.instance,p:{scaleX:1.396,scaleY:1.396,rotation:40.9,x:37.6,y:-9.6}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.147,skewX:29.3,x:18.2,y:17.8}},{t:this.instance_3,p:{rotation:46.2,x:27.6,y:-11.3,scaleX:0.998,scaleY:0.998}},{t:this.instance_2},{t:this.instance_1,p:{scaleX:0.796,scaleY:0.796,rotation:-30.2,x:27.6,y:-22.5}},{t:this.instance,p:{scaleX:1.396,scaleY:1.396,rotation:40.9,x:37.6,y:-9.6}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.088,skewX:23.2,x:16.1,y:17.9}},{t:this.instance_3,p:{rotation:35.4,x:23.6,y:-11,scaleX:0.998,scaleY:0.998}},{t:this.instance_2},{t:this.instance_1,p:{scaleX:0.999,scaleY:0.999,rotation:-33,x:23.7,y:-24.3}},{t:this.instance,p:{scaleX:0.622,scaleY:0.622,rotation:34.1,x:34.7,y:-11.4}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.088,skewX:23.2,x:16.1,y:17.9}},{t:this.instance_3,p:{rotation:35.4,x:23.6,y:-11,scaleX:0.998,scaleY:0.998}},{t:this.instance_2},{t:this.instance_1,p:{scaleX:0.999,scaleY:0.999,rotation:-33,x:23.7,y:-24.3}},{t:this.instance,p:{scaleX:0.622,scaleY:0.622,rotation:34.1,x:34.7,y:-11.4}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.017,skewX:10.4,x:12.7,y:17.8}},{t:this.instance_3,p:{rotation:17,x:12.5,y:-12.1,scaleX:0.997,scaleY:0.997}},{t:this.instance_2},{t:this.instance_1,p:{scaleX:0.493,scaleY:0.493,rotation:-23.9,x:10.1,y:-22.2}},{t:this.instance,p:{scaleX:0.801,scaleY:0.801,rotation:-28.5,x:22.1,y:-18.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.017,skewX:10.4,x:12.7,y:17.8}},{t:this.instance_3,p:{rotation:17,x:12.5,y:-12.1,scaleX:0.997,scaleY:0.997}},{t:this.instance_2},{t:this.instance_1,p:{scaleX:0.493,scaleY:0.493,rotation:-23.9,x:10.1,y:-22.2}},{t:this.instance,p:{scaleX:0.801,scaleY:0.801,rotation:-28.5,x:22.1,y:-18.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:0.711,scaleY:0.711,x:-0.8,y:-35.3}},{t:this.instance_3,p:{rotation:1.7,x:-2.3,y:-11.9,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.3,y:-11.9}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:0.711,scaleY:0.711,x:-0.8,y:-35.3}},{t:this.instance_3,p:{rotation:1.7,x:-2.3,y:-11.9,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.3,y:-11.9}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:0.711,scaleY:0.711,x:-0.8,y:-35.3}},{t:this.instance_3,p:{rotation:1.7,x:-2.3,y:-11.9,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.3,y:-11.9}},{t:this.instance_8,p:{x:-13.5}},{t:this.instance_7,p:{x:5.9}},{t:this.instance_1,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:22.7,y:-35.3}},{t:this.instance,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:38.6,y:-35.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:0.711,scaleY:0.711,x:-0.8,y:-35.3}},{t:this.instance_3,p:{rotation:1.7,x:-2.3,y:-11.9,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.3,y:-11.9}},{t:this.instance_8,p:{x:-26.5}},{t:this.instance_7,p:{x:-7}},{t:this.instance_1,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:9.7,y:-35.3}},{t:this.instance,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:25.6,y:-35.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-0.1,y:-31.8}},{t:this.instance_3,p:{rotation:1.7,x:-2.9,y:-7.5,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.9,y:-7.5}},{t:this.instance_8,p:{x:-29.8}},{t:this.instance_7,p:{x:-10.3}},{t:this.instance_1,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:6.5,y:-35.3}},{t:this.instance,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:22.3,y:-35.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-0.1,y:-31.8}},{t:this.instance_3,p:{rotation:1.7,x:-2.9,y:-7.5,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.9,y:-7.5}},{t:this.instance_8,p:{x:-13.5}},{t:this.instance_7,p:{x:5.9}},{t:this.instance_1,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:22.7,y:-35.3}},{t:this.instance,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:38.6,y:-35.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-0.1,y:-31.8}},{t:this.instance_3,p:{rotation:1.7,x:-2.9,y:-7.5,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.9,y:-7.5}},{t:this.instance_8,p:{x:-26.5}},{t:this.instance_7,p:{x:-7}},{t:this.instance_1,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:9.7,y:-35.3}},{t:this.instance,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:25.6,y:-35.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-0.1,y:-31.8}},{t:this.instance_3,p:{rotation:1.7,x:-2.9,y:-7.5,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.9,y:-7.5}},{t:this.instance_8,p:{x:-29.8}},{t:this.instance_7,p:{x:-10.3}},{t:this.instance_1,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:6.5,y:-35.3}},{t:this.instance,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:22.3,y:-35.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-0.1,y:-36.3}},{t:this.instance_3,p:{rotation:1.7,x:-2.3,y:-11.9,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.3,y:-11.9}},{t:this.instance_8,p:{x:-13.5}},{t:this.instance_7,p:{x:5.9}},{t:this.instance_1,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:22.7,y:-35.3}},{t:this.instance,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:38.6,y:-35.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-0.1,y:-36.3}},{t:this.instance_3,p:{rotation:1.7,x:-2.3,y:-11.9,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.3,y:-11.9}},{t:this.instance_8,p:{x:-26.5}},{t:this.instance_7,p:{x:-7}},{t:this.instance_1,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:9.7,y:-35.3}},{t:this.instance,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:25.6,y:-35.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-0.1,y:-36.3}},{t:this.instance_3,p:{rotation:1.7,x:-2.3,y:-11.9,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.3,y:-11.9}},{t:this.instance_8,p:{x:-29.8}},{t:this.instance_7,p:{x:-10.3}},{t:this.instance_1,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:6.5,y:-35.3}},{t:this.instance,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:22.3,y:-35.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-0.1,y:-36.3}},{t:this.instance_3,p:{rotation:1.7,x:-2.3,y:-11.9,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.3,y:-11.9}},{t:this.instance_8,p:{x:-13.5}},{t:this.instance_7,p:{x:5.9}},{t:this.instance_1,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:22.7,y:-35.3}},{t:this.instance,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:38.6,y:-35.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-1.1,y:-32.5}},{t:this.instance_3,p:{rotation:1.7,x:-2.9,y:-7.5,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.9,y:-7.5}},{t:this.instance_8,p:{x:-26.5}},{t:this.instance_7,p:{x:-7}},{t:this.instance_1,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:9.7,y:-35.3}},{t:this.instance,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:25.6,y:-35.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-1.1,y:-32.5}},{t:this.instance_3,p:{rotation:1.7,x:-2.9,y:-7.5,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.9,y:-7.5}},{t:this.instance_8,p:{x:-29.8}},{t:this.instance_7,p:{x:-10.3}},{t:this.instance_1,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:6.5,y:-35.3}},{t:this.instance,p:{scaleX:0.227,scaleY:0.227,rotation:0,x:22.3,y:-35.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-1.1,y:-32.5}},{t:this.instance_3,p:{rotation:1.7,x:-2.9,y:-7.5,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.9,y:-7.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-1.1,y:-32.5}},{t:this.instance_3,p:{rotation:1.7,x:-2.9,y:-7.5,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.9,y:-7.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-0.1,y:-36.3}},{t:this.instance_3,p:{rotation:1.7,x:-2.3,y:-11.9,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.3,y:-11.9}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-0.1,y:-36.3}},{t:this.instance_3,p:{rotation:1.7,x:-2.3,y:-11.9,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.3,y:-11.9}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-0.1,y:-36.3}},{t:this.instance_3,p:{rotation:1.7,x:-2.3,y:-11.9,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.3,y:-11.9}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,skewX:-0.8,x:9.6,y:17.8}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:-1.1,y:-32.5}},{t:this.instance_3,p:{rotation:1.7,x:-2.9,y:-7.5,scaleX:0.997,scaleY:0.997}},{t:this.instance_5,p:{x:-2.9,y:-7.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-48.3,80.7,82);


(lib.瓶子 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// 图层 1
	this.instance_9 = new lib.元件1_1("synched",0);
	this.instance_9.setTransform(14.8,-104.2,1.557,1.557,0,-68.1,111.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({skewX:-64.7,skewY:115.1,x:-27.1,y:-128.4},0).wait(1).to({skewX:-61.5,skewY:118.3,x:-69.2,y:-147.2},0).wait(1).to({scaleX:1.56,scaleY:1.56,skewX:-58.4,skewY:121.4,x:-110.6,y:-162.4},0).wait(1).to({skewX:-55.4,skewY:124.4,x:-152.1,y:-172.9},0).wait(1).to({scaleX:1.56,scaleY:1.56,skewX:-52.4,skewY:127.4,x:-193.3,y:-178.7},0).wait(1).to({skewX:-49.7,skewY:130.1,x:-233.8,y:-179.7},0).wait(1).to({skewX:-46.9,skewY:132.9,x:-272.8,y:-176.4},0).wait(1).to({scaleY:1.55,skewX:-44.2,skewY:135.6,x:-310.1,y:-169.1},0).wait(1).to({scaleX:1.55,skewX:-41.7,skewY:138.1,x:-343.7,y:-154.5},0).wait(1).to({skewX:-39.2,skewY:140.6,x:-372.4,y:-131.7},0).wait(1).to({skewX:-36.9,skewY:142.9,x:-394.9,y:-104.6},0).wait(1).to({skewX:-34.4,skewY:145.4,x:-411.3,y:-111.5},0).wait(1).to({skewX:-32.2,skewY:147.6,x:-432.5,y:-119.1,alpha:0.34},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-124.5,33.5,40.5);


(lib.猫笑 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// 图层 1
	this.instance_10 = new lib.元件4("synched",0);
	this.instance_10.setTransform(-14.1,-18.7,1.354,1.354);

	this.instance_11 = new lib.元件4("synched",0);
	this.instance_11.setTransform(10.6,-19.1,1.278,1.278);

	this.instance_12 = new lib.元件3("synched",0);
	this.instance_12.setTransform(1.3,-4.4);

	this.instance_13 = new lib.元件2("synched",0);

	this.instance_14 = new lib.元件1("synched",0);

	this.instance_15 = new lib.元件5("synched",0);

	this.instance_16 = new lib.元件6("synched",0);

	this.instance_17 = new lib.元件7("synched",0);

	this.instance_18 = new lib.元件8("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_15},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_15},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_15},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_15},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_16},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_16},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_16},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_16},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_17},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_17},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_17},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_17},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-4.4}},{t:this.instance_11,p:{y:-19.1}},{t:this.instance_10,p:{y:-18.7}}]},1).to({state:[{t:this.instance_18},{t:this.instance_13},{t:this.instance_12,p:{y:-2}},{t:this.instance_11,p:{y:-13.9}},{t:this.instance_10,p:{y:-13.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.9,-32.6,70.5,61.4);


(lib.猫扔 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_1 = function() {
		playSound("sound244");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(18));

	// Layer 3
	this.instance_19 = new lib.shape374("synched",0);
	this.instance_19.setTransform(40.9,22.7,0.999,0.999,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({scaleX:1.1,scaleY:1,rotation:-1.6,x:59.6,y:28},1).to({rotation:2.5,x:60.1,y:29.1},1).to({scaleX:1.1,scaleY:1,rotation:7,x:59.9,y:30.5},1).wait(17));

	// Layer 2
	this.instance_20 = new lib.shape373("synched",0);
	this.instance_20.setTransform(41.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({scaleY:1,skewX:2.5,x:42.9},0).wait(19));

	// Layer 1
	this.instance_21 = new lib.shape330("synched",0);
	this.instance_21.setTransform(18,39.8,0.998,0.998,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleX:1,scaleY:1,rotation:17.4,x:21.1,y:34},2).to({rotation:25.9,x:22.9,y:32.7},1).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,66.9,58.3);


(lib.猫攻击_修正 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// 图层 1
	this.instance_22 = new lib.shape326("synched",0);
	this.instance_22.setTransform(270.5,-7.5);

	this.instance_23 = new lib.shape329("synched",0);
	this.instance_23.setTransform(253,23.5);

	this.instance_24 = new lib.shape328("synched",0);
	this.instance_24.setTransform(275,-5.6,1,1.005,0,6,0);

	this.instance_25 = new lib.shape327("synched",0);
	this.instance_25.setTransform(289,-5);

	this.instance_26 = new lib.shape43("synched",0);
	this.instance_26.setTransform(277.1,-5.9);

	this.instance_27 = new lib.shape330("synched",0);
	this.instance_27.setTransform(250.1,9);

	this.instance_28 = new lib.shape332("synched",0);
	this.instance_28.setTransform(276.5,-3.9);

	this.instance_29 = new lib.shape331("synched",0);
	this.instance_29.setTransform(276.5,-3.9);

	this.instance_30 = new lib.shape49("synched",0);
	this.instance_30.setTransform(252.8,-5.7);

	this.instance_31 = new lib.shape44("synched",0);
	this.instance_31.setTransform(275.5,-5.9);

	this.instance_32 = new lib.shape333("synched",0);
	this.instance_32.setTransform(276.5,-3.9);

	this.instance_33 = new lib.shape334("synched",0);
	this.instance_33.setTransform(277.1,-3.9);

	this.instance_34 = new lib.shape335("synched",0);
	this.instance_34.setTransform(277.1,-3.9);

	this.instance_35 = new lib.shape336("synched",0);
	this.instance_35.setTransform(277.1,-3.9);

	this.instance_36 = new lib.shape337("synched",0);
	this.instance_36.setTransform(277.1,-3.9);

	this.instance_37 = new lib.shape338("synched",0);
	this.instance_37.setTransform(277.1,-3.9);

	this.instance_38 = new lib.shape339("synched",0);
	this.instance_38.setTransform(277.1,-3.9);

	this.instance_39 = new lib.shape340("synched",0);
	this.instance_39.setTransform(277.1,-3.9);

	this.instance_40 = new lib.shape341("synched",0);
	this.instance_40.setTransform(277.1,-3.9);

	this.instance_41 = new lib.shape342("synched",0);
	this.instance_41.setTransform(277.1,-3.9);

	this.instance_42 = new lib.shape343("synched",0);
	this.instance_42.setTransform(277.1,-3.9);

	this.instance_43 = new lib.shape344("synched",0);
	this.instance_43.setTransform(277.1,-3.9);

	this.instance_44 = new lib.shape345("synched",0);
	this.instance_44.setTransform(277.1,-3.9);

	this.instance_45 = new lib.shape346("synched",0);
	this.instance_45.setTransform(277.1,-3.9);

	this.instance_46 = new lib.shape347("synched",0);
	this.instance_46.setTransform(277.1,-3.9);

	this.instance_47 = new lib.shape348("synched",0);
	this.instance_47.setTransform(277.1,-3.9);

	this.instance_48 = new lib.shape349("synched",0);
	this.instance_48.setTransform(277.1,-3.9);

	this.instance_49 = new lib.shape350("synched",0);
	this.instance_49.setTransform(277.1,-3.9);

	this.instance_50 = new lib.shape351("synched",0);
	this.instance_50.setTransform(277.1,-3.9);

	this.instance_51 = new lib.shape352("synched",0);
	this.instance_51.setTransform(277.1,-3.9);

	this.instance_52 = new lib.shape353("synched",0);
	this.instance_52.setTransform(277.1,-3.9);

	this.instance_53 = new lib.shape354("synched",0);
	this.instance_53.setTransform(277.1,-3.9);

	this.instance_54 = new lib.shape355("synched",0);
	this.instance_54.setTransform(277.1,-3.9);

	this.instance_55 = new lib.shape356("synched",0);
	this.instance_55.setTransform(277.1,-3.9);

	this.instance_56 = new lib.shape357("synched",0);
	this.instance_56.setTransform(277.1,-3.9);

	this.instance_57 = new lib.shape358("synched",0);
	this.instance_57.setTransform(277.1,-3.9);

	this.instance_58 = new lib.shape359("synched",0);
	this.instance_58.setTransform(277.1,-3.9);

	this.instance_59 = new lib.shape360("synched",0);
	this.instance_59.setTransform(277.1,-3.9);

	this.instance_60 = new lib.shape361("synched",0);
	this.instance_60.setTransform(277.1,-3.9);

	this.instance_61 = new lib.shape362("synched",0);
	this.instance_61.setTransform(277.1,-3.9);

	this.instance_62 = new lib.shape363("synched",0);
	this.instance_62.setTransform(277.1,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22}]}).to({state:[{t:this.instance_25,p:{scaleX:1,scaleY:1,rotation:0,x:289,y:-5}},{t:this.instance_24,p:{scaleY:1.005,skewX:6,x:275,y:-5.6}},{t:this.instance_23,p:{rotation:0,x:253,y:23.5}}]},9).to({state:[{t:this.instance_25,p:{scaleX:1,scaleY:1,rotation:0,x:289,y:-5}},{t:this.instance_24,p:{scaleY:1.005,skewX:6,x:275,y:-5.6}},{t:this.instance_23,p:{rotation:0,x:253,y:23.5}}]},1).to({state:[{t:this.instance_25,p:{scaleX:0.999,scaleY:0.999,rotation:11.8,x:288.5,y:-4.8}},{t:this.instance_24,p:{scaleY:1.015,skewX:9.9,x:275.7,y:-5.9}},{t:this.instance_23,p:{rotation:8.3,x:251.7,y:21.1}}]},1).to({state:[{t:this.instance_25,p:{scaleX:1,scaleY:1,rotation:0,x:289,y:-5}},{t:this.instance_24,p:{scaleY:1.005,skewX:6,x:275,y:-5.6}},{t:this.instance_23,p:{rotation:0,x:253,y:23.5}}]},1).to({state:[{t:this.instance_25,p:{scaleX:1,scaleY:1,rotation:0,x:289,y:-5}},{t:this.instance_24,p:{scaleY:1.005,skewX:6,x:275,y:-5.6}},{t:this.instance_23,p:{rotation:0,x:253,y:23.5}}]},1).to({state:[{t:this.instance_25,p:{scaleX:0.999,scaleY:0.999,rotation:11.8,x:288.5,y:-4.8}},{t:this.instance_24,p:{scaleY:1.015,skewX:9.9,x:275.7,y:-5.9}},{t:this.instance_23,p:{rotation:8.3,x:251.7,y:21.1}}]},1).to({state:[{t:this.instance_25,p:{scaleX:0.999,scaleY:0.999,rotation:11.8,x:288.5,y:-4.8}},{t:this.instance_24,p:{scaleY:1.015,skewX:9.9,x:275.7,y:-5.9}},{t:this.instance_23,p:{rotation:8.3,x:251.7,y:21.1}}]},1).to({state:[{t:this.instance_25,p:{scaleX:1,scaleY:1,rotation:0,x:289,y:-5}},{t:this.instance_24,p:{scaleY:1.005,skewX:6,x:275,y:-5.6}},{t:this.instance_23,p:{rotation:0,x:253,y:23.5}}]},1).to({state:[{t:this.instance_25,p:{scaleX:1,scaleY:1,rotation:0,x:289,y:-5}},{t:this.instance_24,p:{scaleY:1.005,skewX:6,x:275,y:-5.6}},{t:this.instance_23,p:{rotation:0,x:253,y:23.5}}]},1).to({state:[{t:this.instance_25,p:{scaleX:1,scaleY:1,rotation:0,x:289,y:-5}},{t:this.instance_24,p:{scaleY:1.005,skewX:6,x:275,y:-5.6}},{t:this.instance_23,p:{rotation:0,x:253,y:23.5}}]},1).to({state:[{t:this.instance_25,p:{scaleX:0.999,scaleY:0.999,rotation:11.8,x:288.5,y:-4.8}},{t:this.instance_24,p:{scaleY:1.015,skewX:9.9,x:275.7,y:-5.9}},{t:this.instance_23,p:{rotation:8.3,x:251.7,y:21.1}}]},1).to({state:[{t:this.instance_25,p:{scaleX:0.999,scaleY:0.999,rotation:11.8,x:288.5,y:-4.8}},{t:this.instance_24,p:{scaleY:1.015,skewX:9.9,x:275.7,y:-5.9}},{t:this.instance_23,p:{rotation:8.3,x:251.7,y:21.1}}]},1).to({state:[{t:this.instance_25,p:{scaleX:0.999,scaleY:0.999,rotation:11.8,x:288.5,y:-4.8}},{t:this.instance_24,p:{scaleY:1.015,skewX:9.9,x:275.7,y:-5.9}},{t:this.instance_23,p:{rotation:8.3,x:251.7,y:21.1}}]},1).to({state:[{t:this.instance_25,p:{scaleX:1,scaleY:1,rotation:0,x:289,y:-5}},{t:this.instance_24,p:{scaleY:1.005,skewX:6,x:275,y:-5.6}},{t:this.instance_23,p:{rotation:0,x:253,y:23.5}}]},1).to({state:[{t:this.instance_25,p:{scaleX:0.999,scaleY:0.999,rotation:11.8,x:288.5,y:-4.8}},{t:this.instance_24,p:{scaleY:1.015,skewX:9.9,x:275.7,y:-5.9}},{t:this.instance_23,p:{rotation:8.3,x:251.7,y:21.1}}]},1).to({state:[{t:this.instance_25,p:{scaleX:0.999,scaleY:0.999,rotation:11.8,x:288.5,y:-4.8}},{t:this.instance_24,p:{scaleY:1.015,skewX:9.9,x:275.7,y:-5.9}},{t:this.instance_23,p:{rotation:8.3,x:251.7,y:21.1}}]},1).to({state:[{t:this.instance_27,p:{rotation:0,x:250.1,y:9,scaleX:1,scaleY:1}},{t:this.instance_26,p:{scaleY:1,skewX:0,x:277.1}}]},1).to({state:[{t:this.instance_27,p:{rotation:0,x:250.1,y:9,scaleX:1,scaleY:1}},{t:this.instance_26,p:{scaleY:1,skewX:0,x:277.1}}]},1).to({state:[{t:this.instance_27,p:{rotation:7.1,x:249.5,y:7.7,scaleX:1,scaleY:1}},{t:this.instance_26,p:{scaleY:1.003,skewX:-4.5,x:276.6}}]},1).to({state:[{t:this.instance_27,p:{rotation:7.1,x:249.5,y:7.7,scaleX:1,scaleY:1}},{t:this.instance_26,p:{scaleY:1.003,skewX:-4.5,x:276.6}}]},1).to({state:[{t:this.instance_27,p:{rotation:16.3,x:250.9,y:4.3,scaleX:0.999,scaleY:0.999}},{t:this.instance_26,p:{scaleY:1.009,skewX:-7.6,x:274.9}}]},1).to({state:[{t:this.instance_27,p:{rotation:16.3,x:250.9,y:4.3,scaleX:0.999,scaleY:0.999}},{t:this.instance_26,p:{scaleY:1.009,skewX:-7.6,x:274.9}}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:249.2,y:3.9,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1,skewX:0,x:275.5,y:-5.9}},{t:this.instance_30,p:{x:252.8,y:-5.7}},{t:this.instance_29,p:{x:276.5}},{t:this.instance_28}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:249.2,y:3.9,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1,skewX:0,x:275.5,y:-5.9}},{t:this.instance_30,p:{x:252.8,y:-5.7}},{t:this.instance_29,p:{x:276.5}},{t:this.instance_32}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_33}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_34}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_35}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_36}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_37}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_38}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_39}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_40}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_41}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_42}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_43}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_44}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_45}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_46}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_47}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_48}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_49}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_50}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_51}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_52}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_53}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_54}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_55}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_56}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_57}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_58}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_59}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_60}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_61}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_62}]},1).to({state:[{t:this.instance_27,p:{rotation:-8.4,x:248.5,y:5,scaleX:0.998,scaleY:0.998}},{t:this.instance_31,p:{scaleY:1.005,skewX:-5.4,x:273.5,y:-6.2}},{t:this.instance_30,p:{x:249.9,y:-5.4}},{t:this.instance_29,p:{x:277.1}},{t:this.instance_62}]},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(244.2,-36,52.7,57.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;