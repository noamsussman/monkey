(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"monkey_html2_atlas_1", frames: [[0,0,1960,1330]]},
		{name:"monkey_html2_atlas_2", frames: [[0,0,1960,1330]]},
		{name:"monkey_html2_atlas_3", frames: [[0,0,1802,1258]]},
		{name:"monkey_html2_atlas_4", frames: [[0,0,1775,1230]]},
		{name:"monkey_html2_atlas_5", frames: [[0,0,1384,1408]]},
		{name:"monkey_html2_atlas_6", frames: [[0,0,1384,1408]]},
		{name:"monkey_html2_atlas_7", frames: [[0,0,1533,1257],[1535,0,387,796],[1535,798,387,796]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_137 = function() {
	this.initialize(ss["monkey_html2_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_138 = function() {
	this.initialize(ss["monkey_html2_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_139 = function() {
	this.initialize(ss["monkey_html2_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_132 = function() {
	this.initialize(ss["monkey_html2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_133 = function() {
	this.initialize(ss["monkey_html2_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["monkey_html2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_134 = function() {
	this.initialize(ss["monkey_html2_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_127 = function() {
	this.initialize(ss["monkey_html2_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_126 = function() {
	this.initialize(ss["monkey_html2_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.monkey = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(17));

	// animation
	this.instance = new lib.CachedBmp_134();
	this.instance.setTransform(-887.7,-615.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_129();
	this.instance_1.setTransform(-1015.75,-661.7,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_133();
	this.instance_2.setTransform(-903.2,-627.7,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_132();
	this.instance_3.setTransform(-1015.75,-661.7,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_139();
	this.instance_4.setTransform(-869.45,-624.4,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_138();
	this.instance_5.setTransform(-825.95,-698.2,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_137();
	this.instance_6.setTransform(-825.95,-698.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1015.7,-698.2,1015.5,704);


(lib.banana = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_126();
	this.instance.setTransform(-193.55,-398.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_127();
	this.instance_1.setTransform(-273.6,-398.1,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#432D2D").s().p("AqVfBQgUgFgUgGIgggMIgDAJIgUAAIgLgPIgOgQIgFgOIAAgDIgFgHIgUgQIgKgPIgUgPIgPgPIgBgBIgTgEIgUgOIgKgQIAAgPIAAgOIAAgQIAAgPIAFgOIgpgQIgKgNIgPgQIAFgQIALgNIAOgQIAQgQIAPgPIAPgOIAZgQIAPgPIAgAAIAKgMQAegoAwgRQAtguArgtQAyg1A+gkIAKgQIAKgPIAFgOIAPgPQBIhFA+hNQA9hNA8hNIAFgQIAKgPIAFgOIAKgQIAKgPIAKgOIAKgQIAFgPIAKgOIAKgQIAPgtIAPgtIAKgdIAKgQIAFgPIAKgOIAKgQIAKgPIAFgOIAKgfIAKgeIAKgdIAKgQIAFgPIAKgOIAJgQIAKgPIAFgOIAFgQIAFgPIAKgOIAFgQIAFgPIAKgOIAKgQIAKgPIAKgOIAFgQIAKgPIAUg7IAehaIAehaIAKgQIAPgsIAUg8IAUg8IAAgPIAFgPIAAgPIAAgPIAFgPIAKgeIAKgeIAKgeIAKgPIAFgPIAFgPIAFgPIAAgPIAAgPIAAgPIAFgPIAFgPIAKgPIAFgPIAKgPIAAgPIAFgPIAAgPIAFgPIAFgPIAFgPIAFgPIAAgPIAAgPIAAgPIAAgPIAFgPIAFgPIAFgPIAFgPIAAg8IAAhLIAAhLIAAgKIAAgPIAAgPIgPgPIgFgPIAAgPIAAgPIAAgPIgFgPIgPgPIAAgPIAAgPIAAgPIgKgPIgKgPIAAgPIAAgPIAAgPIgFgPIgKgPIgFgPIAAgPIAAgPIAAgPIAAgPIgKgPIgFgPIgFgPIAAgPIAAgPIAAgPIAAgPIgKgPIgKgPIAAgHIAAgIIAAgFIgFgPIgKgPIgFgPIAAgPIAAgPIAAgPIAAgKIAAgFIgFgPIgKgPIgFgPIAAgPIAAgPIAAgPIAAgPIgKgPIgKgPIAAgPIAAgPIAAgPIgFgQIgKgOIgFgPIAAgQIAAgOIAAgPIAAgQIgIgLIgbgOIgFgOIAAgQIAKgPIAKAAIAAgEIAAgQIAKgOIAzgDIgBgDIgKgPIAFgOIAFAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAGAEAEAFIALAOIAEAHIAagCIABAEQAGAEAIACIAeAKIAPAKIBBAKIAPALIAAAOIAAAQIAFAPIAPAOIAAAQIAAAZIAAAEIAAAVIAAAKIAAAFIAFAPIAFAPIAFAPIAAAPIAFAPIAAAKIAAAFIAAAKIAAAFIAAAPIAFAPIAFAPIAFAPIAAAPIAFAPIAAAPIAAAPIAAAPIAAAKIAAAFIAFAPIAFAPIAFAPIAAAPIAFAPIAAAPIAAAPIAAAPIAKAeIAKAeIAKAeIAFAPIAAAPIAFAPIAAAPIAAAPIAAAPIAFAPIAKAPIAAAPIAFAPIAAAPIAAAPIAAAPIAAAPIgFAPIAAAPIAAAEIASAWQAMAOAKAPIAFAPIAFAPIAFAPIAFAPIAFAPIAKAPIAFAPIAKAPIAKAPIAKAPIAKAPIAFAPIAKAPIAFAPIAAAPIAFAPIAFAPIAFAPIAFAPIAAAPIAKAPIAFAPIAKAPIAKAPIAFAPIAKAPIAFAPIAAAPIAFAPIAFAPIAFAPIAKAPIAFAPIAKAPIAFAPIAFAPIAFAPIAFAPIAFAPIAAAPIAFAPIAFAPIAAAPIAFAPIAAAPIAFAPIAAAPIAKAPIAFAPIAKAPIAFAPIAFAPIAFAPIAFAPIAFAPIAAAPIAFAPIAFAPIAAAPIAFAPIAFAPIAAAPIAFAPIAFAPIAAAPIAAAQIAFAOIAAAOIAAAQIAAAOIAAAPIAAAQIAFAOIAAAPIAFAQIAAAOIAFAPIAAAQIAAAOIAFAPIAAAQIAAAOIAAAPIAAAQIgFAOIAAAPIAAAQIgFAOIgFAPIAAAQIgFAOIAAAfIAAAdIAAAeIgFAPIAAAQIgFAOIAAAPIgFAQIgFAOIAAAfIAAAdIAAAeIgFAPIAAAQIgFAOIAAAPIgFAQIgFAOIgFAPIAAAQIgPAtIgPAtIgPAtIgKAOIgFAPIAAAQIgFAOIgFAPIgFAQIAAAOIgFAPIgFAQIgFAOIAAAPIgKAQIgFAOIgKAPIgKAQIgFAOIgKAPIgFAQIAAAOIgFAPIgFAQIgKAOIgFAPIgKAQIgKAOIgKAPIgFAQIgKAOIgFAPIgKAQIgFAOIgFAPIgFAQIgFAOQgaAmgiAdQgpAjgmAoQhFBLhNBEQghAPgeATQhiA5hoAsIgyAQIgZAOIgLAPIgOAQIgYAOIgKAPIgLAPIgOAPIgtAVIgyAUIhVAKIgPAKImagGgAswcNIgKgOIAFgQQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQgHgCgHAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAABIgJACIAKAJIAFAQIACAEIANAAIAAAAgArvZgIgKAIIgPAQQgPAHgOAKQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIAogJIAPgQIAFgOQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAIgBgBIgCABgAJgkIQAAAXgCAWQgCAVAJATIAAgjIAAgtIAAgtIgDgCQgCAUAAAWgADk8hIAAAQIAFAOIAAgKIAAgOIgFgPIAAAJgAFN9QQgDAAgCACIgPAKIAPAQIAeAKIAPgGIgFgOIgPgQQgDgCgDAAIgHgBIgHABgADQ+AIAKAAIAKAPIAAAQIAUAKIAPgGIAAgOIgFgQIgCgGIgMAAIgkABgAEW9xIAUAAIAEgCIgJgCIgPgLIAAAPg");
	this.shape.setTransform(-176.825,-199.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-273.6,-398.1,273.6,398.1);


(lib.applefacebutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#432D2D").s().p("AjeAvIgFgCIgDgBIgCgCIgCgCIgBgCIgCgCIAAgCIgBgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAgBIABgDIABgCIAAgBIABgCIACgCIACgCIABgCIADgBIAEgCIAHgBIAAgBIABABIAHABIADACIAEABIABACIACACIACACIAAACIABABIABACIABADIAAABIAAACIAAACIAAACIgBACIgBACIAAABIgBACIgBACIgBACIgCACIgDACIgCABIgFACIgLAAgADSAAIgFgBIgCgCIgDgCIgBgCIgCgCIAAgCIgBgBIgBgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgEIABgBIABgCIAAgDIACgBIABgCIACgCIACgCIABgCIAEgCIAEgBIAEAAIAAAAIABAAIAEAAIAEABIADACIADADIABABIACACIAAACIACABIAAADIABACIABABIAAACIAAACIABACIAAAAIAAACIAAABIgBACIAAACIgBADIgBABIgBACIgBACIgCACIgDACIgCACIgEABIgOAAg");
	this.shape.setTransform(-68.475,-85.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE088").s().p("AjZA0IgMgHIgIgIIgCgHIAAgHIAAgIIAAgIIAAgHIAIgHIAHgEQAFgBAEgBIABgBIAMADIANAEIAHAHIADAHIADAIIAAAIIgCAHIgEAHIgCAIIgIAHIgZAAgAjZADIgHABIgEACIgCABIgCACIgCACIgCACIgBACIAAABIgBACIAAADIAAABIAAACIAAACIAAACIAAACIAAACIABABIAAACIACACIABACIADACIACACIACABIAFACIAMAAIAEgCIADgBIACgCIACgCIABgCIABgCIABgCIABgBIABgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgDIgBgCIgCgBIAAgCIgCgCIgCgCIgBgCIgEgBIgDgCIgHgBIgBgBgADBAFIgGgHIgEgHIAAgIIAAgHIAAgHIACgIIAFgIIAOgDIABgCIAKAAIAPAFIAIAIIACAIIAAAHIAAABIgBgCIAAgCIAAgCIgBgBIAAgCIgBgDIgBgBIgBgCIgCgCIgBgBIgCgDIgDgCIgFgBIgEAAIAAAAIAAAAIgFAAIgDABIgFACIgBACIgCACIgBACIgBACIgDABIAAADIgBACIgBABIAAAEIAAACIAAACIAAABIAAACIAAACIABADIABABIAAACIADACIABACIACACIACACIAFABIAOAAIAEgBIACgCIADgCIACgCIACgCIABgCIAAADIgGAHIgKAHIgdAAg");
	this.shape_1.setTransform(-68.5,-85.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#432D2D").s().p("AjiA1IgEgCIgIgDIgGgGIgDgDIgBgCIgBgDIgBgBIAAgCIAAgCIgBgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIABgCIAAgCIABgBIABgDIABgCIABgCIABgBIACgCIACgBIACgCIADgCIAEgBIAEgCIADgCIAEgBIAGAAIAAgBIADAAIAFABIAFABIAEACIADACIADACIACACIABABIACACIABACIABABIABACIABACIAAACIABACIAAABIAAACIAAADIAAACIAAABIAAACIAAACIgBACIAAACIgBABIgBACIgBACIgBACIgDAEIgEADIgJAGIgHADIgQAAgADRAIQgGgBgEgEIgGgHIgCgBIAAgCIgBgDIgBgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgEIAAgCIABgCIABgBIAAgDIADgDIADgEQADgDAFgDIAIgDIAGAAIAAAAIADAAIAFABIAFABIAEABIADACIACACIADACIABACIABABIACACIABACIAAADIABABIABACIAAACIABACIAAACIAAACIAAABIAAACIAAACIgBACIAAACIgBACIgBABIgBADIAAACIgDADIgGAFQgJAHgLABIgKgDg");
	this.shape_2.setTransform(-69.125,-85.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE088").s().p("AjlBUIgCgBIgFgBIgFgBIgFgCIgDgCIgCgBIgFgEIgDgEIgFgGIgFgHIgBgCIgBgCIgBgCIgBgCIAAgBIAAgCIgBgCIgBgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgEIAAgEIAAgFIAAgCIAAgCIAAgCIABgCIABgCIAAgCIACgCIABgBIAAgBIABgCIABgCIABgCIABgCIABgCIABgBIACgCIACgCIABgCIABgCIAAgCIACgCIADgEIAFgFQAIgGAJgDIAGgCIAGgBIAAAAQANgBALAEQALAEAKAIQAGAGAFAHIABACIABACIABACIABACIAAABIABACIAAACIABACIABADIABAEIACADIAAACIAAAEIAAAEIAAAFIAAAIIAAAHIAAACIgCACIAAACIAAACIgBACIgBACIgBABIgFAIQgLAMgOAHQgNAGgPAAIgNgBgAjhgIIgEABIgDACIgEACIgEABIgBACIgCABIgCACIgBACIgCACIgBACIAAACIgBABIAAACIgBACIAAACIAAACIAAACIAAACIAAACIAAABIABACIAAACIAAACIABACIABACIAAACIADADIAHAGIAHAEIAFACIAPAAIAHgEIAJgFIAFgEIADgEIABgBIABgCIAAgCIABgCIABgCIAAgCIABgCIAAgCIAAgBIAAgCIAAgCIAAgCIgBgCIAAgCIgBgCIgBgCIgBgBIAAgCIgBgCIgCgCIgCgBIgCgCIgCgCIgDgCIgFgBIgEgBIgGgBIgCAAIAAAAIgGAAIgEACgADKAjIgEgCIgNgEQgKgEgJgHIgKgJIAAgCIgBgBIgBgCIgCgCIgBgCIgBgBIgBgCIgBgCIAAgCIgBgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIABgCIAAgCIAAgCIAAgCIAAgCIABgCIAAgBIABgCIABgCIABgCIACgCIABgCIAAgCIAHgJQAGgKALgFQASgKASAAQAIAAAHACIAQAHIANAKIACACIABABIACACIABACIABACIABACIABACIACACIAAACIACABIAAACIABACIABACIAAACIABACIABACIAAACIABABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIgBACIAAACIAAACIgBACIgBACIAAACIgBADIgBADIgCACIAAACIgCACIgBACIgGAJQgLAKgNAEQgLAEgLAAIgMgBgADMgwQgEACgDADIgEAEIgCAEIAAACIgBABIgBACIAAACIAAAEIAAACIAAACIAAACIAAABIAAACIAAACIAAACIABACIABACIAAACIABACIAHAGQAEAEAGABIAJADQAMgBAJgHIAGgEIACgEIABgCIABgCIABgCIABgCIAAgCIABgCIAAgBIAAgCIAAgCIAAgCIAAgCIgBgCIAAgCIgBgCIgBgBIgBgCIgBgCIgBgCIgBgCIgBgCIgDgCIgDgCIgCgBIgFgCIgEgBIgGgBIgDAAIAAAAIgFAAIgJAEg");
	this.shape_3.setTransform(-69.1,-85.5385);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#432D2D").s().p("AjpBDIgIgEQgFgBgEgEIgGgIIgBgCIgBgBIAAgCIgBgCIAAgCIAAgCIgBgCIAAgCIAAgCIAAgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIABgCIAAgCIABgCIAAgCIAAgCIABgCIABgBIABgCIAEgFIAEgEIAGgFIAIgEIACgBIADAAIAFgBQAHAAAGADQAFACAEADIAIAIIAAACIABABIACABIAAACIABACIABACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIABACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIgBACIAAACIgBACIgBACIAAABIgBACIgBACIgBACIgBACIgBACIgCACIgBACIgCACIgCABIgHAEIgFACIgDABIgBAAIgOAAgADcANIgDgBIgHgEQgFgCgDgDQgDgDgCgEIgBgCIgBgBIgBgCIgBgCIgBgCIAAgCIgBgCIgBgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIABgBIAAgCIABgCIAAgCIAEgGIAHgHQAJgHAKgDIAGAAIAAAAIADAAIAFABIAFABIAEACIADABIACACIADACIABACIABACIACACIABACIAAACIACABIAAACIAAACIABACIABACIAAACIAAACIAAACIAAABIAAAEIAAAEIAAACIgBACIAAACIgBABIAAACIgCACIAAACIgBACIgBACIgDAEIgCACQgCAEgEACIgIAFIgDABIgCAAIAAABIgMAAg");
	this.shape_4.setTransform(-69.525,-85.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE088").s().p("AjwB7IgEgCIgKgEIgHgEIgDgBIgDgCIgDgEIgDgEIgEgEIgDgEIgFgFIgBgCIgBgCIAAgCIgBgCIgBgBIgCgCIgBgCIgCgCIgBgCIgBgCIgBgCIAAgCIgBgBIgBgCIAAgCIAAgCIgBgCIgBgCIgBgEIgBgBIgBgCIAAgCIAAgCIgBgCIAAgEIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIABgCIAAgBIABgEIABgBIAAgCIABgCIABgCIABgCIABgDIABgCIACgEIADgEIADgDIACgEIAGgGIACgCIALgGIARgMQANgLAQgEIAMgCQAPgBAPAFQAQAGAMAMQALAJAHALIABACIABACIACACIABACIACACIAAABIABACIABACIABACIAAACIABACIABACIAAACIAAABIABACIAAABIAAACIAAACIgBACIAAACIAAADIAAAEIAAAEIAAAEIAAADIAAAGIAAACIAAACIAAACIAAACIAAABIgBACIgBAEIgBAEIgBAEIgBADIgCAEIgBAEIgCACIAAACIgBABIgBACIgBACIAAACIgBACIgBACIgBACIgBACIgBABIgCACIgBACIgBACIgFAGQgFAFgGAEQgNAIgPAFIgKADIgqAAgAjjgJIgDABIgDAAIgHAFIgGAEIgFAEIgDAFIgBACIgBACIgBACIAAACIgBACIAAACIgBABIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIABACIAAABIABACIAAACIABACIABACIABACIAGAIQADADAFACIAJAEIAOAAIABgBIADgBIAFgCIAHgDIACgCIACgCIABgCIABgCIABgCIACgBIABgCIABgCIABgCIAAgCIAAgCIABgCIABgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIgBgCIgBgBIAAgCIAAgCIgCgCIgBgCIAAgCIgIgGQgEgEgFgCQgHgCgGAAIgFAAgACpA7QgVgPgQgVIgKgMIAAgCIgCgCIgBgCIAAgCIgBgCIgBgBIAAgBIgBgCIAAgCIAAgCIgBgCIAAgCIAAgCIAAgBIAAgEIAAgCIAAgCIAAgEIAAgDIAAgCIABgCIAAgCIAAgCIABgCIAAgCIABgCIABgBIAAgCIACgEIABgCIABgCIABgCIAAgCIABgBIABgCIABgCIACgCIABgCIACgCIABgCQAEgGAFgFQAMgMAPgKIANgIQAQgIAQgCQALAAAKACQAKABAJAEQAJAFAIAGIACACIACACIACACIADAEIACACIACABIACAEIABACIABACIABACIACACIABABIACACIAAACIABACIABACIAAACIABACIACACIAAABIACACIABACIAAACIABACIAAACIABACIAAACIABABIAAACIABAEIAAACIAAACIAAAEIAAADIAAAEIAAAGIAAAHIAAAEIgBACIAAACIAAACIgBABIAAACIAAABIAAACIgBACIgBACIAAACIAAACIgCABIgBACIAAACIgBACIgBACIgBACIAAACIgBACIgBABIgCACIgBACIgCACIgBACIgDAEIgEADIgFAGIgHAIIgCABIgEACIgDACIgLAGIgJAEIgJADIgDABIgOABQgZAAgUgQgADNgtIgIAHIgDAFIAAACIgCACIAAACIAAACIgBACIAAACIAAACIAAABIAAACIAAACIAAACIABACIAAACIAAACIACACIAAABIABACIABABIABACIAAACIABACQACAEAEADQADAEAFACIAHADIADABIALAAIAAAAIADgBIADgBIAIgEQADgDACgDIADgEIADgEIABgCIABgBIAAgBIABgCIABgCIAAgCIABgCIAAgCIAAgCIAAgDIAAgEIAAgCIAAgCIAAgCIAAgCIgBgBIAAgCIAAgCIgBgCIgBgCIAAgCIgBgCIgCgCIgBgBIgCgCIgCgCIgCgCIgDgCIgFgCIgEgBIgFgBIgDAAIAAABIgGAAQgLADgIAHg");
	this.shape_5.setTransform(-69.7,-86.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B66363").s().p("ADDKdQgGgBgFgFIgigLQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgPgOIgRgQIhkgFIgRALIggALIgRALIgtALIgQALQg9ADg9gCQgGgBgFgFIgigRIAAgRIgLgQIgLgRIgWgRIAAgQIgRgRIghghIgggiIgNgQIgQgRIgGgRIgLgQIgFgRIgGgQIgGgRIgLgRIgLgQIgLgRIAAgRIgLgQIgGgRIgLgQIgQgRIAAgRIgMgQIgQgRIgRgRIAAgRIgLgQIgLgRIAAgRIAAgQIAAgRIgFgRIgMgQIgFgRIAAhSIAAhDIAAhCIAAgyIAAgyIALgRIAGgRIAFgQIAAgRIAAgRIAAgQIAAgRIAAgRIALgQIAGgRIAFgRIAGgQIALgRIAGgRIALgQIAWgRIAVgSIASgPQAOgGAMgHQAHgEAGgFQATgGATgHQAMgEALgGIAOgBIACAHIAbANIANAHIAfAQQAHADAGAFIA9ALQAFAGAHADQAPAIARAGIAMAEIAFABIALALIAFARIAGARIALAQQADAJAEAHQAEAHAGAFIAWgGIAngLIALgQIAMgRIATgMIADAHIAAAQQAAAJADAFQACADAGAAIAEgRIAAgQIAAgRIAAgCIAKgKIATgPIAQgMIAQAAIAigLQAAgGADgCQALgLAOgJQATgFASgJQAHgCAFgGQAngGAmgJQAHgCAFgFQADgDADgBQA1gCA0AAQADAGAEABQAdAKAfAFQADAGAEACIAvARQAHADAGAGIAWAQIALAQIAPASIANAQIALARIALARIAAAQIARARIAFARIAAAQIAAAiIAAAhIAAAhIAAARIAAARIARAQIAFARIAAARIAAAQIAAARIgFAQIgLARIgGARIAAAQIAAARIAAAhIAAARIAAARIAAAQIAAARIgFARIgRAQIAAAQIAAARIAAAQIAAARIAAARIgLAQIgLARIAAARIAAAQIgLARIgMARIAAAQIAAARIgLARIgLAQIgFARIgLAQIgGARIAAARIAAAQIAAARIgLARIgLAQIAAARIAAARIgLAQIgLARIgGARIgLAQIgGARIAAARIgFAQIgcARIgLARIgGAQIgQARIAAARIgMAQIgQARIgRARIgQAQQgfACgeAAIgygBg");
	this.shape_6.setTransform(-68.325,-72.3682);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#618A46").s().p("ACIDlQgFgHgCgJIgMgQIgFgQIgGgRQgIgJgHgJIgNgPIgQgSIgcgQIgLgRQgbgFgbgCQgcgDgcAAIgLgMIgRgRQgIgIgHgKIgNgPIgFgPIgLgRIgGgRIAAgRIAAgQIAAgRIgLgRIgLgQIAAgQIAAgRIAAgRIgFgRIgRgRQAAgHACgJIADgLIARAQQAcAcAjATIBQAtQAnAXAcAZIA9ALQADAFAEACQASAJATAHIAGAEQADAGAEAEQAHAKAIAIIAAAQIARARIAFAQIAAAQIAAARIAMARIALARIAAAQIAAARIAJAJIgKAMQgHAJgJAJIgRARIAAAQIgLAQIgLAMQgFgDgEgEgAA+CYIhHgcIgngQIgDgCIAUgDIAgAAQADAFAEADQAPALARAIIARAQIAJAHIgEgBg");
	this.shape_7.setTransform(-95.075,-148.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8A4646").s().p("AibE2IAGgRIALgRIAGgQIALgRIALgQIARgRIAFgRIAAgRIAAgQIAFgRIAMgQIAGgRIAAgRIAAgQIAQgRIAFgRIAAgQIAAgRIAAgQIAMgQIALgRIAAgRIAAgQIALgRIAKgRIAAgRIALgRIALgQIAAgRIAGgQIALgRIAFgRIAGgQIALgRIAGgRQAFgIAGgHIARgSQACgDADgBQAFgCAGACQADABACADQAJAFAHAHQAKAHAIAJIAGAQIgGARIgRARIAAAQIgLARIgLARIgGAQIgKARIgGARIgFAQIgRASIgMAQIgLARIAAAQIgFARIgLARIgGAPIgGARIgQARIAAAQIgKARIgLARIAAAQIAAARIgLARIgNAPQgGAKgJAIIgFARIAAAQIAAARIgSARIgFAQIgFARQgJAIgJAHQgKAKgMAIQgIAGgJACIgBAAIgEgCg");
	this.shape_8.setTransform(-53.3,-164.7625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#432D2D").s().p("ACtPtQgHgFgGgDQgSgIgUgGIgRgRIgLgLQgCgDgDAAQghAAgiADIgWAKIglAOQgZAKgZALIgYALIihgGIgQgQIgXgRIgKgRIgGgQQgOgRgMgSQgRgagXgWQgjgfgbgkIgFgRIgRgRIAAgQIgLgRIgLgRIAAgQIgFgRIgMgRIgFgQIgRgRIgGgRIgFgQIgGgRIgLgQIgQgRIgGgRIgFgQIgRgRIgRgRIgGgQIgFgRIgLgRIgFgQIAAgRIAAgRIgGgQIgLgRIgGgRIAAhCIAAh1IAAhkIAAhBIAGgRIALgRIAGgQIAAgRIAAgRIAAgQIAAgRIAAgRIAFgQIALgRIAFgRIAAgQIAMgRIALgRIAAgQIARgRIAQgRIAhgQIARgRIALgLIAMgGIAbgLIARgLIAygLIADgCIgJgJIgQgRIgRgQIgGgRIgFgRIgMgQIgFgRIAAgRIAAgQIgGgRIgKgRIgGgQIAAgRIAAgRIAAgQIgLgRIgLgQIAAgRIAAgRIAAgQIAAgRQAAgGACgFQABgEADgBIAJgEQABAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBIAnAGIAQARIARARIAQAQIAhARIARAPQAMAKAMAHQAPAKAQAIQAJAIAJAHQAIAHAIAGQAZAFAYAIIANAFQAbAJAcAGQAFAFAHAEQAQAIAQAFIARARIARAQIgGARIARARIAFAQIAAARIAAARIAAAQIARARIAGARIAAAQIAAAGIAFgRIAGgQIALgRIAGgRIAPgQIAFgRIAAgRIAAgQIAMgRIALgRIAAgQIAAgRIALgRIALgQIAAgRIAAgRIAAgQIAGgRIALgRIAGgQIAAgRIAFgRIALgRIAFgQIAAgRIALgRIAMgQIAAgRIALgRIALgQIAAgRIAAgRIAQgQIAGgRIAFgRIANgPQAHgKAIgIIARgRQAIgCAHgFQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAmAGIAcASQAMAHAKAJIASAQIAFAQIAAARIAAARIAAAQIAAARIAAARQgGAIgHAIIgPARIgFARIgMAQIgFARIgLARIgGARIgLARIgLAQIgFARIgLARIgGAQIgGARIgLAQIgFARIgMARIgLAQIgFARIgFARIgMAQIAAARIgGARIgFAQIgLARIgLARIgLAQIAAARQAAAGABAAQANACAOgCIAQgMIBJgLIAQgLICRAGIAQALIAyALIARALIAhALIAbARIAXARIAWAQQAFAJAHAHQAHAJAJAIIAAARIAQARIAGAQIAAARIARARIAGAQIAAARIAAARIAAAhIAAAyIAAAhIALARIALARIAAAPIAAARIAAARIAAAQIAAARIgGARIgLAQIgFARIAAARIAAAQIAAARIAAAhIAAAhIAAARIgGARIgRAQIAAARIAAARIAAAQIAAARIAAARIgLAQIgLARIAAARIAAAQIgLARIgMARIAAAQIAAARIgKARIgLAQIgGARIgLARIgGAQIAAARIAAARIAAAQIgLARIgLARIAAAQIAAARIgLAQIgLARIgFARIgMAQIgFARIAAARIgGAQIgLARIgWARIgNAQIgPARIAAARIgMAQIgQARIgQARIgcAhIgFARIgXALIiKgGgABvOJIARAQIAPAOQAAAAABAAQAAABAAAAQAAABAAAAQABABAAABIAhALQAFAFAGABQA3ACA4gDIARgQIARgRIAPgRIAMgQIAAgRIARgRIAFgQIAMgRIAbgRIAFgQIAAgRIAGgRIALgQIAGgRIALgRIALgQIAAgRIAAgRIALgQIAMgRIAAgRIAAgQIAAgRIAFgRIALgQIAFgRIALgQIAMgRIAAgRIAAgQIALgRIALgRIAAgQIAAgRIALgRIALgQIAAgRIAAgRIAAgQIAAgRIAAgRIARgQIAFgRIAAgRIAAgQIAAgRIAAgRIAAghIAAgRIAAgQIAGgRIALgRIAFgQIAAgRIAAgQIAAgRIgFgQIgRgQIAAgRIAAgRIAAghIAAghIAAgiIAAgQIgFgRIgRgRIAAgQIgLgRIgLgRIgMgQIgQgSIgLgQIgWgQQgGgGgGgDIgwgRQgEgCgDgGQgfgFgdgKQgDgBgEgGQg0AAg1ACQgDABgDADQgFAFgGACQgnAJgnAGQgFAGgGACQgTAJgTAFQgOAJgLALQgDACAAAGIghALIgRAAIgQAMIgTAPIgKAKIABACIAAARIAAAQIgFARQgFAAgCgDQgEgFAAgJIAAgQIgDgHIgTAMIgLARIgMAQIgnALIgWAGQgFgFgFgHQgEgHgCgJIgMgQIgFgRIgGgRIgLgLIgFgBIgMgEQgQgGgQgIQgGgDgGgGIg9gLQgGgFgHgDIgegQIgOgHIgbgNIgBgHIgPABQgLAGgMAEQgTAHgTAGQgFAFgIAEQgMAHgOAGIgSAPIgVASIgWARIgLAQIgGARIgLARIgFAQIgGARIgGARIgLAQIAAARIAAARIAAAQIAAARIAAARIgFAQIgGARIgLARIABAxIgBAyIAABCIAABDIAABTIAFARIAMAQIAFARIAAARIAAAQIAAARIALARIAMAQIAAARIAQARIAQARIAMAQIAAARIAQARIAMAQIAFARIAMAQIAAARIALARIAKAQIALARIAHARIAFAQIAFARIALAQIAGARIAQARIANAQIAgAiIAhAhIARARIAAAQIAXARIAKARIALAQIAAARIAiARQAGAFAFABQA9ACA9gDIARgLIAtgLIAQgLIAhgLIAQgLIBkAFgAnhq6QgCAIAAAIIASARIAFARIAAAQIAAARIAAARIALAQIALARIAAARIAAAQIAAARIAGARIALAQIAFARIANAPQAGAKAJAIIAQARIAMAMQAcAAAcACQAbADAcAFIALARIAbAQIAQASIANAPQAIAJAIAIIAGARIAFARIAMAQQACAJAFAGQAEAFAFADIALgMIALgQIAAgRIARgRQAJgIAHgJIAKgMIgJgJIAAgRIAAgRIgLgQIgMgRIAAgRIAAgQIgFgRIgRgRIAAgQQgIgJgIgJQgDgEgDgGIgGgEQgTgHgSgJQgFgCgCgGIg9gLQgdgZgngWIhRgtQgigTgcgcIgRgQIgEALgAkwlyIgUADIADACIAnAQIBIAcIAEABIgJgHIgRgQQgRgIgPgLQgFgDgDgGIggABgAD1uzQgEABgCADIgQASQgGAHgGAIIgFARIgMARIgFAQIgGARIgKARIgHAQIAAARIgLAQIgKARIAAARIgLARIgMARIAAAQIAAARIgLARIgLAQIAAARIAAARIAAAQIgGARIgQARIAAAQIAAARIgFARIgMAQIgFARIAAAQIAAARIgGARIgQARIgMAQIgLARIgGAQIgKARIgFARQABAAAAABQABABABAAQAAAAABAAQAAAAAAAAQAJgCAIgGQAMgIAJgKQAKgHAIgIIAGgRIAFgQIARgRIAAgRIAAgQIAFgRQAJgIAHgKIAMgPIALgRIAAgRIAAgQIAMgRIALgRIAAgQIAQgRIAFgRIAHgQIAKgRIAGgRIAAgQIALgRIALgQIARgSIAGgQIAFgRIALgRIAFgQIALgRIAMgRIAAgQIAQgRIAGgRIgGgQQgIgJgKgHQgGgHgJgFQgCgDgEgBIgFgBIgFABg");
	this.shape_9.setTransform(-67.75,-101.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.5,-202.1,135.5,202.1);


(lib.apple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D84D4D").s().p("ACvJaQgFAAgFgFIgegKQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgNgMIgQgOIhagFIgPAKIgdAKIgPAKIgoAKIgPAKQg3ACg3gCQgFAAgFgFIgegPIAAgPIgKgPIgKgPIgUgPIAAgPIgPgPIgegeIgdgfIgMgOIgOgPIgFgPIgKgPIgFgPIgFgPIgFgPIgKgPIgKgPIgKgPIAAgPIgKgPIgFgPIgLgPIgOgPIAAgPIgLgPIgOgPIgPgPIAAgPIgKgPIgKgPIAAgPIAAgPIAAgPIgFgPIgKgPIgFgPIAAhKIAAg8IAAg8IAAgtIAAgtIAKgPIAFgPIAFgPIAAgPIAAgPIAAgPIAAgPIAAgPIAKgPIAFgPIAFgPIAFgPIAKgPIAFgPIAKgPIAUgPIATgQIAQgOQAMgFAMgHQAGgDAFgFQARgFARgHQALgDAKgFIANgCIACAHQAMAFAMAGIAMAHIAcAOQAGADAFAFIA3AKQAFAFAGADQAOAHAPAFIAKAEIAFABIAKAKIAFAPIAFAPIAKAPQACAHAEAHQAEAGAFAFIAUgGIAjgJIAKgPIAKgPIASgLIACAGIAAAPQAAAHADAFQACADAFAAIAEgPIAAgPIAAgPIAAgCIAJgJIARgOIAOgKIAPAAIAegKQAAgFADgDQAKgKAMgHQASgFAQgIQAGgCAFgFQAjgFAigJQAGgBAFgFQADgDACAAQAwgCAvAAQADAFADABQAbAJAbAFQADAFADABIArAQQAGADAFAFIAUAPIALAOIANAQIALAPIAKAPIAKAPIAAAPIAPAPIAFAPIAAAPIAAAeIAAAeIAAAeIAAAPIAAAPIAPAPIAFAPIAAAPIAAAPIAAAPIgFAPIgKAPIgFAPIAAAPIAAAPIAAAeIAAAPIAAAPIAAAPIAAAPIgFAPIgPAPIAAAOIAAAPIAAAPIAAAPIAAAPIgKAPIgKAPIAAAPIAAAPIgKAPIgKAPIAAAPIAAAPIgKAPIgKAPIgFAPIgKAPIgFAPIAAAPIAAAPIAAAPIgKAPIgKAPIAAAPIAAAPIgKAPIgKAPIgFAPIgKAPIgFAPIAAAPIgFAPIgZAPIgKAPIgFAPIgPAPIAAAPIgLAOIgOAQIgPAPIgPAPIg3ABIgtgBg");
	this.shape.setTransform(-61.525,-65.1806);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#618A46").s().p("AB7DOQgFgGgCgHIgKgQIgFgPIgFgOIgOgRIgMgNIgOgPIgZgQIgKgPQgYgEgZgCQgZgCgZgBIgKgLIgPgOIgOgQIgLgPIgFgNIgKgPIgFgQIAAgOIAAgPIAAgQIgKgOIgKgPIAAgQIAAgOIAAgPIgFgQIgPgOIABgPIAEgKIAPAOQAZAaAfAQQAlAVAkAVQAiATAaAWIA3AKQACAGAEABQAQAIARAHIAGADIAGAJIAOAQIAAAPIAPAOIAFAPIAAAQIAAAOIAKAPIAKAQIAAAOIAAAPIAIAJIgJAKQgGAJgIAIIgPAPIAAAOIgLAPIgJAKQgFgCgDgEgAA4CJIhAgZIgjgPIgDgCIASgBIAdgBQACAFAEACQAOAKAPAHIAQAOIAHAHIgDgBg");
	this.shape_1.setTransform(-85.625,-133.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8A4646").s().p("AiLEXIAFgPIAKgPIAFgPIAKgPIAKgPIAPgPIAFgPIAAgPIAAgPIAFgPIAKgPIAFgPIAAgPIAAgPIAPgPIAFgPIAAgPIAAgPIAAgOIAKgPIAKgPIAAgPIAAgPIAKgPIAJgPIAAgQIAKgPIAKgPIAAgPIAFgPIAKgPIAFgPIAFgPIAKgPIAFgPIAKgOIAPgQQACgCADgBQAFgCAEACQADABADACIAOALIAQAOIAFAPIgFAPIgPAPIAAAPIgKAPIgKAPIgFAPIgKAPIgFAPIgFAPIgOAQIgLAPIgKAPIAAAPIgFAPIgKAPIgFAOIgFAPIgPAPIAAAPIgJAPIgKAPIAAAPIAAAPIgKAPIgLAOIgOAQIgFAPIAAAPIAAAPIgPAPIgFAPIgFAPIgQAOQgJAIgKAHQgIAGgIACIgBAAIgDgCg");
	this.shape_2.setTransform(-48,-148.3833);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#432D2D").s().p("ACbOJQgFgFgGgCQgQgIgSgFIgPgPIgKgKQgCgCgDAAQgeAAgeACIgUAJIghANQgXAIgXALIgUAJIiRgFIgQgOIgTgQIgKgPIgFgPQgNgPgKgQQgQgYgVgTQgfgcgYghIgFgPIgPgPIAAgPIgKgPIgKgPIAAgPIgFgPIgKgPIgFgPIgPgPIgFgPIgFgPIgFgPIgLgOIgOgQIgFgPIgFgPIgPgPIgPgPIgFgPIgFgPIgKgPIgFgPIAAgPIAAgPIgFgPIgKgPIgFgPIAAg8IAAhpIAAhaIAAg7IAFgPIAKgPIAFgPIAAgPIAAgPIAAgPIAAgPIAAgPIAFgPIAKgPIAFgPIAAgPIAKgPIAKgPIAAgPIAPgPIAPgPIAegPIAPgPIAKgKIAKgFIAZgKIAPgKIAtgKIADgCIgIgIIgPgPIgPgPIgFgPIgFgPIgKgPIgFgPIAAgPIAAgPIgFgPIgKgPIgFgPIAAgPIAAgPIAAgPIgKgPIgKgPIAAgPIAAgPIAAgPIAAgPQAAgFABgFQABgDADgBIAJgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIAjAFIAPAPIAPAPIAPAPIAeAPIAPAOQAKAJALAGQAOAJAPAHIAQAOIAOALQAWAFAWAIIAMAEQAYAIAZAFQAFAFAGADQAOAHAPAFIAPAPIAPAPIgFAPIAPAPIAFAPIAAAPIAAAPIAAAPIAPAPIAFAPIAAAPIAAAFIAFgPIAFgPIAKgPIAFgPIAOgPIAFgPIAAgPIAAgPIAKgPIAKgPIAAgPIAAgPIAKgPIAKgPIAAgPIAAgPIAAgPIAFgPIAKgPIAFgPIAAgPIAFgPIAKgPIAFgPIAAgPIAKgPIAKgPIAAgPIAKgPIAKgPIAAgPIAAgPIAPgPIAFgPIAFgPIALgOIAOgQIAPgPQAIgDAGgEQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAjAFIAZAQQAKAGAKAJIAPAOIAFAPIAAAPIAAAPIAAAPIAAAPIAAAPIgLAOIgOAQIgFAPIgKAPIgFAPIgKAPIgFAPIgKAPIgKAPIgFAPIgKAPIgFAPIgFAPIgKAPIgFAPIgKAPIgKAPIgFAPIgFAPIgKAPIAAAPIgFAPIgFAPIgKAPIgKAPIgKAPIAAAPQAAAFABAAQAMADAMgDIAPgKIBBgKIAPgKICCAFIAPAKIAtAKIAPAKIAeAKIAZAQIAUAOIAUAPIALAOIAOAQIAAAPIAPAPIAFAPIAAAPIAPAPIAFAPIAAAPIAAAPIAAAeIAAAtIAAAeIAKAPIAKAPIAAAOIAAAPIAAAPIAAAPIAAAPIgFAPIgKAPIgFAPIAAAPIAAAPIAAAPIAAAeIAAAeIAAAPIgFAPIgPAPIAAAPIAAAPIAAAPIAAAPIAAAPIgKAPIgKAPIAAAPIAAAPIgKAPIgKAPIAAAPIAAAPIgKAPIgKAPIgFAPIgKAPIgFAPIAAAPIAAAPIAAAPIgKAPIgKAPIAAAPIAAAPIgKAPIgKAPIgFAPIgKAPIgFAPIAAAPIgFAPIgKAPIgUAPIgLAPIgOAPIAAAPIgLAPIgOAPIgOAQIgaAdIgFAPIgUAKIh9gFgABkMvIAQAPIANAMQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAeAKQAFAFAFABQAyACAygDIAPgPIAPgPIAOgPIALgPIAAgPIAPgPIAFgPIAKgPIAZgPIAFgPIAAgPIAFgPIAKgPIAFgPIAKgPIAKgPIAAgPIAAgPIAKgPIAKgPIAAgPIAAgPIAAgPIAFgPIAKgPIAFgPIAKgPIAKgPIAAgPIAAgPIAKgPIAKgPIAAgPIAAgPIAKgPIAKgPIAAgPIAAgPIAAgPIAAgPIAAgPIAPgPIAFgPIAAgPIAAgPIAAgPIAAgPIAAgeIAAgPIAAgPIAFgPIAKgPIAFgPIAAgPIAAgPIAAgPIgFgOIgPgPIAAgPIAAgPIAAgeIAAgeIAAgeIAAgPIgFgPIgPgPIAAgPIgKgPIgKgPIgLgOIgNgRIgLgOIgUgPQgFgFgGgCIgrgQQgDgCgDgFQgbgFgbgJQgDgBgDgFQgvAAgwACQgCABgDACQgFAFgGACQgiAIgjAFQgFAFgGADQgQAHgSAFQgMAIgKAKQgDACAAAFIgeAKIgPAAIgOALIgRANIgJAJIABACIAAAPIAAAPIgFAPQgFAAgCgCQgDgFAAgIIAAgPIgCgGIgSALIgKAPIgKAPIgjAKIgUAFQgFgFgEgGQgEgGgCgIIgKgPIgFgPIgFgPIgKgKIgFgBIgKgDQgPgGgOgHQgGgDgFgFIg3gKQgFgFgGgDIgcgOIgMgGQgMgHgMgFIgCgGIgNABQgKAFgLAEQgRAGgRAFQgFAFgGADQgMAHgMAFIgQAOIgTAQIgUAPIgKAPIgFAPIgKAPIgFAPIgFAPIgFAPIgKAPIAAAPIAAAPIAAAPIAAAPIAAAPIgFAPIgFAPIgKAPIAAAsIAAAtIAAA8IAAA8IAABLIAFAPIAKAPIAFAPIAAAPIAAAPIAAAPIAKAPIAKAPIAAAPIAPAPIAOAQIALAOIAAAPIAOAQIALAOIAFAPIAKAPIAAAPIAKAPIAKAPIAKAPIAFAPIAFAPIAFAPIAKAPIAFAPIAOAQIAMAOIAdAeIAeAeIAPAPIAAAPIAUAPIAKAPIAKAPIAAAPIAeAPQAFAFAFABQA3ACA3gDIAPgKIAogKIAPgKIAegKIAOgKIBaAFgAmxp1IgBAPIAPAPIAFAPIAAAPIAAAPIAAAPIAKAPIAKAPIAAAPIAAAPIAAAPIAFAPIAKAPIAFAPIALAOIAOAQIAPAPIAKALQAZAAAZACQAZACAZAFIAKAPIAZAPIAOAQIAMANIAOAQIAFAPIAFAPIAKAPQACAIAFAGQADAEAFACIAJgKIALgPIAAgPIAPgPQAIgHAGgJIAJgLIgIgIIAAgPIAAgPIgKgPIgKgPIAAgPIAAgPIgFgPIgPgPIAAgPIgOgQIgGgJIgGgEQgRgGgQgIQgEgCgCgFIg3gKQgbgWgigUQgkgVglgUQgfgRgZgZIgPgPIgEAKgAkSlNIgSACIADACIAjAPIBBAZIADABIgHgHIgQgOQgPgHgOgKQgEgDgCgFIgeABgADdtVQgDABgDADIgOAQIgLAOIgFAPIgKAPIgFAPIgFAPIgKAPIgFAPIAAAPIgKAPIgKAPIAAAPIgKAPIgKAPIAAAPIAAAPIgKAPIgKAPIAAAPIAAAPIAAAPIgFAPIgPAPIAAAPIAAAPIgFAPIgKAPIgFAPIAAAPIAAAPIgFAPIgOAQIgLAOIgKAPIgFAPIgJAPIgFAPQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAQAIgCAHgFQAKgHAJgJIAQgOIAFgPIAFgPIAPgPIAAgPIAAgPIAFgPIAOgQIALgOIAKgPIAAgPIAAgPIAKgPIAKgPIAAgPIAPgPIAFgPIAFgPIAKgPIAFgPIAAgPIAKgPIALgOIAOgQIAFgPIAFgPIAKgPIAFgPIAKgPIAKgPIAAgPIAPgPIAFgPIgFgPIgQgOIgOgLQgCgDgDgBIgFAAIgEAAg");
	this.shape_3.setTransform(-61.025,-91.025);

	this.instance = new lib.applefacebutton();
	this.instance.setTransform(-61.1,-91.05,1,1,0,0,0,-67.8,-101.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8A4646").s().p("ACsPtQgFgFgHgDQgTgIgSgGIgRgRIgLgLQgDgDgDAAQgiAAggADIgXAKIglAOQgZAKgaALIgWALIihgGIgSgQIgVgRIgMgRIgFgQQgOgRgLgSQgSgagYgWQghgfgbgkIgGgRIgRgRIAAgQIgLgRIgLgRIAAgQIgGgRIgKgRIgHgQIgQgRIgFgRIgGgQIgGgRIgLgQIgRgRIgFgRIgGgQIgQgRIgRgRIgFgQIgGgRIgLgRIgGgQIAAgRIAAgRIgFgQIgLgRIgFgRIAAhCIAAh1IAAhkIAAhBIAFgRIALgRIAFgQIAAgRIAAgRIAAgQIAAgRIAAgRIAGgQIALgRIAGgRIAAgQIALgRIALgRIAAgQIAQgRIARgRIAigQIAQgRIAMgLIALgGIAbgLIARgLIAygLIADgCIgJgJIgRgRIgQgQIgFgRIgGgRIgLgQIgGgRIAAgRIAAgQIgGgRIgLgRIgFgQIAAgRIAAgRIAAgQIgLgRIgMgQIAAgRIAAgRIAAgQIAAgRQAAgGACgFQABgEAEgBIAKgEQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAnAGIARARIAQARIARAQIAiARIAQAPQALAKAMAHQAQAKARAIQAIAIAKAHQAGAHAJAGQAZAFAYAIIANAFQAbAJAbAGQAGAFAHAEQAPAIARAFIAQARIASAQIgGARIARARIAGAQIAAARIAAARIAAAQIAQARIAGARIAAAQIAAAGIAGgRIAFgQIALgRIAFgRIAQgQIAGgRIAAgRIAAgQIALgRIALgRIAAgQIAAgRIALgRIALgQIAAgRIAAgRIAAgQIAFgRIAMgRIAFgQIAAgRIAGgRIALgRIAGgQIAAgRIALgRIALgQIAAgRIALgRIALgQIAAgRIAAgRIAQgQIAGgRIAGgRIALgPQAIgKAJgIIAQgRQAIgCAHgFQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAnAGIAbASQALAHALAJIARAQIAGAQIAAARIAAARIAAAQIAAARIAAARQgFAIgIAIIgPARIgGARIgKAQIgGARIgLARIgGARIgLARIgLAQIgGARIgLARIgFAQIgGARIgLAQIgGARIgKARIgLAQIgGARIgGARIgLAQIAAARIgGARIgFAQIgLARIgLARIgLAQIAAARQAAAGABAAQANACANgCIARgMIBIgLIARgLICQAGIARALIAyALIAQALIAiALIAbARIAXARIAWAQQAFAJAHAHQAHAJAJAIIAAARIARARIAFAQIAAARIAQARIAHAQIAAARIAAARIAAAhIAAAyIAAAhIAKARIALARIAAAPIAAARIAAARIAAAQIAAARIgFARIgLAQIgFARIAAARIAAAQIAAARIAAAhIAAAhIAAARIgHARIgQAQIAAARIAAARIAAAQIAAARIAAARIgLAQIgLARIAAARIAAAQIgLARIgLARIAAAQIAAARIgMARIgLAQIgFARIgLARIgFAQIAAARIAAARIAAAQIgMARIgLARIAAAQIAAARIgLAQIgLARIgGARIgLAQIgGARIAAARIgFAQIgLARIgWARIgMAQIgQARIAAARIgMAQIgQARIgQARIgcAhIgGARIgWALIiLgGg");
	this.shape_4.setTransform(-61.05,-91.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.8,-192.1,135.5,202.2);


// stage content:
(lib.monkey_html2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		function gobananas(){
			this.monkey_mc.play();
		}
		
		this.banana_btn.addEventListener("click", gobananas.bind(this));
		
		function appletime(){
			this.monkey_mc.gotoAndPlay(15);
		}
		
		this.apple_btn.addEventListener("click", appletime.bind(this));
		
		
		this.monkey_mc.addEventListener("click", monkeydisappear.bind(this));	
		
		function monkeydisappear(){
			this.monkey_mc.visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// symbols
	this.apple_btn = new lib.apple();
	this.apple_btn.name = "apple_btn";
	this.apple_btn.setTransform(533.6,267.05,1,1,0,0,0,-61.1,-91);
	new cjs.ButtonHelper(this.apple_btn, 0, 1, 2);

	this.monkey_mc = new lib.monkey();
	this.monkey_mc.name = "monkey_mc";
	this.monkey_mc.setTransform(1213.25,541.15,1,1,0,0,0,-443.9,-307.6);

	this.banana_btn = new lib.banana();
	this.banana_btn.name = "banana_btn";
	this.banana_btn.setTransform(362.1,575.6,1,1,0,0,0,-96.8,-199.1);
	new cjs.ButtonHelper(this.banana_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banana_btn},{t:this.monkey_mc},{t:this.apple_btn}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1145.3,706,511.70000000000005,142.60000000000002);
// library properties:
lib.properties = {
	id: '559ECD04322B784D80D9EBC7939DAAD8',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/monkey_html2_atlas_1.png?1681501924498", id:"monkey_html2_atlas_1"},
		{src:"images/monkey_html2_atlas_2.png?1681501924498", id:"monkey_html2_atlas_2"},
		{src:"images/monkey_html2_atlas_3.png?1681501924498", id:"monkey_html2_atlas_3"},
		{src:"images/monkey_html2_atlas_4.png?1681501924498", id:"monkey_html2_atlas_4"},
		{src:"images/monkey_html2_atlas_5.png?1681501924498", id:"monkey_html2_atlas_5"},
		{src:"images/monkey_html2_atlas_6.png?1681501924498", id:"monkey_html2_atlas_6"},
		{src:"images/monkey_html2_atlas_7.png?1681501924498", id:"monkey_html2_atlas_7"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['559ECD04322B784D80D9EBC7939DAAD8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;