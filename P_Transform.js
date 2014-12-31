// 依赖于Vector3
P_Transform = function(){
	this.position = new Vector3(0.0,0.0,0.0);
	this.localPosition = new Vector3(0.0,0.0,0.0);
	this.scale = new Vector3(1.0,1.0,1.0);
	this.material = null;
	this.children = [];
	this.pparent = null;
}
P_Transform.prototype = {
	addChild : function(chd){ 
		chd.pparent = this; 
		var child_len=this.children.length; 
		this.children[child_len] = chd;
		chd.setPosition(chd.position.x,chd.position.y,chd.position.z);
	},
	setParent: function(ppa){
		ppa.addChild(this);
	},
	setPosition: function(x,y,z){
		this.position.x = x;this.position.y = y;this.position.z = z;
		var lV, pS;
		if(this.pparent){
			lV = this.position.subtract(this.pparent.position);
			pS = this.pparent.scale;
		}
		else{
			lV = this.position;
			pS = new Vector3(1.0,1.0,1.0);
		}
		this.localPosition.x = lV.x / pS.x;
		this.localPosition.y = lV.y / pS.y;
		this.localPosition.z = lV.z / pS.z;
		for(var i in this.children){
			this.children[i].setLocalPosition(this.children[i].localPosition.x,
				this.children[i].localPosition.y,this.children[i].localPosition.z);
		}
	},
	setLocalPosition: function(x,y,z){
		this.localPosition.x = x;this.localPosition.y = y;this.localPosition.z = z;
		var lV,pV;
		if(this.pparent){
			pV = this.pparent.position;
			lV = new Vector3(this.localPosition.x*this.pparent.scale.x, 
				this.localPosition.y*this.pparent.scale.y, 
				this.localPosition.z*this.pparent.scale.z);
		}
		else{
			pV = new Vector3(0.0,0,0);
			lV = new Vector3(0.0,0.0,0.0);
		}
		this.position.x = lV.x + pV.x;
		this.position.y = lV.y + pV.y;
		this.position.z = lV.z + pV.z;
		for(var i in this.children){
			this.children[i].setLocalPosition(this.children[i].localPosition.x,
				this.children[i].localPosition.y,this.children[i].localPosition.z);
		}
	},
	setScale: function(x,y,z){
		this.scale(x,y,z);
	}
}