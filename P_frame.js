P_frame = function(){	this.frameNum = 0;	this.frameArr= []; };

P_frame.prototype = {
	addFrame : function(pic){ 
		this.frameArr[this.frameNum]=pic; 
		this.frameNum++; 
	},
	load: function(pic_arr){ for(var i in pic_arr){this.addFrame(pic_arr[i]);}},
	loads: function(){ for(var i in arguments){this.addFrame(i);}}
}