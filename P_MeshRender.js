P_MeshRender = function(mat){
	this.material=mat; // id
	this.enable = true;
	this.width = 100;
	this.height = 100;
	this.spriteX = 0;
	this.spriteY = 0;
}

P_MeshRender.prototype = {
	rend: function(x,y,w,h){
		var ctx = this.ctx();
		var img = document.getElementById(this.material);
		ctx.drawImage(img, x,y);
	},
	ctx: function(){
		var can = document.getElementById("P_myCanvas");
		if(!can){
			can = document.createElement("canvas");
			can.id = "P_myCanvas";
			can.style.height = 500;
			can.style.width = 500;
			document.body.appendChild(can);
		}
		return can.getContext('2d');
	}
}

