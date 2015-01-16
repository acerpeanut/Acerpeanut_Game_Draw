P_MeshRender = function(mat){
	this.material=mat; // id
	this.enable = true;
	this.width = 100;
	this.height = 100;
	this.spriteX = 0;
	this.spriteY = 0;
	this.canvas = null;
	this.ctx = null;
}

P_MeshRender.prototype = {
	rend: function(x,y,w,h){
		var img = document.getElementById(this.material);
		this.ctx.drawImage(img, x,y,w,h);
	},
	addCanvas: function(){
		var can = document.getElementById("P_myCanvas");
		if(!can){
			can = document.createElement("canvas");
			can.id = "P_myCanvas";
			can.style.height = 500;
			can.style.width = 500;
			document.body.appendChild(can);
		}
		this.canvas = can;
		this.ctx = this.canvas.getContext('2d');
	},
	setWH: function(w,h){
		this.canvas.style.height = h; this.canvas.style.width = w; 
	}
}

