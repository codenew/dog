(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.B = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// 图层 3
	this.instance = new lib.Dog_xiao();
	this.instance.setTransform(467,329,0.98,0.98,0,0,0,43,37);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).wait(47));

	// 图层 8
	this.instance_1 = new lib.狗骨头();
	this.instance_1.setTransform(452.8,283.8,1,1,0,0,0,37.2,-58.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).to({_off:true},12).wait(47));

	// 图层 5
	this.instance_2 = new lib.DOG_throw();
	this.instance_2.setTransform(468.9,316.7,1.01,0.782,0,0,0,54.6,53.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({_off:true},14).wait(47));

	// Dog_attack
	this.instance_3 = new lib.Dog_attack();
	this.instance_3.setTransform(455.4,328.3,0.869,0.869,0,0,0,3.4,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},54).wait(61));

	// Cat_hurt
	this.instance_4 = new lib.Cat_hurt();
	this.instance_4.setTransform(46,301.3,1,1,0,0,0,28.9,28.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(67).to({_off:false},0).wait(48));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhhgNIAAgBQgTADgSAHIgBACIgEACIACABQATALAXAEIgDgFIgBgOQgCgGAEgEIAAAAAhIAPIgCADQAbgBAXgQIgHgCQgNgLgSgCIgPgBIADAGQACAGAAAFIAAANAgHAEIgBACIgJgBQgEAHgLAEIgEACQgaAJgZgBQgagCgYgNIgIgFIgFADIgDgBIgBgCIAAgCIACgDIgPgLIgDgBIgBgDIAAgBIgDgBIgBgCIAAgEIAAAAIABgBIABgBIABAAIABAAIAHAEQAHAKALAHIACgBQAMgKAQgGIAPgCQAzgIAnAeIAEADIAAABACSAFIgIAFQgZANgaACQgYABgagJIgEgCQgLgEgEgHIgJABIAAgBIgBgBIAAgBIAEgDQAmgeAzAIIAQACQAPAGANAKIACABIASgRIAHgEIABAAIABAAIABABIAAABIABAAIAAACIAAACIgBACIgDABIgBAEIgDABIgPALIACADIAAADIgBABIgDABIgFgDABigPIgBAAIAAABQAEAEgBAGIgBAOIgDAFQAWgEAUgLIACAAIgFgFQgSgHgTgDIAAAAAAfgCIgGACQAXAQAbABIgCgDIAAgNIACgLIADgGIgPABQgSACgOALIAAAA").cp();
	this.shape.setTransform(40.7,281.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhIAOIAAgMQAAgFgCgGIgDgGIAPAAQASACANAMIAHACQgXAQgbAAIACgDAhhgOQgEAFACAGIABAOIADAEQgXgDgTgMIgCAAIAEgDIABgBQASgIATgCIAAAAABhgPIABAAQATACASAIIAFAFIgCAAQgUALgWADIADgEIABgOQABgGgEgFIAAAAAAfgCQAOgMASgCIAPAAIgDAGIgCALIAAAMIACADQgbAAgXgQIAGgC").cp();
	this.shape_1.setTransform(40.7,281.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#29A09F").s().p("AghiRIA3AEQAHA2AoAtIAtAqIAHAAQAGAMAEAYQAFAWgTAeQgUAdggAIQgMAAABgTQACgfAFgfIADgOIAHgTIACgHIgBgGIgJAAQghA1AMBDIADAHIAEANIAJAIIgtgBIgGgWIgGhrIgBgDIgDAAIgCCEIglgCQAEgIgBgOIgGhEQgDgXgIgWQgEgIgKACIAPB8QgvgNgSgtQgGgPABgTIAPgiIAQgUIAyhNQAMgXgBgZIAAAAAiDBQIABADIgBAAIAAgD").cp();
	this.shape_2.setTransform(43.8,312.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#217E7D").s().p("AAOh5Ig3gDIAAgEQAAgMgEgLIgDgIIAVgIIAoAIQgCAQACAOIABAIACQgKIAKAJIAJANQAKA4gbApIgMASIgPAPQBWgIAhAJQAGAKgTAEQhbAMhDgLQAfgFAXgkQAYglgGgeQgGgfgEgBIgQgSIALgKQAKgHAKAHIAAAAAiLBkIAAADIAIARIACABIABACQAVAdAjAIIg0AIIhygKQAIgWBjAJIgIgSQgFgMgCABIgIgMQgEgMgOgUIgBgBQgHgNAAgPIABgSQAAgIAEgEIAFgFQADgCAFgCQAPgEAMAUIgEAIIgFANQgHAXAHAYIAEALIABAB").cp();
	this.shape_3.setTransform(44.6,310.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CCCC").s().p("AiqhQIAdABIAnAMQAkgZAugDQArgDAqATIABABQAAADACABQARADAQgIQARgJAQgDIARABQgHAfgUAKQADATgFAUQgGAQANAPIAOASIA1ARIgnAEQAtAKgPAGQgPAGgcgCIg5gCQgeAFgcAJIgSgCIgGgBQAHgBAFgEQAIgFgCgJQgCgKgIABIgkABQgIADABAHQgBAHAJAFQAFAEAHABQgoAOgngNQgYgIgaAAIg0AFIASgUIgUgBIgCgCIAEgCQAhgagBgfIgCgiIAEgMIgBgHIgLgPIgBgR").cp();
	this.shape_4.setTransform(42.8,283.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AkChlIAVgFQAigSAMglQAGgVgBgWIgWhCIADgCQAggIAgANIAVAHIARgHQAcgMAbgGIAyACQAYADAWAMQALAGANgBIA2gPQATgGAPAFIgGALIgJAlIgUAaIgFAeIADAFQAGAOANAJQAWAQAdADIAMAGIAYAJIgqAFQAiAOgEADIgaAJIgwAJIgugEQgmgHgaAVIAAAxQAAAFAFAOQAEAQAUAVIApAvQAIAJAAgJQADgMAIgFIACgBIAFgCQAWgDASAPIADADIAEAFIACAEQANAjgHAoQgFAqgbAUIBegGQAKABAHAKIgCAPQgBAKgTAJQheARhOgNQgNAMgRAAQgSACgRgHQgZAJgbgJIgTgCIguAEIgIAAQhFgDg0gNQgOgJALgOQACgUBhAJIgHgLQgEgJgFgHIgWgkQgNggAMgaQACgMAWgNQATgCATAMIAHAEIAyhOQAOgVgCgiIAAgBIgDgbQgqgNgggBIgzAFQgTAGg9gGIA1gYIgxgHAi3j+IABARIALAPIABAHIgEAMIACAkQACAfgiAaIgEACIACACIAUABIgSAUIA0gFQAaAAAYAIQAnANAogOQgHgBgFgEQgJgFABgHQgBgHAIgDIAkgBQAIgBACAKQACAJgIAFQgEAEgGABIAGABIAQACQAcgJAegFIA5ACQAcACAPgGQAPgGgtgKIAngEIg1gRIgOgSQgNgPAGgSQAFgUgDgTQAUgKAHgfIgRgBQgQADgRAJQgQAIgRgDQgCgBAAgDIgBgBQgqgTgrADQguADgkAZIgngMIgdgBAgjgbQAAAYgLAVIgzBOIgPATIgPAlQgCATAGAPQASAtAvAMIgPh7QALgEAEAJQAIAWADAXIAGBFQAAANgDAJIAlABIACiDIAEgBIABADIAFBrIAFAWIAtABIgJgHIgDgNIgDgIQgNhCAig3IAJAAIABAIIgCAHIgHASIgEAPQgFAegBAgQgBASAMABQAggIATgdQATgegEgXQgFgXgGgNIgGgCIgtgqQgpgsgHg0IgBgIQgBgPABgPIgngJIgVAIIADAIQADAMABAMIAAADACWBVQgLgHgKAHIgKAMIAQASQADACAGAeQAGAegXAlQgYAlgfAEQBDALBcgLQASgEgGgLQghgJhWAJIAPgQIAMgRQAbgqgJg3IgJgQIgKgJAiFDIIAAAAIgBgCIAAgBIgEgMQgHgXAGgXIAFgOIAFgHQgMgWgQAGQgFABgDADIgFAEQgDAFAAAHIgBATQgBAOAIANIABABQANAUAEAMIAIAMQADAAAEAMIAJARQhjgJgIAXIBxAKIA1gIQgjgIgWgeIgBgBIgBgCIgIgRAh1BlIABgBIgCAAIABAB").cp();
	this.shape_5.setTransform(44.1,300.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},67).wait(48));

	// 图层 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(1,1,1).p("Ai7AuQgIgOgMgIIgGABIgLgBQgSgDgIgSQgJgRAPgPQAOgOARAIQACgMAFgKQAIgOAPgDQAUgEAIATQAGAPgCAOIBJAsIAMgCIgFgXIgEgIIgDgBQgWgEAAgUQgBgVAPgJQAOgKAKAEQAKACALARQAHgTAPgGIAbgBQAOAHAAAKQAAAKgFAKQgDAIgJACQgIABACAIIAFAfQAHgFACgHQAGgTATgFIAMgDIAEAAIASAFIAMAJIADgDQAQgLASgIIADgEQAFgUAWABIAFAAQAQACAKAOQAGAHgCAKQgDARgKAKIAJgEQAhgFAFAcIgBAEQARgJANASQAKAOgJAOQgHAKgMgDIgHAAAi8AtIABABAiHBSIgDgaIgEgIIgCgCIgDgEQgGgJAFgMQAHgTAXAHQAPAGADAPQAKgMAMgEAi0A5IgHgLADPBAIgEAFAiqBHIgEgFIgGgJAiqBHIAFAGIABABAhCAMQALAAANAGIAHAFQAMgOASgGQAFgCAEgBIAAAAAgjAXQAFAFABAGIAAAFQgBAFgDAFIAAABIgFAGQgFAEgHgBQgPgBABAPIAAAFIBZgHQgDgJAHgHIACgBIAGgEIAGgDQAVgIAQAMABXAzIAEgKIAAgEIgBgHIgKgQQgFgFgHgCIAFgCQAIgDAEgGQAFgNgGgIACgAMIACgIQADgJAIgFACKAXIATgKIADgBABQAOQAGgJAQAAQAVgBAMAPIADAEABUA2IgBgBIgDgCABXBWQAEgGAAgIQAAgJgFgGIgCgDIADgDACTAvIAGgHIAMgPQgGgDABgKACQAoIABAGIAAADIACgCACQAoIgGgRADFBPIAGgKADVA7IALgCADPBAIAGgFACRAxIgiAlAhABOIACAK");
	this.shape_6.setTransform(416.9,337.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C26B01").s().p("AiEhDIA+AAIBFgKQALgFAIgIIAgAeIBTBlIgHAEIgUAIQgIACgIAFIgzANIiBASIACg8QACgXgIgZQgIgZgegZIAAAA").cp();
	this.shape_7.setTransform(440.2,355.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#39A530").s().p("AiSBUIAzgSIAhgPIAJgGIABgDIABACIAAgDQAEgGgKgJIgLgNIgkgvIgqgvIAAgCIBiABQA3ABBFAbQBEAcADAJQACAIgFAJQgFAGgrAWQhAAdiyAbIAAAA").cp();
	this.shape_8.setTransform(459.7,355.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcAEIgDADIgBgBIgDgDIAHABAAcAAIgBgGIAJABIgGAFIgCAA").cp();
	this.shape_9.setTransform(428.6,342.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFFF","#AAAAAA"],[0.443,0.882],2.7,-4.6,-1.5,7.2).s().p("AhGAyIAhglIACgCIAGgHIAMgNQgFgDABgKIABgIQADgLAIgFIAJgDQAggGAEAeIAAAEQAQgJAOASQAKAMgKAOQgGAKgMgDIgHAAIgLACIgGAFIgFAFIgGAKIhLAIIgIgB").cp();
	this.shape_10.setTransform(435.3,341.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AB9hVIgGgQIATgKIADgBQgBAJAGADIgMAQIgJgBABPBEIADAIQAFAPgJANIgGADQgbALgVggIhrgCQgFAmgtgLIgFgGQgQgXAVgSIgEgFQgMgWASgRIATgCQAPgCAFAaIB1AFQAOgVAWAAQAMgBAIAKQAOASgQAPIAAAA").cp();
	this.shape_11.setTransform(418.8,350.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BCBCBC").s().p("AAgADIggAlIgYAAQAEgGAAgIQAAgJgFgGIgCgDIADgDIAEgIIAAgEIgBgHIgKgQQAGgJAQAAQATgBAMAPIADAEIAGARIABAEIAAAD").cp();
	this.shape_12.setTransform(428.2,342.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAEAEA").s().p("AhLASIgCgKIBYgHQgCgHAHgHIACgCIAFgEIArABIAEADIABABIACACQAFAHAAAHQAAAHgFAGIgCABIg8AEIhWgC").cp();
	this.shape_13.setTransform(418.3,344.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FFFFFF","#AAAAAA"],[0.443,0.882],5.6,-2.9,-4.6,4.8).s().p("AALAvIgEgEQgKgPgVABQgPAAgGAJQgGgFgHgCIAGgCQAIgDADgIQAFgNgGgGIADgDQAQgLASgIIADgEQADgUAXABIAFAAQAPACAKAOQAGAHgCAKQgCAPgLAKQgIAFgDALIgBAIIgDABIgTAK").cp();
	this.shape_14.setTransform(429.7,335.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFFFF","#AAAAAA"],[0.443,0.882],-0.1,-5.5,0.5,5.7).s().p("AAsAeIAAABQgFADgHACQgRAGgMAOIgGgFQgMgGgLAAIgFgZIgEgIIgEgCQgWgEAAgSQAAgVAOgJQAPgJAKADQAJADALAQQAFgSAQgHIAdAAQAOAGAAAKQgBALgEAKQgEAIgJABQgJACACAGIAHAe").cp();
	this.shape_15.setTransform(413,334.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFFFFF","#AAAAAA"],[0.443,0.882],0.8,-6.1,-0.2,6.6).s().p("ABHgtQAGAJgFAMQgEAIgIAEIgFACQAHACAFAFIAKAOIABAGIAAAFIgEAKIgHgBQgQgLgVAHIgGADIgGAEIgCACQgHAHADAJIhZAHIAAgGQgBgOAPABQAHAAAFgDIAFgGIAAgBQADgGABgEIAAgFQgBgHgFgEQAMgMASgGQAGgCAFgDIAAgBQAHgFAAgHQAGgTATgFIAMgCIAEAAIASAFIAMAI").cp();
	this.shape_16.setTransform(418.2,339.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#834101").s().p("AC0AEIAGgHIANADIgEAAIgPAEAi7gBIAFAEIABABIgRgDIALgC").cp();
	this.shape_17.setTransform(418.6,345.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9900").s().p("AC9hDQAeAYAIAaQAIAYgCAYIgCA7Ih9AGQgaACgkgBIjCgSIgsgLQgXgGgPgNIAwhOQAWgfAcgZIAOgMIgCAGQAAAEAMAGIATAHIA0AHIDkAAAC8AVQAQgQgOgQQgIgKgMACQgWgBgOAUIh3gDQgFgagNACIgTACQgSAQAMAVIAEAFQgVASAQAWIAFAGQArALAFgmIBtADQAVAfAbgLIAGgCQAJgOgFgOIgDgI").cp();
	this.shape_18.setTransform(407.9,355.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEDBBA").s().p("ADoAHQgIAIgNAFIhFAJIg+ABIjkAAIg0gHIgTgHQgMgGAAgEIACgGIAQgLIAOgFIAGAJIgCABIgJAEIgHAHIABAAIA4AKIBgAFICPgBIBQgEIAXgGIAHgDIAEgCIAFgEIAAAAQgGgHgKgCIAGgFIAPAEIAQAJIAHAIAA9gWIgrgBIAGgDQAVgIAQAMIAAAAAB+gYIAAgDIACABIgCAC").cp();
	this.shape_19.setTransform(418.8,345.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AFmAyIAAABIgCACIgJAHIggAPIg0ASIhnATIiIAIIjDgGIhpgOIgWgGIgSgHQgLgFgfgZIA7hcQAEgKAWgUIBFg2IABABIAHALIgOAFIgQANIgOAMQgcAZgWAfIgwBOQAPANAXAGIAsALIDEASQAkABAYgCIB9gGICDgRIAzgOQAIgEAIgDIAUgHIAHgFIhThlIgggdIgHgKIgQgJIgPgEIALgCIAZAKIAdAXIABACIArAvIAkAvIALANQAKAJgFAGIAAAAAi+hiIAEAFIgLAFIARACIAdAEIBJAGIBWACIA8gEIADAAIAYAAIAJABIBNgIIAPgEIAEgCIgNgEIAEgFQAKACAGAIIAAABIgFAEIgEACIgHADIgXAGIhQAEIiPABIhggFIg4gKIgBAAIAHgJIAJgEIACgB").cp();
	this.shape_20.setTransform(418.5,354.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFFFFF","#AAAAAA"],[0.443,0.882],0,-4.1,0.3,4.2).s().p("AAZAeIACAKIhHgGIgDgaIgEgIIgCAAIgDgEQgGgJAFgMQAHgTAXAHQAPAGADAPQAJgMALgEIAMgCQALAAANAGIAHAFQAFAFABAGIAAAFQgBAFgDADIAAABIgFAGQgFAEgHgBQgPgBABAPIAAAF").cp();
	this.shape_21.setTransform(407.8,342.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFFFF","#AAAAAA"],[0.443,0.882],-4.4,-6.2,4.5,7).s().p("AABBLIgBgBIgDgGIgEgFIgGgJIgHgLQgIgOgMgIIgGABIgLgBQgSgDgIgSQgJgQAPgQQAOgOARAIQACgMAFgKQAIgOAPgDQASgEAIAUQAGAOgCAOIBJAsQgMAEgKAMQgDgPgPgGQgXgGgHASQgFAMAGAJIADAEIACACIAEAIIADAaIgdgE").cp();
	this.shape_22.setTransform(400.2,338.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE2B5").s().p("ACyi1IgVBkIAFAYIAQAEIgFAHIgFALIgBAHQAAAggFgHIAPA0IAFAiIAAAiQABAdgQAcQgQAcgEAPIkGgNIABgEIgBgFIAAgCIADgHIACgHQALg5ggg1IAWgmIgngxQgHgVABgWIAAgjIgHgjQgOgugGgnIEwAJIAuAFIAJAV").cp();
	this.shape_23.setTransform(37.3,351.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#996600").s().p("Ag/jIQAPgLAYACIBegHIAgAEQgCANgGAPIgEARQgCA4gfAsIgQAZQgdAmAgAZIADAPIgcBSIAVAUIgFBAIiIAPQAFgTALgPIAIgJQAVgeABglQAAgKgEgHQgGgMgBgMQgBgRgNgMQABgGgCgDIgBgCQgMgpAZghIACgDIgYggIAghpIgEgM").cp();
	this.shape_24.setTransform(63.5,351.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("ABhitIgJgWIgvgEIkwgKQAGAoAOAuIAHAiIABAkQgCAVAHAWIAnAxIgWAmQAgA1gKA5IgCAHIgDAHIAAABIAAAFIAAAFIEGANQAEgQAQgbQAPgcgBgdIAAgiIgFgiIgOg3QAFAJAAggIABgHIAFgKIAFgHIgRgEIgFgZIAWhjABzjEIAEAMIgfBpIAXAgIgBADQgZAhALApIACACQACADgBAGQAMAMABARQABAMAHAMQAEAHgBAKQgBAlgVAeIgHAJQgLAPgGATICKgPIAGhAIgWgUIAdhSIgEgPQgfgZAcgmIARgZQAegsADg4IADgRQAGgPACgNIgfgEIhgAHQgZgCgPALIAAAAAEOhlQgBAIgEAGQghApgMAvIAVAlIgcBRQAkAcgOAvQgFASgHALIgGAAQhIgBhMAPIjygMQgaABgIgKQgCgLADgKQAQgtgegjQghgnAognQgTgOgJgWQgFgHABgKQACgpgGgrIgCgJQgEgVgKgTQgVgngKgfIArgKQEqgODJAOQAeAAAVAJQgTA9gIA6IAAAA").cp();
	this.shape_25.setTransform(45.5,350.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#333333").ss(1,1,1).p("Ag5hTIADgEQgKgeADghIAAgEQATANgCAaIgBATIAAAGQAdgRAkARQghATgsgMIgeAhIAAADQAlgOAcADIAGAAAgggmIgGAAIgDAAAhWgmIgBgJIgDABIgGAHIgBACAhaguIADgEQABgTAHgRAhogeIAHgHAhsglIgDAQIACgCIAAgBIAFgGIA/gIAhsglQAGgVgDgWAh8gkIAAgZAhvgVIgBABIAAAAIABgBAh0gQIAEgEAh0gQIgIAKIgRARIAqgEQApgBARA1QAQgBAXgQQALgJgPgQQAjgPAkAaQAGAEACAKIACAGQAUgIAUABIABgGIgBgCIglgEAh8gYIAAASAhwgUIgCAMAhwgUIABAAIAyANAh1BHIAugqIABgDQAGAiAXgBIACAGAh8gYIAAgMAjvgSIAHAFQAQANAJAQIADgCIADgBQAEANAHAHQASgOAZgGIAGgCAj2geIASgmQATgqABAnQABAOgNAMQgKALgMAFIgFACIAIAJAjjAaIAUgKAi+AhQALANAWgGQACAAAAAIIABAUAjGAnIAIgGAj7ggIAFACAj3gbIgCAAQgnAPggAHIALAFIAKAGIANANQAkgvAXA2AlAgFIgCgBIgDgBQAggfAlAGIAFAAIAEAFIAFgCIgEgBAERBiIADgSIgCgJQgFgIgNAAIgFAAIgRAAIgKABIgCgHIgFgJQgqgzgpAtQARADAQAJIARAJAkSAxQgDgRgJgNAkSAxIAAAAAkHAzQAQgNAUgMADqA/IAGgKQAJgNAJgFIAUgBQAQAFARAaQATAdgFAmQgCAXgQAAQgvgBANg4ACTAAQgSARgLATIgBADIAAACIARABACKgNIgCgBIgHAKABUgpIACADIAHgHIADgCIgMAGABAgcIAUgNABlgJIAGgKIAJgRABfgWIAGANABBABQAQAJATgBIAJABIgFgLIgGgBIgBABIgEAFAA0gHIAtAEIABABIADgGIAAgBABlgJIAAABIADAHAByALIgFgBIACAGIADgFIACgBIANgOABggvIAZgLQgigOgjgIIAAADQgGAYAKAYIACAGIAGgFABvAQIAEARABWgmIAJAQACBAwIAFgGAB0ApIABAAIADARAB0ApIABgCIAAAAIgBACIAAAAIgFAKIAEgKIABAAAB0AjIABAEIABgDABLAwIAEAaABvAzIAFgKABLAwIgRAHAg2hXIAJgJ");
	this.shape_26.setTransform(84.7,305.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#857D50").s().p("Al0g7IHBg8ICMANQCoAXBHA7IuPCRIA4gXIAGgEIAFgFIAQiU").cp();
	this.shape_27.setTransform(143.6,356.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC9966").s().p("AgNgPIgEAKIAFgKIABAAIAPABQARADAQAJIARAHIhnALIgEgYQAUgIAUABIAAAAAAAgIIAEgGIgEAGAgLgPIADAPIgDgP").cp();
	this.shape_28.setTransform(97.7,311.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00FF00").s().p("AAGAVIgPgJQgRgJgRgDQApgtApAzIAFAJIgmAG").cp();
	this.shape_29.setTransform(102.5,310);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#99CCFF").s().p("AAdACQgUAMgOANIgLgCIAAAAQgDgRgJgLQAigxAXA2IAAAA").cp();
	this.shape_30.setTransform(58.9,308.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCCCC").s().p("AElgPIAWgFIABANIABAHIgkANQhkAVhoACIjSgKIhmgQQgrgGgmgMIAGgbIDhAkQBmALBogGICRgQIABAAIAagFIAGAAQANABAEAHQgEgHgNgBIgGAA").cp();
	this.shape_31.setTransform(80.4,313.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhZjwIgGA1QgOBYAIAtIAQBMQAHAgACAmQADAlACABQABAAAAABQAFAqAJAqQAIAHADAGQAJAVAZACIAKACQAVAAAWgLQAKgQABgTQAGgwgKgvIgCgQQgCg0AUgsQAMgbgKgcQgWhDAFhEIAAgOQACgQgCgQIAmgBQgCAXACAYIACASQAGAsAKApIABALQgOCZgDCcQAFAKAKACQATAEASgJIAIgEQAggdgCgwQAAghACghIABgVQAFhBgFg+QgBgiAKghQALgiAFgiIAEguIAKgKIAVgEQADAZgEAXIgKBNQgKBiABBeIgBAUQgCASgFAQIgKAaQgMAbAEAfIAhASQACAIgHAEQgZAQggAEIgaAGQijAhimgiIgFgIIgNgEQgLgKgIgQIgGgTQgBgTgEgUIgCgJQgVhfgBhdQgBhOgJhPIgHgqQgEgagQgTIA1ALIAxFHIAKCiIAOAMQAHAGAIACIAEABQAtAKAEgwQABgKgDgIQgUhVAGhYQACgWgKgXQgPgjgCgmQgDgnANgmIACgKIAJg2IAhAEAkfi0IAIA4IgogIIAAgXIADgEIAAgEIADgHQANgEANgGIAAAAAE+ipIABABIABAhQgUAIgTAEIAGg1IADgBIASACIAAABQAEAEAGABIAAAA").cp();
	this.shape_32.setTransform(80.5,342.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AA2AbIhrgRQAQgLAVgMIARgKIAEgCIADgBQADANAHAHQAMALAVgFQACAAAAAHIABAUAALAAIAHgGIgHAG").cp();
	this.shape_33.setTransform(63.7,309.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("ACJlJIAGANIh5gMIhYgEIAFgGIA9gHIAIAAIBaAJIADAGIAGgFIAeAGAhSlMIhnAKIgEABIgHgFQA4gNA6gEIAAALAjdj+IBtAQIAmAEQBgAIBjgFIBqgLIAmgHIABAIIALgBIAQgBIgaAFIgBAAIiRASQhoAGhmgLIjhgmIgGAbQAmAOArAGIBmAQIDSAKQBogCBkgVIAkgNIACABIgEARQgIAGgLADIgHBDIABgBIAWADIATAKIABACIADAdIgDAaQgUANgaAAIgDADIgEABIgVC8IgQCWIgFAFIgGAEIg4AXIgmAKQhBAQhGgFIiUgEQgrgEgkgYIgQg4QgPidgViZIg1gDQgEgTADgUIAFgaIASgJIAUgFIgGgpQgFghgcgUIgHgxIAdgPIAlgNIACgBIAKAHIg4AXIgDACIACAAIBRATIABAAIAKACAhYi0IgigEIgIA2IgDAKQgMAmACAnQADAmAPAhQAJAXgBAYQgGBYAUBVQACAIgBAKQgEAwgtgKIgDgBQgIgCgIgGIgOgMIgKiiIgxlHIg1gLQARATAEAaIAGAqQAKBPABBMQAABfAVBfIACAJQAEAUACATIAFATQAIAQALAKIANAEIAGAIQClAiCkghIAagGQAfgEAZgQQAHgEgBgIIgigSQgDgfALgbIAKgaQAGgQACgSIAAgUQgBhgAKhgIALhNQADgXgCgZIgWAEIgKAKIgEAuQgFAigLAiQgKAhACAgQAEBAgFBBIgBAVQgCAhABAhQABAwggAdIgHAEQgTAJgTgEQgKgCgFgKQADicAOiZIgBgLQgKgpgGgsIgCgSQgCgYADgXIgnABQADAQgCAQIgBAOQgFBEAXBBQAJAcgMAbQgTAuABA0IACAQQAKAvgFAwQgCATgKAQQgVALgWAAIgKgCQgYgCgKgVQgDgGgHgHQgJgqgFgqQAAgBgCAAQgCgBgCglQgDgmgHggIgPhOQgIgrANhYIAHg1Akeh4QgOAGgNAEIgCAHIAAAEIgDAEIAAAXIAoAIIgIg4AhUhyQACADgBAHIADB1QAAAfAFAEQAFAEgCAWQgCAWAEAaQAKA8AHA6QADAXAQASQAZAcAlgQQAMgFABgNQAFgkgDglIgEg2QgCg1ARgzIACgOQAAgzgTg1QgFgOAEgMQAGgOABgQQABgMgCgOIgCgJIgBgLIh5gJIgCBHAjdiCIAAACIAEAuQADAUAHARQAZA6gPBGQAHASAEATQANBDgJBIIAIASQAZAaAfgQIAJgZIgEgHQgGgpgJgqQgIglAHgkQAFgegKgdIgOgrQgKglAFgkIAOg+IAFgzIhjgPIAMBKAEUjEIgWAFQAEAegDAfIgQBQIgBADIgCAQIgEC4IgBAEQgRAwgHA1IABABIABABIAXAMIAsnUADGioQACgKAHgKIhuAMQAAAYADAWQADAkAJAiIADAVQABCMgQCOIAAAJQAEATgDARIAGAIQATACARgLIAIgLQAIgRADgTQAHgrADgrIAAh4QgCgYAFgVQALg7AHg8IAAgCIAFgkAE+htQgGgBgDgEIgBgBIgSgCIgDABIgGA1QAUgEATgIIgBghIgBgB").cp();
	this.shape_34.setTransform(80.4,336.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF99FF").s().p("ABeADIgQAHIAQgHIAEAbQhiAFhhgIIAugpIAAgCQAGAfAYAAQAPgBAWgPQAMgIgRgRQAmgOAjAZQAGAFADAJIABAEAgVAPIABAFIgBgF").cp();
	this.shape_35.setTransform(82.7,310.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF9900").s().p("AAAAgIglgEIgBgTQAAgJgCABQgWAFgLgLQASgOAZgGIAGgBIAogFQApAAARAzQgXAAgGgfIgBACIgsAp").cp();
	this.shape_36.setTransform(73,309.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AClj4IgFAKIAEgKIABgGIgBgBIglgEIAlAEIABABIgBAGQgUAAgUAHIgCgGQgCgJgGgFQgkgZglAOQARARgNAIQgXARgQABQgPg1gpAAIgqAFIgGABQgZAGgSAOQgHgHgEgMIgDAAIgDACQgJgSgQgNIAFgBIBngKQAEAAAEAJIgIAJIgRAUIARgUIAIgJIACAIIADgMIgBAAIABgCIgBACIAAgBIABgBIACgCIAAgBIBZAEIB5AMIAAAAIAAAAIADAIIgDgIIAAAAIAcAEIgNAQIgCACIgDAEIgCgFIAFABIgFgBIACAFIADgEIACgCIANgQIACAAIAQAFIBGAVQAWAGATAKQgJAFgJAMIgSAEIgFgJQgqg0gpAvIgRgCIAAgBIABgEQALgTASgSQgSASgLATIgBAEIAAABIgBAAIABgBIAAgBIgBACIAAAAIAAAAIABgCIAAABIgBABAhLk7IAAASIAAgSACkj4IABAAIgBAAAClj+IABAEIABgDIgBADIgBgEAg+k2IAyANIgygNAkykEIA4gXIANANQAJANADASIhRgTIAAgCAjWhxIgMhKIBjAPIgGAzIgNA+QgGAkALAjIAOAtQAKAdgGAeQgHAkAIAlQAKAqAFApIAEAHIgJAZQgfAQgYgaIgIgSQAIhIgNhDQgDgTgHgSQAOhGgYg6QgIgRgCgUIgEguIAAgCAhNhhIAChHIB4AJIABALIACAJQACAOgBAMQgBAQgFAOQgFAMAGAOQASA1AAAzIgCAOQgRAzACA1IAEA2QAEAlgFAkQgCANgMAFQgkAQgZgcQgQgSgDgXQgHg6gKg8QgEgaACgWQACgWgFgEQgFgEgBgfIgDh1QABgHgBgDIAAAAAEbizIgtHUIgXgMIgBgBIAAgBQAHg1ARgwIABgEIAEi4IABgQIABgDIAQhQQAEgfgFgeIAXgFABykgQAQAKATgCIAJACIgFgNIgGgCIgBACIgEAGIAEgGIABgCIAGACIAFANIgJgCQgTACgQgKIAAAAABlkpIAtAEIABAAIADgGIAAAAIAAAAIgDAGIgBAAIgtgEACgkRIAEASIgEgSADNiXIgFAkIAAACQgHA8gMA5QgEAXABAYIAAB4QgDArgHArQgDATgHARIgJALQgQALgTgCIgHgIQADgRgDgTIgBgJQAQiOgBiMIgCgVQgJgigEgkQgCgWAAgYIBtgMQgGAKgCAKIAAAAACgjuIAFgKIgFAK").cp();
	this.shape_37.setTransform(79.8,334.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AjJgtIAAgLIAQgBIgDAPIADgPIALgBIgGAHIAGgHIALgBIAuAAIg/AIIgFAGIgBABIgCACIgBABIABABIgCALIACgLIABAAIgDALIgDgHIAEgFIgEAFQgDgJgFAAIAAAAADGA7IgBgJIADAKIgCgBACSAkIASgEIgGALIgLABIgBgIADKANIgUACQgTgKgXgFIhFgUIgRgFIgBAAIAHgJIABAAIABAAIB7AmIARAJAAegoIAeAGIgHAJIgcgEIgBAAIgGgNIAMACIgFALIAFgLAgKgxIgGAFIgDgFIAJAA").cp();
	this.shape_38.setTransform(92.3,307.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#99CCCC").s().p("Ag5hTIADgEQgKgeADghIAAgEQATANgCAaIgBATIAAAGQAdgRAkARQghATgsgMIAAAAAj7ggIAEAFIgCAAQgnAPggAHQAggHAngPIACAAIAIAJIAHAFQAQANAJAQIgUAKQgXg2gkAvIgNgNIgKgGIgLgFIgCgBIgDgBQAggfAlAGIAFAAAjygdIgEgBIASgmQATgqABAnQABAOgNAMQgKALgMAFIAAAAAECAjIAUgBQAQAFARAaQATAdgFAmQgCAXgQAAQgvgBANg4IADgSIgCgJIgBgNIgWAFIgRAAIAGgKQAJgNAJgFIAAAAABAgcIgIgBQgKgYAGgYIAAgDQAjAIAiAOIgZALIgMAGIgUANAg2hXIAJgJIgJAJ").cp();
	this.shape_39.setTransform(84.7,305.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(162,168,199,0.549)").ss(0.1,1,1).p("AFegBIAAADAldgBIAAAD");
	this.shape_40.setTransform(346,317.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(162,169,200,0.451)").ss(0.1,1,1).p("AjqALIgogWAETAFIAAgGAgEgBIAAAO");
	this.shape_41.setTransform(503.5,211.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9C9C9C").s().p("AC8AFQjTBTiEAwIggAMIAYkdQB0AADrgKIAACY").cp();
	this.shape_42.setTransform(238.5,242.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F9F9B5").s().p("ACFO7IAAA4IkNAAIAFxOIAAkjIAAgyIAAhXIAAgkIAAiaIAAkSQA1gTAwgGQBYgLBLAkIAAAIIAAUTIAEgJIgEAKIAACyIAAHEACEFTIAAgMQgEAMAEAAIAAAA").cp();
	this.shape_43.setTransform(270.5,298.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#80800B").s().p("AAaGfIgxFEIAAiyIAEgJIgEAIIAA0SIAoBlIAJgKIAAQmAgXJAQgEAAAEgNIAAAN").cp();
	this.shape_44.setTransform(286.3,275.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EEE3F4").s().p("ADS6MIALMqQALUDgeTlIgSAHImXAAMAAAg0ZIGxAA").cp();
	this.shape_45.setTransform(-6.4,165.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B6B183").s().p("AWXk/IgFRPMgsoAAAIAAqgIGaAAIARAAICCgaIB2gXMAiKgF+AHInZIAbAFIgSAFIPGjEIAAAxIvwCpIAhggAQ+qMQCEgwDVhTIAAAkIlZBf").cp();
	this.shape_46.setTransform(114.2,321.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#857D50").s().p("ADSh7IPvipIAAEjMgiJAF+QI9h5JUleIAJghAzAGnICCgTIiCAaIAAgHANolOIFZhfIAABYIvGDEIASgFII8itIAfgL").cp();
	this.shape_47.setTransform(135.5,289.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E4E8F3").s().p("AAAObIAEmrQADmqhHvPIBpgRQAxPagxMaIggAgIgJAh").cp();
	this.shape_48.setTransform(155.6,188.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AkCoUQDiCuEgAuIgOFnIACDIQADCTAMCLIn6gsIgLv9").cp();
	this.shape_49.setTransform(79.2,61.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CCCCCC").s().p("Ag4GqQgLiLgEiTIgBjGIANloIB4gTIgMB3IgNEEIAFDGQAICZAYCRIiBgM").cp();
	this.shape_50.setTransform(110.9,72.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9BAAD2").s().p("AkbN9IgbgFQAxsagxvaQDkDEDECAQBaA6AhAsQBFFHAFI9IgYEeIo6Ct").cp();
	this.shape_51.setTransform(190.9,185.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#93920D").s().p("ADLIUIq6gBIjcAAIAAwmQLLAKLMAUIgFQJIn8AA").cp();
	this.shape_52.setTransform(360.6,263.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7CB64E").s().p("A2aGfIAAg4IWisCIAjgDISSACIDeCdIAAKeMgs1AAA").cp();
	this.shape_53.setTransform(427.4,358.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#578035").s().p("AriGEIAAnDIAzlEIDcABIK6AAIAAAFIAAgFIH8ABIgjADI2iMCAnTmCIAAAFIAAgF").cp();
	this.shape_54.setTransform(357.8,355.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F3F27A").s().p("AJJIMIyQgCIAFwJIHdgGIDkACIEYgIICyACIAAQV").cp();
	this.shape_55.setTransform(490.3,264.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9ACFAD").s().p("AthIqIgJAKIgqhmIAAgIQhKgkhaALQgxAGg0ATIAAESQjsAKh1AAQgFpAhElEQgigthag6QA4gWA3giQB/hQCJhEQCKhECNg7QBxgxBugnIA1gTQBXgeBfgEQAMAbARAaQDgFkOsE3QB/AoCNApIBZAaIgNAAIAMADIMiEOIAADTIiygCIAAgIIAAAIIkYAIIjmgCIgogYIAoAYIndAGQrLgUrNgKIAAAAAT6I0IAAAQIAAgQ").cp();
	this.shape_56.setTransform(375.6,154.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EFEFEF").s().p("AAFABIgKgBIALAAIgBAB").cp();
	this.shape_57.setTransform(468.1,164.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#CBAF78","#FCEAC7"],[0,0.263],-3.4,-113.8,4,97.3).s().p("AhtMtIAAwVIAAjTIAAktIAAjhIDbA2IAAddIjbid").cp();
	this.shape_58.setTransform(559.9,235.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#79BF8D").s().p("ASYInIsikOIACgEIhZgZQiNgqiAgqQurk0jhllQgQgagNgbIBpAEQB2ALBvAmIBHAcQCPA8CPA5IEYBuIAEABIEWBtQCKA1CMAyIEWBlQCKA0CSAxQCUAyBuAbIAAEt").cp();
	this.shape_59.setTransform(431.2,136.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A87611").s().p("ABuBtIjbg2IAAijIDbAqIAACv").cp();
	this.shape_60.setTransform(559.9,133.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D2801C").s().p("AARhMIEllGIAAMlIjegqImNhEQA0hCB5iGIAZgbIB+iNIACgB").cp();
	this.shape_61.setTransform(539.9,86);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#68B77B").s().p("AqvgzIgBgCQA8gZA7giIESidQAkgUAkgSQBagtBcgjIBAgWQBfgcBigBQARAaAZAZQAqArA+AlQA3AiBHAdIgZAcQh5CFg0BDIGPBBIAACmIAADhQhugbiUgyQiSgxiKg0IkUhnQiMgyiKg1IkYhr").cp();
	this.shape_62.setTransform(479.9,117.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4FA664").s().p("AjHhgIBGACQCYALCXAgIAbAGIgCABIiACNQhHgeg1ghQg+gkgqgqQgZgZgRgbIAAAA").cp();
	this.shape_63.setTransform(521.6,82.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#C1CEF2","#7C9EE2"],[0,0.69],0,65.5,0,-106.3).s().p("A4nKOQjGiAjkjDIhrAQIAHk4IAfqwMBBTAAAIAAHjIklFEIgbgGQiXggiZgLIhHgCQhiACheAbIhDAXQhcAihaAuQgkASgkAUIkRCcQg8Aig8AZIgCABIkYhuQiQg5iNg8IhHgbQhugmh3gMIhpgDQheAEhXAeIg2ATQhuAnhxAxQiNA7iJBEQiKBEh/BQQg3Aig3AWIAAAA").cp();
	this.shape_64.setTransform(360,62.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#BD92D8").s().p("ALDSGQpWFgo7B6Ih2AXIiCASQAezlgL0DIgLsqIF/AAIAEBtIALQAIH6ArICDAMQgYiRgJiZIgEjIIAMkEIAMh3IAAgLQj7hQj5iMQhFgmhEgqIPkAAIgfKyIgHE5QBJPPgDGqIgEGr").cp();
	this.shape_65.setTransform(84.9,164.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#999999").s().p("ADGCkQkggujhisIgEhtIACAAQBEAqBEAmQD5CJD8BQIAAAMIh6AS").cp();
	this.shape_66.setTransform(85,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-2.6,599.9,402.7);


// symbols:












(lib.元件8 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFQgTQBeBtAOCMIh/AAQgQiIhyhhIgsgjQh3hTicAAQiKAAhtA/IhAhcQCJhPCuABQDvAACqCVIA7A8").cp();
	this.shape.setTransform(38,-89.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.4,-112.7,89,46);


(lib.元件7 = function() {
	this.initialize();

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ABbB8QAYARAHgLQAGgMgTgPQgpADAXASIAAAAAC9BjQgpADAXARQAYASAHgMQAGgMgTgOIAAAAAjLg6IACABQATgIATgLIAXgPIANgJQAWgQAYgIQAVgHAXgCQA6gFgIA8IgDARQgGARgIAKAgrgiIgDgVQgJgngageAAaBoQglAKAWALQAXALgBgNQgBgNgGgGIAAAAAiMhbQATAXABAh");
	this.shape_1.setTransform(-7.2,-14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AA1iVQAcAPATAXIgvgJIAAgdACHBCQg2gFgVARQgYASgJAdIgHAZIgEgLQgXgmAPgwIAbhHIABgFQAqATAugFQAMAZAAAeIgBAUAg+ghQgTAOgZACIgWAAIgHgDQAdgaAsANIAAAA").cp();
	this.shape_2.setTransform(-10.8,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("AgGAIQAWARAHgLQAGgMgTgNQgnADAXAQIAAAAABzAVIisAJQgygEgYgTQAEgaAZgLQBiABBeAEIAMABQAOABALALIAFAMIgEAMIgHAHIgCgBIgEADABagPQgpADAXAPQAYASAHgMQAGgKgTgOIAAAAAhHgKQgnAKAYAJQAXALgBgNQgBgLgGgGIAAAA").cp();
	this.shape_3.setTransform(2.6,-2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABbB8QgYgSApgDQAUAPgHAMQgHALgXgRIAAAAAC8BjQAUAOgHAMQgHAMgXgSQgYgRApgDIAAAAAAJg9QgJAOgNAIIgeAFQgnAEgngFIgygKQgMgDgLgEIgIgFQATgIATgLIAXgPIANgJQAWgQAZgIQAVgHAXgCQA6gFgIA8IgEARAgrgiIgEgVQgJgngZgeQAZAeAJAnIAEAVAAaBoQAGAGABANQABANgYgLQgWgLAmgKIAAAAAiNhbQATAXABAhQgBghgTgXIAAAA").cp();
	this.shape_4.setTransform(-7.1,-14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BCBC9C").s().p("AB3BFIADgRQAIg6g8AFQgXABgVAGQgYAIgUAQIgNAJIgXAPQgTALgTAIIgCgBQgMgIgJgKQgOgRgEgXIgDgIIAAgLQBEgCAZg6IgIgHIAuACIAwAJQAtAJAgAgQAgAkgcAtIgFAI").cp();
	this.shape_5.setTransform(-18.1,-27.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999966").s().p("ABTnTQAjAeASApQAVA1gPA8IgTAVIgGAFIgIAFQghAJghAAQgQgBgMgHIgjgqQgFgJABgNQADgcAUgXIAShPIgOADIgTA5IgcgNIABgMIAZhDQAKgHAIgDQAwgMAjAgIAAAAABojqIgXCaIiogDQgng1g+gXQAUADASgEQAcgFAXgTQAygqgRg2QgGgSgNgNQgMgRgPgMQghgWgmgFIgngBIAQgSIAAAFQAJAKAOAEQAEAAAFgDQAFgEADgGIAHgEQAHgJgCgKIgJgJIAAgBIAmgFQAoABAKgfIgHgHIgBAAIgDgBIg5AMIAtgdIA8gIIgcBcQAMAVAcACQgbAsATAqQAUAqArAMIA0gBIAXgHAi6mXIADgBIgBABIgCAAAhaAcIAAgFIADgIICrgGQARAtgDA2QgCAYgFAWQgHAeADAgIAwAwQAQAQAMAUIAHAMQAKAwgVAtQgGAOgEAUIAKAOIASAJIgbAJIg8AGIjlAIIgyAHIgVgFIgBgXQASgQAjgDQAjgCAeACIAsgDIAJgEIACgGQgYgHgOgRQgRgUgIgYQgGgSAEgSQAIgmAQgLIAagPIArgQIALgDIgIgBIABgTQgBgfgLgbIAJgBIADgBIABgBIgCgJIgSgBQg5gGg3gUQgVgIgYAAQgLAOgNAKQgtgNgcAaIgLgEQAJgSANgQIAYgYIAbgTQAjgUArAJIBDAQIAmADIAKgCIADgBIgBgDIgVgMQgTgXgcgPIAAAAADYCnIAQgiQAVggAeAOIAIAgQgMBOhJA+IgVAOIgZgpQAjgNALgiIAKgu").cp();
	this.shape_6.setTransform(3.6,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXn4IAzACQAUAFARALQAeAPAYAZQAQAUAJAaQAQAugFAwIgEASQgIAfgbARIgYCnIAFABQAKADAJAHQAZAdgTAeIgEADIgZAMIAIAZQAGAXgBAYQgEA/gHA9IApAmIAqgfQAEgeALgVQALgWARgYQAQgYAhAHQAgAGgFAkIgHArQgHAfgWAbIgzA6QgNAMgQAIIAAAPQAAA0gXAwIARAGIAMAbQgMAUgXAAIg+AHIhlADQhHgBicAGIgQgQQgXgZA5gSQA4gTBHAEQgfgegKgpIgJgNIgNgYQgIgOgBgRQgIhMAphCQgWgRgeAHIglAiQgHAHgJACQggAEgegJIgFgCQgPgHACgSQABgSALgNIABgBQAWgaAbgTIAPgJQANgIAPgDQAugMAvAMIACgrIgdgLIgYgNQgCgTAMgRIAZgeIAOgDQgagXgegQQgdgSgfgOIgsgRIgWgFQgpgDgQgkIgGgGIgNgZQgHgYACgaIgFgFIAIglQgCgVAbgKQAwgKA2AIIASgSIACgDIgKAAIgDgBIgHgHIgBgEIAAgGQAdgTAkgHQAiggAogVQAWgLAXAAIAwgFAB3nSQgkgggvANQgLACgKAHIgXBDIgBAMIAbANIAUg5IAOgCIgTBPQgVAWgDAdQgBAMAGAKIAlApQALAIARAAQAhABAhgKIAHgEIAHgGIASgUQAPg8gVg1QgRgqgjgeIAAAAACLjoIgWAGIg0ACQgtgMgUgrQgSgqAZgrQgagCgLgVIAbhdIg8AJIgsAcIA5gMIADACIAAAAIAHAHQgJAfgogBIgmAFIgBAAIAKAJQACALgIAIIgHAFQgCAFgGAFQgEADgFAAQgOgEgJgLIAAgFIgQASIAnACQAnAFAhAVQAPANALAQQAOANAFASQASA3gyApQgYATgbAGQgTADgUgDQA/AXAmA1ICoADIAXiZACNgIIAEgDIACACIAHgHIAEgOIgFgMQgLgLgOgCIgMAAQhggFhgAAQgZAKgEAcQAYAUAyACICsgIAiWmWIABAAIABgBIgCABAkSjLIAIAEQALAFAMADIAyAKQAmAEAngEIAegEQAOgJALgNIAFgIQAcgugggmQgggfgtgKIgygJIgugCIAIAIQgZA6hEABIAAANIADAJQAEAXAOAQQAJALAMAIIACABAg9jPQgGAQgKALQAKgLAGgQIAAAAAj0CeIAIADIAVAAQAZgCATgOQANgJALgPQAYAAAWAIQA2AUA4AGIASABIACAJIgBABIgDABIgKACQgsAFgqgTIgBAFIgbBJQgQAwAZAmIAEALIAHgZQAJgdAXgSQAVgRA0AFIALABIgOADIgpAPIgaAPQgPALgJAmQgEATAHASQAIAYARAUQAOARAYAGIgDAGIgJAFIgrADQgfgCgjACQgiACgSARIABAWIAVAFIAygGIDkgJIA9gGIAagIIgRgJIgLgPQAEgTAHgPQAVgtgKgvIgHgNQgNgUgQgPIgvgwQgEggAHgfQAGgWABgYQAEg1gRgtIisAFIgCAJIAAAEIAAAdIAvAJIATANIAAACIgCACIgKACIglgDIhDgQQgrgJgjAUIgbASIgYAYQgNAQgIATIAKADAD8CpIgLAtQgLAjgjAMIAZAqIAVgPQBJg+AMhOIgHgfQgfgPgVAhIgPAi").cp();
	this.shape_7.setTransform(0,0.1);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.3,-50.3,68.9,101.1);


(lib.元件6 = function() {
	this.initialize();

	// 图层 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AA5AXIAZAdQATgQAXAGQASAEgBAPQgGBAhCgQQgBAdgdgFQhAgMAmgoIgzgxQgbgdgZgrQhFARAag3QAFgLANgCQAXgEARAMQgHg7BBALQAXADgGAcQgEAUgQANIAQASAgXhHIADAE");
	this.shape_8.setTransform(-7.7,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999966").s().p("Ah4gDQAqglAzgRQAzANAuAcIAeATQAMAKAPACIAVAVIgNAVQg5AGgwgdQgcgRgagVIgNAAQgUAYgcAQIgCABQgLAFgMACIgGgEIgIgBIgXgSIAbgY").cp();
	this.shape_9.setTransform(5.2,-2.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEgxIgJAHQgNAKgFASIgDAPQANASAVAJIAJACIAigBQAIgBAGgFIAZAdQATgQAXAGQASAEgBAPQgGBAhCgQQgBAdgdgFQhAgMAmgoIgzgxQgbgdgZgrQhFARAag3QAFgLANgCQAXgEARAMQgHg7BBALQAXADgGAcQgEAUgQANIAQASAgXhHIADAEIgDgE").cp();
	this.shape_10.setTransform(-7.7,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhIA0QgHAEgHACIgjABIgJgDQgWgIgOgTIAEgRQAEgQAOgKIAJgHIAzgmQAyghAyAdQATALASAHQAcALAXAQIAJAFIAJAHIARAEIAEAHIAYAaIgCAPIgCAGIgDAHIgIAJIgNAJQgvgGgsgQQgrgPglgaIgoAmAh5gFIgbAYIAWATIAJAAIAFAEQANgBAKgFIACgBQAcgQAVgZIANAAQAaAVAcASQAwAdA5gGIANgVIgVgWQgQgCgMgJIgdgTQgugdgzgNQg0ASgpAkIAAAA").cp();
	this.shape_11.setTransform(5.3,-2.8);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.9,-13.4,44,26.9);


(lib.元件5 = function() {
	this.initialize();

	// 图层 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#228C2F").s().p("ADuAUQhXAhh4gCIjkAIQhvALgJgRQgJgRBbgeQBbgcCEgVQCDgUBgABQBfABAIAZQAHAZhXAfIAAAA").cp();
	this.shape_12.setTransform(34.6,33.9);

	this.addChild(this.shape_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.7,27.6,63.8,12.8);


(lib.元件4 = function() {
	this.initialize();

	// 图层 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AA0goQAdgCgCgOQgDgNgYACQgdAcAdgBIAAAAAAVAAQgDgOgWACQgdAbAdgCQAbgCgCgLIAAAAAhCApQgYAiAagIQAZgIgJgIQgKgJgIgBIAAAA").cp();
	this.shape_13.setTransform(-2.1,4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BCBC9C").s().p("AhlgfIAlgdQAUgOAYgLQAmgXAtADQAyAHAIA2QADAXgGAUQgzA9hHAiIgWAKQgsALgjgbQgEgEgEgBIgIgKQAygugSg6IgMAA").cp();
	this.shape_14.setTransform(-33.3,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA0goQgdABAdgcQAYgCADANQACAOgdACIAAAAAhCApQAIABAKAJQAJAIgZAIQgaAIAYgiIAAAAAAVAAQACALgbACQgdACAdgbQAWgCADAOIAAAA").cp();
	this.shape_15.setTransform(-2.1,4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AhOgbQAigJAkgBIBBABQgBAIAAAJQABAkAfARQhOALhPgVIgSgFIALgqIgCgE").cp();
	this.shape_16.setTransform(14.3,23.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999966").s().p("AHEgTIAAAnIgLAXIAAAJIgNAbIgfAfIgmgqQAggNgCgmIgJhqQAUgXATAUQATATAIAVQAIAVgCAMIAAAAAnAh/IgCABIACgCIAAABAnEhgIAEADQANACANgGIAFgIQACgHgCgGIACgIQABgLgJgHIgNAAIAAgBQALgRAPgMQAfgZgNgeIgKgBIgBABIgDABIgjAuIAPgzIAogtIAoBYQAWAIAXgQQAHAyAqAUQAsATAqgUQAXgMAQgXIANgUIBSCEIiDBqQhAgPg/AXQArgbAJgwQALhBgxgdQgQgKgTgCIgngEQgnAFghAVIgeAZIAAgYAjElIQAzAaAbA4IgCAkIgDAIQgSAdgaAVQgNAKgNACIg4gHQgKgEgHgKQgRgYABgeIglhJIgJALIAWA5IgeAJIgHgKIgZhDQADgMAGgJQAdgpAvABQAvAAAoAVIAAAAAgZFNIABAAIgCAGQggANhUgDQgMgDAHgLIAFgCIAQAAIANgUQAKgVAFgZIAKhBQAEgcgHgaIgHgSIB+h1QAlAhAvAJQAcAFAbgEIBggHQAvgCAkAiIAUAVQAKAJAFAPIACAKIgIA8QgSAegGAiQgCANABAMQACAWAWAOQgEAMgLACIjEAHIgPgBIgOgEQAPgOAQgFQAZgIAbgDIAygGIgCgSIhMgjQgSgXAEgbIADgMQAFgQAMgIIA3gcIACgEIgFgJQglgCgdAcQgUAUgDAZIAAAFIhDgBQgkABgiAJIgDgFIgIAAIgJAKIgGA1IgUBF").cp();
	this.shape_17.setTransform(4.2,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#996600").s().p("AA8hUQAMgJAPACIALAGIAHANIgBAKIgDAAIgBAFIgVAVIgIAKIhYBTQgtAighABQgQgXAMgZQBMg+BKg7IAJgHAA5gqQAdgCgDgOQgCgNgZACQgdAcAegBIAAAAAAZgCQgCgOgXACQgdAbAdgCQAcgCgDgLIAAAAAg+AnQgXAiAZgIQAZgIgJgIQgJgJgJgBIAAAA").cp();
	this.shape_18.setTransform(-2.6,4.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAdhAIAEgCIAVgEQAmAFAEAjIABAOIgLAQQAhAeAsAGQAdAGAagFIAmgIQAZgBAZABQAqgFAiAcIAcgOQAJgUgEgSQgGgbgBgeQgBgWAGgVQAHgeAdAKQANADAIAJQAmAsAEA9QABAMgEAPIgHAbQgPAygqAbIgFA8IgiBfIAXAZQAEAFABAHQABANgLAKIgDAEQgGAGgJADQh1AFh0gDIgTgNIAAgLQARgmA+gJQhqAHhMgUIgIArIgFAPIgBAAIgFAMQgGANgNABIgLACQg8APg8gSQgTgOATgUIALgGIALAAIAMgSIAGgQQAThDgIhEIgHgKIgNAIIgsAHQgPgOgBgUIAAgnIAIgMIhEAIQgiAEghAKIgsAQIgUAKQghAYglgQIgHgBQgPgEgLgGQgWgOgPgVIgHAAIgSgiQgPgPANgZQAeglAvgdIABgdIgHAHIgDABIgKgBIgDgCIgEgFQAKghAWgdQAFgvARgqQAJgWARgPQAUgTAPgSQAPgTAZgNQATgJAUgDIBDgFQAaAFAYAOQApAZAdAnIAIAQQAOAdgJAfIBZCOAAhgrIgJAHQhKA5hMBAQgMAZAQAYQAhgBAtgjIBYhVIAIgKIAVgSIABgGIADAAIABgJIgHgOIgLgGQgPgBgMAIIAAAAAHugUQACgMgIgVQgIgVgTgTQgTgUgUAXIAJBqQACAmggANIAmAqIAfgfIANgbIAAgJIALgXIAAgnAmWiAIAAgBIgCACIACgBAmahhIAAAYIAegZQAhgVAngFIAnAEQATACAQAKQAxAdgLBBQgJAwgrAbQA/gXBAAPICBhqIhQiEIgNAUQgQAXgXAMQgqAUgsgTQgqgUgHgyQgXAQgWgIIgohYIgoAtIgPAzIAjguIADgBIABgBIAKABQANAegfAZQgPAMgLARIAAABIANAAQAJAHgBALIgCAIQACAGgCAHIgFAIQgNAGgNgCIgEgDAmzgfIALAAQATA7gzAtIAJAKQAEABADAEQAkAbArgLIAXgJQBJgiAyg+QAHgUgDgXQgJg1gxgIQgtgDgpAXQgXALgVAPIgkAcAialJQgogVgvAAQgvgBgdApQgGAJgDAMIAZBDIAHAKIAegJIgWg5IAJgLIAlBJQgBAeARAYQAHAKAKAEIA4AHQANgCANgKQAagVASgdIADgIIACgkQgbg4gzgaIAAAAAAQFMIAAAAIgBAAIAUhFIAIg1IAJgKIAIAAIADAFIACAEIgLAsIASAFQBRAVBNgLQgegRgBgmQAAgJABgIIAAgFQADgZAUgUQAdgcAlACIAFAJIgCAEIg3AcQgMAIgFAQIgDAMQgEAbASAXIBMAjIACASIgyAGQgbADgZAIQgQAFgPAOIAOAEIAPABIDEgHQALgCAEgMQgWgOgCgWQgBgMACgNQAGgiASgeIAIg8IgCgKQgFgPgKgJIgUgVQgkgigvACIhgAHQgbAEgcgFQgvgJglghIh+B1IAHASQAHAagEAcIgKBBQgFAZgKAVIgNAUIgQAAIgFACQgHALAMADQBUADAegNIACgG").cp();

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.2,-36.6,102.6,73.4);


(lib.元件3 = function() {
	this.initialize();

	// 图层 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABPAMIABADIACAFIgBACIgCAFQgCADgCgJQgNgKgYAMQgOAGgLAIIgSAOQgDgBgCgBIgIgBQAXgWAPgJQAPgJADgBIANgDIAVAEIAFACIACACAhRAkIAJgSQAqglA6gVIANgHIAFAAQAKgGAAAHIAGgCQgCABABACQgOALgZAKQgWAJgOAKQgOAHgNAFQgPAOgZAPIAAAA").cp();
	this.shape_20.setTransform(-0.7,-1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999966").s().p("Ag0AyQgMADgCgIIAAgDIABgJIguAFIgDAAQAZgPAPgOQAMgFAOgIQAOgKAZgJQAWgJAPgLQgBgCACgCIADgBQBCgKARAvQACAGgLADIg9AQIgBgDIgFgCIgVgEIgOAEQgCABgNAJQgPAJgaAWIAAAA").cp();
	this.shape_21.setTransform(2.6,-1.2);

	this.addChild(this.shape_21,this.shape_20);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.9,-6.3,23.2,10.5);


(lib.元件2 = function() {
	this.initialize();

	// 图层 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#228C2F").s().p("AFDAAQAAAVhfAQQheAQiGAAQiFAAhegQQhfgQAAgVQAAgVBfgQQBegPCFAAQCGAABeAPQBfAQAAAVIAAAA").cp();
	this.shape_22.setTransform(20.4,37.1);

	this.addChild(this.shape_22);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.9,31.8,64.6,10.7);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).p("AhVgfQAoAlAQAUIAqA3QgmAoBAAMQAdAFABgdQBCAQAGhAQABgPgSgEQgVgFgRAMQgxhCg5gyQAQgNAEgUQAGgcgXgDQhBgLAHA7QgRgMgXAEQgNACgFALQgaA3BKgIIAAAA").cp();

	this.addChild(this.shape_23);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.1,-13.4,28.3,26.9);


(lib.shape280 = function() {
	this.initialize();

	// Layer 1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_24.setTransform(-11.5,32.4);

	this.addChild(this.shape_24);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,32.3,0.2,0.3);


(lib.shape279 = function() {
	this.initialize();

	// Layer 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_25.setTransform(-13.5,30.9);

	this.addChild(this.shape_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.6,30.8,0.1,0.3);


(lib.shape278 = function() {
	this.initialize();

	// Layer 1
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_26.setTransform(-11.5,32.4);

	this.addChild(this.shape_26);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,32.3,0.2,0.3);


(lib.shape277 = function() {
	this.initialize();

	// Layer 1
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_27.setTransform(-13.5,30.9);

	this.addChild(this.shape_27);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.6,30.8,0.1,0.3);


(lib.shape276 = function() {
	this.initialize();

	// Layer 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_28.setTransform(-11.5,32.4);

	this.addChild(this.shape_28);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,32.3,0.2,0.3);


(lib.shape275 = function() {
	this.initialize();

	// Layer 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_29.setTransform(-13.5,30.9);

	this.addChild(this.shape_29);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.6,30.8,0.1,0.3);


(lib.shape274 = function() {
	this.initialize();

	// Layer 1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_30.setTransform(-11.5,32.4);

	this.addChild(this.shape_30);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,32.3,0.2,0.3);


(lib.shape273 = function() {
	this.initialize();

	// Layer 1
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_31.setTransform(-13.5,30.9);

	this.addChild(this.shape_31);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.6,30.8,0.1,0.3);


(lib.shape272 = function() {
	this.initialize();

	// Layer 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_32.setTransform(-11.5,32.4);

	this.addChild(this.shape_32);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,32.3,0.2,0.3);


(lib.shape271 = function() {
	this.initialize();

	// Layer 1
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_33.setTransform(-11.5,32.4);

	this.addChild(this.shape_33);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,32.3,0.2,0.3);


(lib.shape270 = function() {
	this.initialize();

	// Layer 1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_34.setTransform(-13.5,30.9);

	this.addChild(this.shape_34);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.6,30.8,0.1,0.3);


(lib.shape269 = function() {
	this.initialize();

	// Layer 1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_35.setTransform(-11.5,32.4);

	this.addChild(this.shape_35);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,32.3,0.2,0.3);


(lib.shape268 = function() {
	this.initialize();

	// Layer 1
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_36.setTransform(-13.5,30.9);

	this.addChild(this.shape_36);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.6,30.8,0.1,0.3);


(lib.shape266 = function() {
	this.initialize();

	// Layer 1
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_37.setTransform(-11.5,32.4);

	this.addChild(this.shape_37);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,32.3,0.2,0.3);


(lib.shape265 = function() {
	this.initialize();

	// Layer 1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_38.setTransform(-13.5,30.9);

	this.addChild(this.shape_38);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.6,30.8,0.1,0.3);


(lib.shape264 = function() {
	this.initialize();

	// Layer 1
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_39.setTransform(-11.5,32.4);

	this.addChild(this.shape_39);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,32.3,0.2,0.3);


(lib.shape263 = function() {
	this.initialize();

	// Layer 1
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#29A09F").s().p("AA5BaIgIAAIgSgCIgSgFQgIgCgFgGIAAAAIARgaQAQgdgIgXQgIgagFgFIgLgKQgVgMgegCQgKgBgFgKQAWgeArAQQAqAQALAhIABADQAMAfAAAgIgDAgIgFAQIgBAK").cp();
	this.shape_40.setTransform(0.2,-0.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AA8BXIABgKIAFgQIADggQAAghgMgfIgBgDQgMghgrgQQgpgQgXAeQAFAKALABQAdACAWAMIALAKQAFAFAIAaQAIAXgQAdIgSAaIAAABIgLAMIAIgZIABgBQAUgngIgqQgCgKgJgIQgjgGghgQQgLgFAIgMQARgTAYgCIAjAHQAnAMAQAkQAIARABATIABACQAFAhgDAkQAAAHABAFIgBANQgEAKgLAGIACgP").cp();

	this.addChild(this.shape_41,this.shape_40);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.4,-10.2,15,20.5);


(lib.shape262 = function() {
	this.initialize();

	// Layer 1
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#33CCCC").s().p("ABChOIACAEQARADAQgIQARgJAQgDIARABQgHAfgUAKIAAAaIgDAWIgBABQABALAIAKIAOASIA1ARIgnAEQAtAKgPAGIgrAEIg5gCIg6AOIgSgCIgGgBIALgFQAJgFgCgJQgDgKgHABIgRAAIgTABQgIADAAAHQAAAHAIAFIAMAFQgnAOgogNQgYgIgaAAIgzAFIARgUIgUgBIgBgCQAAgCAEAAQAhgagCgfIAAgCQgEgGABgLIACgJIgBAAIABgGIAEgMIgCgHIgLgPIgBgRIAdABIAoAMQAkgZAugDQArgDAqATIABABAgeADIgEgCIgYgEIglAJQgQAFgMALQgQAIgIgPIgBABQAAAOAMAFIgIAKIAQgFIAvghIgfAiQAMgEAFgIIAEgFQAXgXAeADIAGABIACgCABiAcQANgGADgMIgIAGQgGAFgNAAIgOgNIgvgIQgUgEAUAIQAHAEAEADQAQATASADIAIADIgmgdIAfANIAjATIAAgEIgJgH").cp();
	this.shape_42.setTransform(0.4,0.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("ABGhNIgBgCQgqgSgrACQguAEgkAZIgngNIgdgBIABASIALAPIABAHIgEAMIAAAGIAAgBIgBAKQgCALAEAGIABACQACAfgiAaQgDAAgBACIACACIAUABIgSAUIA0gFQAaAAAYAIQAnANAogOIgMgFQgJgFABgHQgBgHAIgDIATgBIARAAQAIgBACAKQACAJgIAFIgMAFIAGABIASACIA6gOIA5ACIArgEQAPgGgtgKIAngEIg1gRIgOgSQgIgKgBgLIABgBIADgWIAAgaQAUgLAHgeIgRgBQgQADgRAJQgQAIgRgDIgCgEABBheQALAHANgBIAXgHIAfgJQATgGAPAGIgGAKIgJAmIgUAaIAAABIgBACIgBALIAAABIgDAPIADADQAGAOANAJQAWAQAdADIAMAGIAYAJIgqAFQAiAOgEADIgaAJIgwAJIgugEQgmgIgaAWIAAABIgUAAIgigIIgVAIIgTAAQgngMgfgBIgzAFQgTAGg9gGIA1gYIgxgHIAVgFQAigSAMglIAEgRQAFgJABgLQAAgFgDgEIgFgFIgTg4QABgCACAAQAggJAgAOIAVAGIARgGQAcgMAbgGIAyABQAYADAWAMIAAAAABmAdIAJAHIABAEIgkgTIgfgNIAmAdIgIgDQgSgDgQgTQgDgDgHgEQgVgIAVADIAuAJIAOANQANAAAGgFIAIgGQgDAMgNAGIAAAAAgaAEIgCACIgFgBQgfgDgXAXIgEAFQgFAIgLAEIAfgiIgvAhIgRAFIAJgKQgNgFABgOIAAgBQAIAPARgIQAMgLAPgFIAmgJIAYAEIADAC").cp();
	this.shape_43.setTransform(0,0.1);

	this.addChild(this.shape_43,this.shape_42);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.6,-11,49.3,22.3);


(lib.shape261 = function() {
	this.initialize();

	// Layer 1
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#29A09F").s().p("AAAABIAAgBIAAABIAAAA").cp();
	this.shape_44.setTransform(-13.5,30.9);

	this.addChild(this.shape_44);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.6,30.8,0.1,0.3);


(lib.shape260 = function() {
	this.initialize();

	// Layer 1
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#29A09F").s().p("AgaiPIA2gCIABAAQAHA8AWAcIAdAkIAXATIAPAXIAAAbIgDAcQgDAOgLALIgeAfQgEAHgWADIgkAEIgCgWIgGhrIgCgDIgEABIgCCDIgjgBQAEgJgBgNIgGhFQgDgXgIgWQgEgJgKAEIAPB7QgvgMgSgtQgGgPABgTIAPgkIAQgSIAyhOQAMgXgBgYIAAAAAh8BSIABACIgBAAIAAgC").cp();
	this.shape_45.setTransform(-1.5,1.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#217E7D").s().p("AANh7Ig2ACIAAgEQAAgMgEgLIgDgIAgvicIAWgPIAgAOIAGABQgCAQACAOIAAADAB8gHQAKgHAKAHIAKAHIAJAPQAKA4gbApIgMASIgPAQQBWgJAhAJQAGALgTAEIh2AFIgogFQAbgOAIgQQAIgQAKgOQAJgOgCgbQgDgbgJgQIgHgMIAQgMAiLBnIAAADIAIARIACACIABABQAVAeAjAIIgkAGIgQACIhygKQAIgXBjAJIgIgRQgFgNgCABIgIgMQgEgMgOgUIgBgBQgHgNAAgPIABgPIAAgDQAAgIAEgEIAFgFIAIgEQAPgFAMAVIgEAIIgFANQgHAXAHAYIAEAKIAAABIABAB").cp();
	this.shape_46.setTransform(0,-0.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AB7gXIgPAOIAHAKQAJAQACAbQACAagJAPQgJAOgIAQQgJAPgbAPIAoAEIB3gFQASgEgGgKQghgJhWAIIAPgPIAMgSQAbgpgJg3IgJgOIgKgJQgLgHgKAHIAAAAAANiMIgBgCQgBgPABgPIgFgBIAUAAIAAAwQAAAFAFAQQAEARAUAUIAaAcIAPATQAIAKAAgJQADgMAIgFIACgCIAFgCQAWgDASAPIADADIAEAGIACAEQANAhgHAoQgFAqgbATIBegGQAKACAHAKIgCAPQgBAKgTAJIiBAIIhGgEQgNgCgXAJQgbAJgbgJIgTgCIguAEIgDAAIgFAAQhFgEg0gMQgOgKALgOQACgTBhAJIgHgMQgEgJgFgGIgWglQgNggAMgZQACgLAWgMQATgCATALIAHAEIAHgJIACgDIAMgUIAdguQAOgUgCglIAAgBIgDgbIgEgBIATAAIADAIQADAMABAMIAAADQAAAYgLAXIgzBPIgPARIgPAkQgCATAGAQQASAtAvAMIgPh8QALgDAEAJQAIAWADAXIAGBFQAAANgDAJIAlABIACiEIAEAAIACADIAFBrIAAAVIAlgEQAWgCAEgIIAegeQALgMADgOIADgbIgBgbIgOgaIgYgRIgdgjQgWgdgHg8IAAAAAh7gHIABgBIgCgBIABACAiLBaIAAAAIgBgDIAAgBIgBgBIgDgKQgHgYAGgXIAFgNIAFgIQgMgTgQAFIgIAEIgFADQgDAEAAAIIAAADIgBAPQgBAPAIANIABABQANAUAEAMIAIAMQADgBAEAMIAJASQhjgJgIAWIBxAKIAQgBIAlgHQgjgIgWgdIgBgCIgBgBIgIgR").cp();
	this.shape_47.setTransform(0,0.7);

	this.addChild(this.shape_47,this.shape_46,this.shape_45);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.7,-18.1,51.5,36.3);


(lib.shape259 = function() {
	this.initialize();

	// Layer 1
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF00").s().p("AELgJIETI9IoUlaImdFvICxoKIk7jLIGKgdICNmfIC0F8IFmgoIkJDr").cp();

	this.addChild(this.shape_48);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.2,-58.5,108.5,117.1);


(lib.shape258 = function() {
	this.initialize();

	// Layer 2
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("ABigPIAAAAQATACASAIIACABIADAEIgCAAQgTALgWADIACgEIACgOQABgGgEgFIAAAAABOgQIgDAGIgCALIAAAMIADADQgcAAgXgQIAGgCQAOgMASgCIAPAAAgfgBIAHACQgXAQgbAAIACgDIAAgMQAAgFgCgGIgDgGIAPAAQASACANAMIAAAAAhhgOQgEAFACAGIABAOIADAEQgXgDgTgMIgCAAIAEgDIABgBQASgIATgC").cp();
	this.shape_49.setTransform(-3.3,-18.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("ACRgFIACABIASgRIACgBIAFgDIABAAIABAAIABABIAAABIABAAIAAACIAAACIgBACIgDABIAAABIgBADIgDABIgHAGIgIAFIACADIAAAAIAAACIAAABIgBABIgDABIgFgDIgIAFQgZANgaACQgYABgagJIgEgCQgLgEgEgHIgJABIAAgBIgBgBIAAgBIAEgDQAmgeAzAIIAQACQAPAGANAKIAAAAABigPIgBAAIAAABQAEAEgBAGIgBAOIgDAFQAWgEAUgLIACAAIgEgDIgBgCQgSgHgTgDIAAAAABOgQIgPABQgSACgOALIgGACQAXAQAbABIgCgDIAAgNIACgLIADgGAisgYIABAAIAFADIACABQAHAKALAHIACgBQAMgKAQgGIAPgCQAzgIAnAeIAEADIAAABIgBABIAAABIgJgBQgEAHgLAEIgEACQgaAJgZgBQgagCgYgNIgIgFIgFADIgDgBIgBgBIAAgBIAAgCIAAAAIACgDIgJgFIgGgGIgDgBIgBgDIAAgBIgDgBIgBgCIAAgCIAAgCIAAAAIABgBIABgBIABAAAgfgBQgNgLgSgCIgPgBIADAGQACAGAAAFIAAANIgCADQAbgBAXgQIgHgCAhhgOQgTADgSAHIgBACIgEACIACABQATALAXAEIgDgFIgBgOQgCgGAEgE").cp();
	this.shape_50.setTransform(-3.2,-18.8);

	// Layer 1
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#29A09F").s().p("AghiRIA3AEQAHA2AoAsIAaAaIAKAIIAJAIIAHABQAGAMAEAYQAFAXgTAdQgUAdggAIQgMgBABgRQACghAFgeIADgOIAHgTIACgHIgBgGIgJAAQghA1AMBCIADAIIAEANIAJAIIgtgCIgGgWIgGhrIgBgDIgDABIgCCDIglAAQAEgKgBgMIgGhGQgDgWgIgXQgEgHgKACIAPB8QgvgMgSgtQgGgQABgTIAPgjIAQgSIAyhPQAMgXgBgYIAAAAAiDBQIABACIgBAAIAAgC").cp();
	this.shape_51.setTransform(-0.1,11.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#217E7D").s().p("AAOh5Ig3gDIAAgEQAAgMgEgLIgDgIIAVgIIAoAIQgCAQACAOIABAIACQgKIAKAJIAJANQAKA4gbApIgMASIgPAPQBWgIAhAJQAGAKgTAEQhbAMhDgLQAfgFAXgkQAYglgGgeQgGgfgEgBIgQgSIALgKQAKgHAKAHIAAAAAiLBkIAAADIAIARIACABIABACQAVAdAjAIIgkAHIgQABIhygKQAIgWBjAJIgIgSQgFgMgCABIgIgMQgEgMgOgUIgBgBQgHgNAAgPIABgPIAAgDQAAgIAEgEIAFgFQADgCAFgCQAPgEAMAUIgEAIIgFANQgHAXAHAYIAEAKIAAABIABAB").cp();
	this.shape_52.setTransform(0.6,9.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#33CCCC").s().p("ABChOQAAADACABQARADAQgIQARgJAQgDIARABQgHAfgUAKQADATgFAUQgGAQANAPIAOASIA1ARIgnAEQAtAKgPAGQgPAGgcgCIg5gCQgeAFgcAJIgSgCIgGgBQAHgBAFgEQAIgFgCgJQgCgKgIABIgRAAIgTABQgIADAAAHQAAAHAIAFQAFAEAHABQgnAOgogNQgYgIgaAAIg0AFIASgUIgUgBIgBgCIADgCQAigagCgfIgBgiIAEgMIgCgHIgLgPIgBgRIAdABIAoAMQAkgZAugDQArgDAqATIABAB").cp();
	this.shape_53.setTransform(-1.2,-17.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AA1j8IgBgBQgqgTgrADQguADgkAZIgngMIgdgBIABARIALAPIABAHIgEAMIACAkQACAfgiAaIgEACIACACIAUABIgSAUIA0gFQAaAAAYAIQAnANAogOQgHgBgFgEQgJgFABgHQgBgHAIgDIAUgBIAQAAQAIgBACAKQACAJgIAFQgEAEgGABIAGABIAQACQAcgJAegFIA5ACQAcACAPgGQAPgGgtgKIAngEIg1gRIgOgSQgNgPAGgSQAFgUgDgTQAUgKAHgfIgRgBQgQADgRAJQgQAIgRgDQgCgBAAgDIAAAAAACkbQAYADAWAMQALAGANgBIAXgHIAfgIQATgGAPAFIgGALIgJAlIgUAaIgFAeIADAFQAGAOANAJQAWAQAdADIAMAGIAYAJIgqAFQAiAOgEADIgaAJIgwAJIgugEQgmgHgaAVIAAAxQAAAFAFAOQAEAQAUAVIAaAcIAPATQAIAJAAgJQADgMAIgFIACgBIAFgCQAWgDASAPIADADIAEAFIACAEQANAjgHAoQgFAqgbAUIBegGQAKABAHAKIgCAPQgBAKgTAJQheARhOgNQgNAMgRAAQgSACgRgHQgZAJgbgJIgTgCIguAEIgDAAIgFAAQhFgDg0gNQgOgJALgOQACgUBhAJIgHgLQgEgJgFgHIgWgkQgNggAMgaQACgMAWgNQATgCATAMIAHAEIAHgJIACgEIAMgUIAdgtQAOgVgCgiIAAgBIgDgbQgqgNgggBIgzAFQgTAGg9gGIA1gYIgxgHIAVgFQAigSAMglQAGgVgBgWIgWhCIADgCQAggIAgANIAVAHIARgHQAcgMAbgGIAyACAgjgbQAAAYgLAVIgzBOIgPATIgPAlQgCATAGAPQASAtAvAMIgPh7QALgEAEAJQAIAWADAXIAGBFQAAANgDAJIAlABIACiDIAEgBIABADIAFBrIAFAWIAtABIgJgHIgDgNIgDgIQgNhCAig3IAJAAIABAIIgCAHIgHASIgEAPQgFAegBAgQgBASAMABQAggIATgdQATgegEgXQgFgXgGgNIgGgCIgKgIIgJgIIgagaQgpgsgHg0IgBgIQgBgPABgPIgngJIgVAIIADAIQADAMABAMIAAADACWBVQgLgHgKAHIgKAMIAQASQADACAGAeQAGAegXAlQgYAlgfAEQBDALBcgLQASgEgGgLQghgJhWAJIAPgQIAMgRQAbgqgJg3IgJgQIgKgJAiFDIIAAAAIgBgCIAAgBIgBgCIgDgKQgHgXAGgXIAFgOIAFgHQgMgWgQAGQgFABgDADIgFAEQgDAFAAAHIAAADIgBAQQgBAOAIANIABABQANAUAEAMIAIAMQADAAAEAMIAJARQhjgJgIAXIBxAKIAQgCIAlgGQgjgIgWgeIgBgBIgBgCIgIgRAh0BkIgCAAIABABIABgB").cp();
	this.shape_54.setTransform(0,0.1);

	this.addChild(this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.2,-28.4,52.7,57.2);


(lib.shape131 = function() {
	this.initialize();

	// Layer 1
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#228C2F").s().p("ADuAUQhXAhh4gCIjkAIQhvALgJgRQgJgRBbgeQBbgcCEgVQCDgUBgABQBfABAIAZQAHAZhXAfIAAAA").cp();
	this.shape_55.setTransform(34.6,33.9);

	this.addChild(this.shape_55);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.7,27.6,63.8,12.8);


(lib.shape115 = function() {
	this.initialize();

	// Layer 1
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#228C2F").s().p("AkAAAIgBgEIADgGIgCAKAjXASQAoADApgKIAEgGIgFgpIAEAJIAHAHIAMAGIAqAHQgGAIAFAJQAEAHAJACQA4ANAvgTIBHgDIAjgNIAEgFIAIgdIACAAIARADQBMANAAARQAAAQhMANIi2AMQhqAAhLgMIgigH").cp();
	this.shape_56.setTransform(0,12.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAfAAQAHgLAIAIQADADgIACQgHACgDgEIAAAAAgsAAQACgCAEAAIADABQABABgBABIgBAGIgHAAIgDgCIAAgCIACgD").cp();
	this.shape_57.setTransform(-7.7,-12.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#996600").s().p("ABYgUIAAABIABAAIgGAnIgqABQAIAAAGgFQAGgGAAgIQAAgGgGgGQgHgFgJAAQgKAAgHAFQgGAGAAAGQAAAIAGAGQAHAFAKAAIhBADQAKgFgDgTQgCgKgMgEIgSACIgKAJQgGANAIAMIAHADIgkgBIAKglIABgBIA0gIIBVgCIAXAEIAFAA").cp();
	this.shape_58.setTransform(-7.6,-13.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CCCCCC").s().p("ABrh1QAEAAADADIAEAIIgEAHQgDAEgEAAQgFAAgBgEQgCgDACgEIACgIQgBgDAFAAIAAAAABYAhQAIACAGAEIgBAUIgNgaAgzAgIAngEIAMABIACATIAABFQgcAEgVgPIgDgCIgNgKQgFgmAMgPIAFgJAhmhtIgFAWQgLAAgDgOQAEgJAPABIAAAAABrBtIgCgmIAGASIAEAHIAHAGIgPAH").cp();
	this.shape_59.setTransform(-7.2,-2.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999966").s().p("ABIAAQgGgEgIgCIgBgDIgRgMIABAJIARAkIAFAeIABAfQANAGACAKIgFAGQg4ANgfgNQgDgHADgHIAFgGIABg+QAFgYgUgbIgGAQIAAAAIgNgBIgnAEIgBgMIgFgGQgGAIgFAPIgJAkQADAOABAOQACATAAAUQgxALgxgNQAFgQAKgGQAFgEAIAAIABgLIAEgoIAAgNIAJgmIAchFIAIgKQBZAFBagKIALAZQAiAeAsAKQAKADAIAFQARANAHASIAFANQAIAegLAcIgIAPIgDAGIgBAGIgEAJQgpANgogHIgCgOIgKgHQAKgFAMgCQAagHAJARQABgLgRgKIgNgJQgTgRgHgaQAAgJAEgIQAFgNAIgEIAHgIQgNgHgPAOIgHALIgCAL").cp();
	this.shape_60.setTransform(-4.2,1.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("ADPBXIgIAcIgEAGIgjAPIhHACQgxATg2gNQgJgCgEgHQgFgJAGgJIgqgHIgMgHIgHgHIgEgIIAFArIgEAGQgpAKgogEIgkgGIgFgIIAAgFIACgLIABgHIAJgNIATgJIABgIIAAAAIAEhAIAGgMIAAgLIAIgbIAcg0IgMgEQgIgCgIgKIgFgNIACgIQAJgQAbADIASgDIAAACIgKAnIAkABIgHgDQgJgMAGgPIALgJIARgDQAMAEADAMQADAUgKAFIBAgDQgIAAgGgGQgHgFAAgIQAAgIAHgGQAGgGAIAAQAKAAAGAGQAHAGAAAIQAAAIgHAFQgFAFgIABIAqgCIAFgoIAAgBIgBgBIAQADIADgCQAdACACAaIgJAOQgHAIgRAAIANAWQAZAaBCAWQAUAIAKAUIADAIQAIAegEANIABgBIgCAUIgEARABOiIQgFAAABAEIgCAHQgCAEACAEQABADAFAAQAEAAADgDIAEgIIgEgHQgDgEgEAAIAAAAAhQANIgFAJQgMAPAFAnIANAJIADACQAVAPAegDIAAhGIgCgSIgBgBIAHgOQAUAcgGAYIAAA+IgGAGQgCAHACAGQAgANA3gMIAGgHQgDgJgMgGIgCgfIgFgeIgQgmIgBgJIAQAMIACACIANAbIABgVIACgLIAHgJQAPgNANAHIgIAGQgIAEgEANQgFAJABAKQAHAaATAQIAMAKQARAKAAALQgJgRgaAHQgMABgKAFIAKAHIABAPQApAGAogNIAEgIIACgHIADgFIAHgPQALgcgHgfIgFgPQgIgQgRgMQgIgGgJgCQgsgKgigeIgMgZQhaAJhZgEIgIAJIgbBGIgJAmIAAAMIgFApIAAAKQgIABgGAEQgJAGgFAPQAwAOAxgLQABgUgCgUQgCgNgDgOIAKgmQAEgQAHgFIAEAEIABALAgBh8QABAFAHgBQAIgDgDgEQgIgIgFALIAAAAAiDh/QgPgBgEAJQADANALABIAFgWAhOh8IgCAEIAAACIADADIAHAAIABgGQABgDgBgBIgDgBQgEgBgCADIAAAAABOBaIAPgGIgHgHIgEgHIgGgSIACAm").cp();
	this.shape_61.setTransform(-4.3,-0.4);

	this.addChild(this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.7,-15.8,51.7,31.7);


(lib.shape113 = function() {
	this.initialize();

	// Layer 1
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6F6D4A").s().p("AgSAvIgQgmQAbgOAHgOQABgSALgIQAQgEAFALIABAKQAGAfgaAYQgLAJgVALIAAAA").cp();
	this.shape_62.setTransform(-0.1,0.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgVAwQAWgMALgJQAagXgGgfIgBgKQgFgMgRAFQgJAHgBASQgJAPgbAOIgIgKIAbgWIAHgMQABgPAKgHIACgCQAjgFAHAiQAHAhgWAcQgLAPgSAIIgJAEIgFABIgHgM").cp();

	this.addChild(this.shape_63,this.shape_62);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.5,-5.9,9.3,12.1);


(lib.shape48 = function() {
	this.initialize();

	// Layer 1
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("ABABNIgOAPIgOgGQgHgDgFgGQgLgDgHgKIgLgQIgdgfQgigBgegOQgTgGgKgTIgDgGIgBgOIAAgIQABgbAWgNIBWAIIAeABIAMABIAbAYQAdAgAnAVIAHAFIAKAHIgQAPIgagVIgigXIghgeQgRgSgXAFQgjAHgggPIgSABIgDADIgGALIgBAEIAAADIAAALIAAACIAIANIACACIABACIABABIACACQAQAMAUACIAlADIAfAfQAYAfAiAPIAAAA").cp();

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#999966").s().p("AByAVIgIAIIgrAuQgigOgZgfIgeggIglgCQgUgCgQgNIgCgBIgBgCIgBgCIgCgCIgIgNIAAgBIAAgMIAAgDIABgEIAGgLIADgDIASgBQAgAPAjgHQAXgFAQASIAiAeIAiAXIAZAV").cp();
	this.shape_65.setTransform(0.1,0.2);

	this.addChild(this.shape_65,this.shape_64);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.1,-9.2,26.4,18.5);


(lib.shape47 = function() {
	this.initialize();

	// Layer 1
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("ABbB8QAYARAHgLQAGgMgTgPQgpADAXASIAAAAAC9BjQgpADAXARQAYASAHgMQAGgMgTgOIAAAAAjLg6IACABQATgIATgLIAXgPIANgJQAWgQAYgIQAVgHAXgCQA6gFgIA8IgDARQgGARgIAKAgrgiIgDgVQgJgngageAAaBoQglAKAWALQAXALgBgNQgBgNgGgGIAAAAAiMhbQATAXABAh");
	this.shape_66.setTransform(-7.2,-14.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CCCCCC").s().p("ABkhvIgOgDIghgGIAAgdQAcAPATAXIAAAAAiHgUQAdgaAsANQgTAOgZACIgWAAIgHgDAB8gJQAMAZAAAeIgBAUQg2gFgVARQgYASgJAdIgHAZIgEgLQgXgmAPgwIAbhHIABgFQAqATAugFIAAAA").cp();
	this.shape_67.setTransform(-10.8,18.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#996600").s().p("AgGAIQAWARAHgLQAGgMgTgNQgnADAXAQIAAAAABzAVIisAJQgygEgYgTQAEgaAZgLQBiABBeAEIAMABQAOABALALIAFAMIgEAMIgHAHIgCgBIgEADABagPQgpADAXAPQAYASAHgMQAGgKgTgOIAAAAAhHgKQgnAKAYAJQAXALgBgNQgBgLgGgGIAAAA").cp();
	this.shape_68.setTransform(2.6,-2.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("ABbB8QgYgSApgDQAUAPgHAMQgHALgXgRIAAAAAC8BjQAUAOgHAMQgHAMgXgSQgYgRApgDIAAAAAAJg9QgJAOgNAIIgeAFQgnAEgngFIgPgCIgjgIQgMgDgLgEIgIgFQATgIATgLIAXgPIANgJQAWgQAZgIQAVgHAXgCQA6gFgIA8IgEARAgrgiIgEgVQgJgngZgeQAZAeAJAnIAEAVAAaBoQAGAGABANQABANgYgLQgWgLAmgKIAAAAAiNhbQATAXABAhQgBghgTgXIAAAA").cp();
	this.shape_69.setTransform(-7.1,-14.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BCBC9C").s().p("AB3BFIADgRQAIg6g8AFQgXABgVAGQgYAIgUAQIgNAJIgXAPQgTALgTAIIgCgBQgMgIgJgKQgOgRgEgXIgDgIIAAgLQBEgCAZg6IgIgHIAuACIAwAJQAtAJAgAgQAgAkgcAtIgFAI").cp();
	this.shape_70.setTransform(-18.1,-27.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#999966").s().p("ABTnTQAjAeASApQAVA1gPA8IgTAVIgGAFIgIAFQghAJghAAQgQgBgMgHIgjgqQgFgJABgNQADgcAUgXIAShPIgOADIgTA5IgcgNIABgMIAZhDQAKgHAIgDQAwgMAjAgIAAAAABojqIgXCaIiogDQgng1g+gXQAUADASgEQAcgFAXgTQAygqgRg2QgGgSgNgNQgMgRgPgMQghgWgmgFIgngBIAQgSIAAABIAAAEQAJAKAOAEQAEAAAFgDQAFgEADgGIAHgEQAHgJgCgKIgJgJIAAgBIAmgFQAoABAKgfIgHgHIgBAAIgDgBIg5AMIAtgdIA8gIIgcBcQAMAVAcACQgbAsATAqQAUAqArAMIA0gBIAXgHAi6mXIADgBIgBABIgCAAAgHD0IABgTQgBgfgLgbIAJgBIADgBIABgBIgCgJIgSgBQg5gGg3gUQgVgIgYAAQgLAOgNAKQgtgNgcAaIgLgEQAJgSANgQIAYgYIAbgTQAjgUArAJIBDAQIAmADIAKgCIADgBIgBgDIgVgMQgTgXgcgPIAAgFIADgIICrgGQARAtgDA2QgCAYgFAWQgHAeADAgIAwAwQAQAQAMAUIAHAMQAKAwgVAtQgGAOgEAUIAKAOIASAJIgbAJIg8AGIjlAIIgyAHIgVgFIgBgXQASgQAjgDQAjgCAeACIAsgDIAJgEIACgGQgYgHgOgRQgRgUgIgYQgGgSAEgSQAIgmAQgLIAagPIArgQIALgDIgIgBADYCnIAQgiQAVggAeAOIAIAgQgMBOhJA+IgVAOIgZgpQAjgNALgiIAKgu").cp();
	this.shape_71.setTransform(3.6,0.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAXn4IAzACQAUAFARALQAeAPAYAZQAQAUAJAaQAQAugFAwIgEASQgIAfgbARIgYCnIAFABQAKADAJAHQAZAdgTAeIgEADIgZAMIAIAZQAGAXgBAYQgEA/gHA9IApAmIAqgfQAEgeALgVQALgWARgYQAQgYAhAHQAgAGgFAkIgHArQgHAfgWAbIgIAKIgrAwQgNAMgQAIIAAAPQAAA0gXAwIARAGIAMAbQgMAUgXAAIg+AHIhlADQhHgBicAGIgQgQQgXgZA5gSQA4gTBHAEQgfgegKgpIgJgNIgNgYQgIgOgBgRQgIhMAphCQgWgRgeAHIgMALIgZAXQgHAHgJACQggAEgegJIgFgCQgPgHACgSQABgSALgNIABgBQAWgaAbgTIAPgJQANgIAPgDQAugMAvAMIACgrIgdgLIgYgNQgCgTAMgRIAZgeIAOgDQgagXgegQQgdgSgfgOIgEgBIgOgGIgagKIgWgFQgpgDgQgkIgGgGIgBgDIgMgWQgHgYACgaIgFgFIAIglQgCgVAbgKQAwgKA2AIIASgSIACgDIgKAAIgDgBIgHgHIgBgEIAAgGQAdgTAkgHQAiggAogVQAWgLAXAAIAwgFAB3nSQgkgggvANQgLACgKAHIgXBDIgBAMIAbANIAUg5IAOgCIgTBPQgVAWgDAdQgBAMAGAKIAlApQALAIARAAQAhABAhgKIAHgEIAHgGIASgUQAPg8gVg1QgRgqgjgeIAAAAACLjoIgWAGIg0ACQgtgMgUgrQgSgqAZgrQgagCgLgVIAbhdIg8AJIgsAcIA5gMIADACIAAAAIAHAHQgJAfgogBIgmAFIgBAAIAKAJQACALgIAIIgHAFQgCAFgGAFQgEADgFAAQgOgEgJgLIAAgEIAAgBIgQASIAnACQAnAFAhAVQAPANALAQQAOANAFASQASA3gyApQgYATgbAGQgTADgUgDQA/AXAmA1ICoADIAXiZACNgIIAEgDIACACIAHgHIAEgOIgFgMQgLgLgOgCIgMAAQhggFhgAAQgZAKgEAcQAYAUAyACICsgIAiWmWIABAAIABgBIgCABAkSjLIAIAEQALAFAMADIAiAHIAQADQAmAEAngEIAegEQAOgJALgNIAFgIQAcgugggmQgggfgtgKIgygJIgugCIAIAIQgZA6hEABIAAANIADAJQAEAXAOAQQAJALAMAIIACABAg9jPQgGAQgKALQAKgLAGgQIAAAAAgHBDIATANIAAACIgCACIgKACIglgDIhDgQQgrgJgjAUIgbASIgYAYQgNAQgIATIAKADIAIADIAVAAQAZgCATgOQANgJALgPQAYAAAWAIQA2AUA4AGIASABIACAJIgBABIgDABIgKACQgsAFgqgTIgBAFIgbBJQgQAwAZAmIAEALIAHgZQAJgdAXgSQAVgRA0AFIALABIgOADIgpAPIgaAPQgPALgJAmQgEATAHASQAIAYARAUQAOARAYAGIgDAGIgJAFIgrADQgfgCgjACQgiACgSARIABAWIAVAFIAygGIDkgJIA9gGIAagIIgRgJIgLgPQAEgTAHgPQAVgtgKgvIgHgNQgNgUgQgPIgvgwQgEggAHgfQAGgWABgYQAEg1gRgtIisAFIgCAJIAAAEIAAAdIAhAGIAOADAD8CpIgLAtQgLAjgjAMIAZAqIAVgPQBJg+AMhOIgHgfQgfgPgVAhIgPAi").cp();
	this.shape_72.setTransform(0,0.1);

	this.addChild(this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.3,-50.3,68.9,101.1);


(lib.shape46 = function() {
	this.initialize();

	// Layer 1
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgqgbQAUgPAaAEQA1gBAVApIAHAPQgGAegTgKQgMgQgNgKQgRgLghACQgdAHgTAdIgUABIgBgQIAFgPQAAAHAGAFQAHAEAJgBQANgEABgOQAAgNgPgCIgEAAIAUgR").cp();
	this.shape_73.setTransform(0,-0.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgqgdIgUAQIAEAAQAPACAAAOQgBAOgNADQgJACgHgFQgGgEAAgHIgFAOIABAQIAUAAQATgdAdgHQAhgDARAMQANAKAMAQQATAJAGgdIgHgPQgVgqg1ABQgagDgUAPIAAAAAgzgmQARgJAUgCQAtgGAhAbQAYAUAEAdQgGAZgNADQgPADgKgLIgSgQQgagKgaALIgYARIgPAHQgSAEgLgPIgBgFQAEgqAkgeIAAAA").cp();

	this.addChild(this.shape_74,this.shape_73);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.1,-5.1,18.4,10.3);


(lib.shape45 = function() {
	this.initialize();

	// Layer 1
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("ADVgbQgCAUgOAPIgSAIQAGgPgIgWIAagMQANgLgDARIAAAAAA9AKIgRgKQAgAHAkgHIADAeIg2gUACTAhIgUgCIgFgfIAwgRQAFAMgCAMQgEAWgWAEIAAAAAiigDIA4AEIAAAjIg1ADIgDgqAilAlQgPgDgNgLIgHgJIgNgjIAJAFIAjALIAEAqAgrAAIgGAEIgvAbIgBgeIA2gB").cp();
	this.shape_75.setTransform(0.7,13.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF9999").s().p("AAXAfIglABQgcgLgKgcIAtgYQAJAfgGAWQALgVABghIAtAXQgFAOgIALIgRAP").cp();
	this.shape_76.setTransform(0.3,17.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#BCBC9C").s().p("ADmgaQAGAPgDARQgDAUgLASIADgRIADgGIAEgCIgBgHIgHgKQgFgEgKgCIgagDQAQAHAPAHIg6AbQgWAJgWACQgyADgygDIgxACIgxABIgxgFIgEAAIgtgJIgLgEQgKgBgDgIIAggYIglAHQgOATADASIAIgLIACANIADAKQAKAaAXAPIgZgKQgNgGgFgNQgPgtAKguIABgFIACgHIAJgOQAHgKAHgGIAXgQQAQgKANABIANACQAnAFAjAUQAKgIAIAAIAJAEIAAAUIAPAJIAKAEIATAAIAGgCIASgLIAGgIIAFgQQAGgGAHACIAIALQA8gYBBAMIARANIAKAMIAFAIIAKAU").cp();
	this.shape_77.setTransform(0.5,8.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#999966").s().p("AB3gbIAHgFQAmgkAwgHIALAAQARAAANAHQAQAIAFACIAYARQASAOgLAnIgCAHIgIAFQgOAMgZgDQgLgCgIgKIgGgIIgIgQIgHgOQgIgNgMgHQgTgKgQANIgKAJIgMAKIgMAKIAKAMQATAVABAZIACAcIhDAEQgFgLgQgLQgxgSgpAHQgsAHgUAaIhCgQIANgjIAEgJIAGgMQAEgIgFgGIgJgJQgSgQgXAEQgaARgOAYQgOAagUAWIgMAMQgMAJgMgHQgRgFgDgQIAAgFQgHg3AvgeQAUgNATgLIATgKQAqgJAcAZIARARIAIAGIAJgNQAegaATgJQAUgKAigBQAegCAeANQAdAOANARIALALIAFADIADAB").cp();
	this.shape_78.setTransform(0.2,-9.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AB6iLIgEgBIgEgDIgLgLQgOgRgdgOQgdgNgfACQghABgUAKQgUAJgdAaIgJANIgJgGIgQgRQgdgZgqAJIgSAKQgUALgTANQgvAgAGA3IABAFQACAQARAFQAMAHANgJIAMgMQAUgWAOgaQANgaAbgRQAWgEATAQIAIAJQAFAIgEAIIgFAMIgEAJIgNAjIBCAQQATgaAsgHQAqgHAwASQARALAFALIBCgEIgCgcQgBgZgSgVIgLgOIANgKIALgKIALgJQAPgNATAKQANAHAHANIAHAOIAIASIAGAIQAIAKAMACQAYADAPgMIAHgFIADgHQALgpgSgOIgYgRQgGgCgQgIQgMgHgSAAIgKAAQgxAHglAkIgHAFAB4igIAOgJIAmgVQAOgIAUgFIATgCIAUAEQAUAHAcAOQAcAPADA4QABAVgRALQgiAYgogTIgJgJQgOgQgJgbQgDgJgMgFIgMABIgRAPIgDAEIgBAGIABAGIAIATQAQAegHAdQAgABAVAYIABABQASATAGAYQAFARgBASQgCAlgbAWQgfAeg4AGIgKgBIgfgGIgagIQgEAGgEANQgEAMgiAQIgVAGQgKACgKgCIgOgGQgWgOgFgLIgIgUIguAQIg2AEQgZgBgTgNIgSgNQgRgaABgaQgCgeAIgcIAHgSQAUgqAugRIAahDQgFgagWADQgHALgQAOQgRANgNAgQgOAhggAHQgiAHgTgeIgCgLQgHgUAHgXIADgIQAgg8BAgaQAkgOAoAQIAeAZIATgSQAMgKAVgMQAVgMAqAEQBIgDAvAzIAAAAADrApIgKgUIgFgIIgKgMIgRgLQhBgMg8AWIgIgJQgHgCgGAGIgFAOIgGAIIgSALIgGACIgTAAIgKgEIgPgJIAAgSIgJgEQgIAAgKAGQgjgSgngFIgNgCQgNgBgQAKIgXAPQgHAFgHAKIgJAOIgCAHIgBAFQgKAwAPAtQAFANANAGIAZAKQgXgPgKgaIgDgKIgCgNIgIALQgDgSAOgTIAlgJIggAaQADAIAKABIALAEIAtAJIAEAAIAxAFIAxgBIAxgCQAyADAygDQAWgCAWgJIA6gbQgPgIgQgIIAaADQAKACAFAGIAHAKIABAHIgEACIgDAGIgDARQALgSADgUQADgTgGgPIAAAAADcBfQADgRgNALIgaAMQAIAYgGAPIASgIQAOgRACgUIAAAAABECGIA2AUIgDgeQgkAHgggHIARAKAAaC/IAQgPQAJgMAFgPIgugXQAAAjgLAVQAGgYgJgfIgtAYQAKAeAcALIAlgBAieChIgEgsIgjgLIgJgFIANAlIAHAJQANALAPADIAAAAAibB3IADAsIA1gDIAAgjIg4gGACaCdQAWgEAEgWQACgOgFgMIgwATIAFAfIAUACAgkB7Ig2ACIABAeIAvgbIAGgF").cp();
	this.shape_79.setTransform(0,1.4);

	this.addChild(this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.4,-19.6,64.9,42.1);


(lib.狗骨头 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// 图层 1
	this.instance = new lib.元件1("synched",0);
	this.instance.setTransform(37.2,-58.4,1,1,85.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,rotation:74.7,x:3.8,y:-88.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:63.7,x:-30.6,y:-116.8},0).wait(1).to({rotation:52.9,x:-67.7,y:-142.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:41.9,x:-107.8,y:-162.2},0).wait(1).to({rotation:31.1,x:-151,y:-174.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:20.1,x:-195.9,y:-178.4},0).wait(1).to({rotation:9.3,x:-240.8,y:-172},0).wait(1).to({rotation:-1.3,x:-283.3,y:-155.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.1,x:-316.6,y:-121.6},0).wait(1).to({rotation:-23.1,x:-342,y:-80.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-33.9,x:-363,y:-39.1},0).wait(1).to({rotation:-44.9,x:-381.4,y:2.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-55.8,x:-401.8,y:43.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.1,x:-386.8,y:22.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:41.6,y:30,alpha:0.75},0).wait(1).to({scaleX:1,scaleY:1,rotation:83.5,y:37.1,alpha:0.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:125.3,x:-386.9,y:44.3,alpha:0.25},0).wait(1).to({scaleX:1,scaleY:1,rotation:167.1,y:51.5,alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.8,-73.6,29,30.3);


(lib.sprite116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 3
	this.instance_1 = new lib.shape46("synched",0);
	this.instance_1.setTransform(9.6,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},2).wait(1).to({y:-7.4},0).wait(4));

	// Layer 2
	this.instance_2 = new lib.shape46("synched",0);
	this.instance_2.setTransform(-10.7,-11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},2).wait(1).to({y:-6.9},0).wait(4));

	// Layer 1
	this.instance_3 = new lib.shape45("synched",0);
	this.instance_3.setTransform(0,-1.8,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},2).wait(1).to({y:2.2},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-28.2,87,56.5);


(lib.sprite114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.instance_4 = new lib.shape113("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},2).wait(1).to({rotation:45,y:2.5},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-6,9.3,12.1);


(lib.Dog_xiao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_4 = function() {
		playSound("sound117");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(32));

	// Layer 4
	this.instance_5 = new lib.sprite116();
	this.instance_5.setTransform(43,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(37));

	// Layer 3
	this.instance_6 = new lib.shape115("synched",0);
	this.instance_6.setTransform(59.6,59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(37));

	// Layer 1
	this.instance_7 = new lib.sprite114();
	this.instance_7.setTransform(77.2,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-1.2,87,76.5);


(lib.DOG_throw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_1 = function() {
		playSound("sound244");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(13));

	// Layer 3
	this.instance_8 = new lib.shape47("synched",0);
	this.instance_8.setTransform(51.5,53,1,1.024,0,-2.8,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).wait(15));

	// Layer 2
	this.instance_9 = new lib.shape48("synched",0);
	this.instance_9.setTransform(23.5,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:19,y:16.6},1).to({scaleX:1,scaleY:1,rotation:-12.6,x:14,y:21.3},1).wait(13));

	// Layer 1
	this.instance_10 = new lib.shape131("synched",0);
	this.instance_10.setTransform(32.4,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.3,-0.3,88.6,107);


(lib.Dog_attack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// 图层 1
	this.instance_11 = new lib.元件4("synched",0);
	this.instance_11.setTransform(3.4,2.5);

	this.instance_12 = new lib.元件3("synched",0);
	this.instance_12.setTransform(-13.6,12.4);

	this.instance_13 = new lib.元件2("synched",0);

	this.instance_14 = new lib.元件7("synched",0);
	this.instance_14.setTransform(22,-10.5);

	this.instance_15 = new lib.元件6("synched",0);
	this.instance_15.setTransform(-0.3,-12.8);

	this.instance_16 = new lib.元件5("synched",0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AAOA6Ig/haIAxgZIAyBhIgkAS").cp();
	this.shape_80.setTransform(-1.3,-101.5);

	this.instance_17 = new lib.元件8("synched",0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("ABGAgQgoAPgiAUIhBhaQAugaAwgRIAtBi").cp();
	this.shape_81.setTransform(0.6,-102.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("ABcAbQhAAQg3AgIhAhaQBFgoBOgTIAkBl").cp();
	this.shape_82.setTransform(2.8,-103.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("ABvAYQhWAOhHAqIhAhaQBag0BpgRIAaBn").cp();
	this.shape_83.setTransform(4.7,-103.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("ACAAXQhqAKhVAyIhAhaQBug/CEgMIANBp").cp();
	this.shape_84.setTransform(6.4,-104);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("ACUAWQiCADhlA8IhAhbQCAhJCggFIAHBq").cp();
	this.shape_85.setTransform(8.4,-104.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("ACnhUIgCBqIgVAAQiLAAhqA/IhBhbQCJhOCtAAIAXAA").cp();
	this.shape_86.setTransform(10.3,-104.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AC1AYIg0gCQiIAAhtA/IhAhbQCJhOCsAAIA0ACIAABq").cp();
	this.shape_87.setTransform(11.7,-104.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AC9AbIhLgFQiJAAhsA/IhBhbQCJhOCtAAIBTAFIgIBq").cp();
	this.shape_88.setTransform(13.3,-104.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("ADDAfIhkgJQiJAAhsA/IhBhbQCJhOCtAAIB5AKIgVBp").cp();
	this.shape_89.setTransform(15.2,-104.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("ADphDIgkBmQg5gNg+AAQiJAAhsA/IhBhbQCJhOCtAAQBRAABKARIAAAA").cp();
	this.shape_90.setTransform(16.9,-104.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("ADJAnIAthjQhVgYhgAAQisAAiJBOIBABbQBtg/CIAAQBIAABAARIAAAA").cp();
	this.shape_91.setTransform(18.2,-104.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AEKgvQhmglh3AAQitAAiJBOIBBBbQBtg/CIAAQBVAABJAYIA/hd").cp();
	this.shape_92.setTransform(20.2,-104.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AAXhUQitAAiJBOIBABbQBtg/CJAAQBjAABVAhIBRhUQh4g3iRAAIAAAA").cp();
	this.shape_93.setTransform(22.4,-104.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AAChUQitAAiJBOIBBBbQBsg/CJAAQB1AABfAtIBfhLQiIhMirAAIAAAA").cp();
	this.shape_94.setTransform(24.5,-104.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AgLhUQiuAAiJBOIBABbQBtg/CKAAQCCAABpA6IBjhJQiShbi8AAIAAAA").cp();
	this.shape_95.setTransform(25.9,-104.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AgYhaQivAAiJBOIBBBbQBsg/CLAAQCUAABzBLIBihHQichujNAAIAAAA").cp();
	this.shape_96.setTransform(27.3,-103.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AglhhQiuAAiJBOIBABbQBtg/CKAAQCcAAB3BSIAJAHIBmhDQijiAjfAAIAAAA").cp();
	this.shape_97.setTransform(28.5,-102.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AFpAqIgBgBQiqiTjvAAQiugBiJBPIBABaQBtg+CKAAQCcAAB3BSIAhAZIBmhB").cp();
	this.shape_98.setTransform(29.7,-101.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AFdAfQiqiTjvAAQivgBiJBPIBBBaQBsg9CLAAQCcAAB3BRIA4AtIBmhAIgYgW").cp();
	this.shape_99.setTransform(30.9,-100.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AFQAXQiqiUjvAAQiuAAiJBOIBABbQBtg9CKAAQCcAAB3BQIBJA/IBug3Igxgw").cp();
	this.shape_100.setTransform(32.1,-100);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AEcCJIBwgzIgLgOIg7g8QiriTjuAAQivgBiJBPIBBBaQBsg9CLAAQCbAAB3BRIAtAjIAwAx").cp();
	this.shape_101.setTransform(33.2,-99);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0000").s().p("AEhCSIB0gtIgdgmIg8g8QiqiTjvAAQiugBiJBPIBABaQBtg9CKAAQCcAAB3BRIAsAjQAlAfAaAkIAAAA").cp();
	this.shape_102.setTransform(34.1,-98.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AElCbIB5giQgUgjgcggIg7g6QiqiWjvAAQiuAAiJBOIBABbQBtg9CKAAQCcAAB3BQIAsAjQAuAoAeAuIAAAA").cp();
	this.shape_103.setTransform(35,-97.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AErCmIB6geQgYgxgmgsIg7g6QiqiWjvAAQiuAAiJBOIBABbQBtg9CKAAQCcAAB3BQIAsAjQA4AxAhA7IAAAA").cp();
	this.shape_104.setTransform(35.7,-96);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AEwCxIB8gZQgchAgvg4Ig7g6QiriWjuAAQivAAiJBOIBBBdQBsg/CLAAQCbAAB3BQIAtAjQBCA7AiBHIAAAA").cp();
	this.shape_105.setTransform(36.4,-94.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AE2DAIB8gWQgbhTg8hGIg7g6QiriWjvAAQiuAAiJBOIBABdQBtg/CKAAQCcAAB3BSIAsAhQBRBHAgBZIAAAA").cp();
	this.shape_106.setTransform(37,-93.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("ACUgRQh3hTibAAQiLAAhsA/IhBhcQCJhPCvABQDuAACrCVIA7A6QBHBVAaBlIh8AWQgbhthfhTIgtgh").cp();
	this.shape_107.setTransform(37.5,-91.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("ACTgVQh3hTicAAQiKAAhtA/IhAhcQCJhPCuABQDvAACqCVIA8A8QBLBXAYBsIh8AUQgZhxhkhYIgsgh").cp();
	this.shape_108.setTransform(37.6,-91.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("ACRgcQh3hTicAAQiKAAhtA/IhAhcQCJhPCuABQDvAACqCVIA7A8QBUBhAUB6Ih+AKQgWh7hphcIgsgh").cp();
	this.shape_109.setTransform(37.8,-90.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("ACQggQh3hSicAAQiKAAhtA/IhBhdQCKhOCuAAQDvAACqCWIA7A8QBaBnARCEIiAAAQgUh/hshfIgsgh").cp();
	this.shape_110.setTransform(38,-90.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("ACPgmQh3hTicAAQiKAAhtA/IhAhcQCJhPCuABQDvAACqCVIA7A8QBeBtAOCMIh/AAQgQiIhyhhIgsgj").cp();
	this.shape_111.setTransform(38,-89.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-13.6,y:12.4}},{t:this.instance_11,p:{x:3.4}}]}).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-13.6,y:12.4}},{t:this.instance_11,p:{x:3.4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-11.9,y:13.8}},{t:this.instance_11,p:{x:4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-11.9,y:13.8}},{t:this.instance_11,p:{x:4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-13.6,y:12.4}},{t:this.instance_11,p:{x:3.4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-13.6,y:12.4}},{t:this.instance_11,p:{x:3.4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-11.9,y:13.8}},{t:this.instance_11,p:{x:4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-11.9,y:13.8}},{t:this.instance_11,p:{x:4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-11.9,y:13.8}},{t:this.instance_11,p:{x:4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-11.9,y:13.8}},{t:this.instance_11,p:{x:4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-13.6,y:12.4}},{t:this.instance_11,p:{x:3.4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-13.6,y:12.4}},{t:this.instance_11,p:{x:3.4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-11.9,y:13.8}},{t:this.instance_11,p:{x:4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-11.9,y:13.8}},{t:this.instance_11,p:{x:4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-11.9,y:13.8}},{t:this.instance_11,p:{x:4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-11.9,y:13.8}},{t:this.instance_11,p:{x:4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-11.9,y:13.8}},{t:this.instance_11,p:{x:4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-11.9,y:13.8}},{t:this.instance_11,p:{x:4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-11.9,y:13.8}},{t:this.instance_11,p:{x:4}}]},1).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-11.9,y:13.8}},{t:this.instance_11,p:{x:4}}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:0,skewY:0,x:-0.3,y:-12.8}},{t:this.instance_14,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:22,y:-10.5}}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:0,skewY:0,x:-0.3,y:-12.8}},{t:this.instance_14,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:22,y:-10.5}}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:46.2,y:-12.5}},{t:this.instance_14,p:{scaleX:0.998,scaleY:1.006,skewX:6.5,skewY:1.1,x:27.1,y:-10.8}},{t:this.instance_17},{t:this.shape_80}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:46.2,y:-12.5}},{t:this.instance_14,p:{scaleX:0.998,scaleY:1.006,skewX:6.5,skewY:1.1,x:27.1,y:-10.8}},{t:this.instance_17},{t:this.shape_81}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_82}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_83}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_84}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_85}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_86}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_87}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_88}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_89}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_90}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_91}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_92}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_93}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_94}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_95}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_96}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_97}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_98}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_99}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_100}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_101}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_102}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_103}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_104}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_105}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_106}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_107}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_108}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_109}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_110}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{skewX:4.8,skewY:-175.1,x:50.1,y:-11.6}},{t:this.instance_14,p:{scaleX:0.997,scaleY:1.015,skewX:10,skewY:1.1,x:30,y:-11}},{t:this.instance_17},{t:this.shape_111}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.8,-34.1,102.6,76.6);


(lib.Cat_hurt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		playSound("sound26");
	}
	this.frame_7 = function() {
		playSound("sound267");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(32));

	// Layer 6
	this.instance_18 = new lib.shape263("synched",0);
	this.instance_18.setTransform(28.6,34);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({startPosition:0,_off:false},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:-9.1,x:26.5,y:34.4},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:28.6,y:34},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:-9.1,x:26.5,y:34.4},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:28.6,y:34},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:-9.1,x:26.5,y:34.4},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:28.6,y:34},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:-9.1,x:26.5,y:34.4},0).to({startPosition:0},8).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:28.6,y:34},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:-9.1,x:26.5,y:34.4},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:28.6,y:34},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:-9.1,x:26.5,y:34.4},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:28.6,y:34},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:-9.1,x:26.5,y:34.4},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:28.6,y:34},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:-9.1,x:26.5,y:34.4},0).wait(2));

	// Layer 5
	this.instance_19 = new lib.shape259("synched",0);
	this.instance_19.setTransform(38.5,25.5,0.129,0.129);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({startPosition:0,_off:false},0).to({_off:true},1).wait(36));

	// Layer 4
	this.instance_20 = new lib.shape259("synched",0);
	this.instance_20.setTransform(27.5,19.5,0.249,0.249);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({scaleX:0.13,scaleY:0.13,x:17.1,y:29},1).to({_off:true},1).wait(1).to({x:11.1,y:21,_off:false},0).to({_off:true},1).wait(36));

	// Layer 3
	this.instance_21 = new lib.shape262("synched",0);
	this.instance_21.setTransform(25,23,1,1,5.8);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({startPosition:0,_off:false},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:1.5,x:24.3,y:24},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:5.8,x:25,y:23},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:1.5,x:24.3,y:24},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:5.8,x:25,y:23},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:1.5,x:24.3,y:24},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:5.8,x:25,y:23},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:1.5,x:24.3,y:24},0).to({startPosition:0},8).wait(1).to({scaleX:1,scaleY:1,rotation:5.8,x:25,y:23},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:1.5,x:24.3,y:24},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:5.8,x:25,y:23},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:1.5,x:24.3,y:24},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:5.8,x:25,y:23},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:1.5,x:24.3,y:24},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:5.8,x:25,y:23},0).to({startPosition:0},1).wait(1).to({scaleX:1,scaleY:1,rotation:1.5,x:24.3,y:24},0).wait(2));

	// Layer 2
	this.instance_22 = new lib.shape258("synched",0);
	this.instance_22.setTransform(29,28);

	this.instance_23 = new lib.shape261("synched",0);
	this.instance_23.setTransform(29,28);

	this.instance_24 = new lib.shape264("synched",0);
	this.instance_24.setTransform(29,28);

	this.instance_25 = new lib.shape265("synched",0);
	this.instance_25.setTransform(29,28);

	this.instance_26 = new lib.shape266("synched",0);
	this.instance_26.setTransform(29,28);

	this.instance_27 = new lib.shape268("synched",0);
	this.instance_27.setTransform(29,28);

	this.instance_28 = new lib.shape269("synched",0);
	this.instance_28.setTransform(29,28);

	this.instance_29 = new lib.shape270("synched",0);
	this.instance_29.setTransform(29,28);

	this.instance_30 = new lib.shape271("synched",0);
	this.instance_30.setTransform(29,28);

	this.instance_31 = new lib.shape272("synched",0);
	this.instance_31.setTransform(29,28);

	this.instance_32 = new lib.shape273("synched",0);
	this.instance_32.setTransform(29,28);

	this.instance_33 = new lib.shape274("synched",0);
	this.instance_33.setTransform(29,28);

	this.instance_34 = new lib.shape275("synched",0);
	this.instance_34.setTransform(29,28);

	this.instance_35 = new lib.shape276("synched",0);
	this.instance_35.setTransform(29,28);

	this.instance_36 = new lib.shape277("synched",0);
	this.instance_36.setTransform(29,28);

	this.instance_37 = new lib.shape278("synched",0);
	this.instance_37.setTransform(29,28);

	this.instance_38 = new lib.shape279("synched",0);
	this.instance_38.setTransform(29,28);

	this.instance_39 = new lib.shape280("synched",0);
	this.instance_39.setTransform(29,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22}]}).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},2).to({state:[{t:this.instance_31}]},7).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_33}]},2).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_35}]},2).to({state:[{t:this.instance_36}]},2).to({state:[{t:this.instance_37}]},2).to({state:[{t:this.instance_38}]},2).to({state:[{t:this.instance_39}]},2).wait(2));

	// Layer 1
	this.instance_40 = new lib.shape260("synched",0);
	this.instance_40.setTransform(28.3,39.6,1,0.879);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1).to({startPosition:0,_off:false},0).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.7,-0.4,52.7,57.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;