
P_All_Material = {
	material : {
		"pic1": "img/pic1.jpg",
		"pic2": "img/pic2.jpg",
		"pic3": "img/pic3.jpg"
	},
	load : function(){
		var div = document.getElementById("all_material");
		if(! div){
			div = document.createElement("div");
			div.id = "all_material";
			document.body.appendChild(div);
		}
		for(var i in this.material){
			var img = document.createElement("img");
			img.id = i;
			img.src = this.material[i];
			// img.style.display = "none";
			div.appendChild(img);			
		}
		// var can = document.getElementById("P_myCanvas");
		// if(! can){
		// 	can = document.createElement("canvas");
		// 	can.id = "P_myCanvas";
		// 	document.body.appendChild(can);
		// }
	}
}

P_draw = { 
	canvas : function(){
		var can = document.getElementById("P_myCanvas");
		// if(! can){
			can = document.createElement("canvas");
			can.id = "P_myCanvas";
			can.style.height = 100;
			can.style.width = 200;
			document.body.appendChild(can);
		// }
		return can;
	}
}

P_draw.draw = function(){
	var img = document.getElementById("pic1");
	var can = this.canvas();
	var cxt = can.getContext('2d');
	cxt.drawImage(img, 10, 10);
	alert(img.src);
}

P_Object = function(){
}
P_Object.prototype.position = new Vector3(0.0,0.0,0.0);
P_Object.prototype.localPosition = new Vector3(0.0,0.0,0.0);
P_Object.prototype.scale = new Vector3(0.0,0.0,0.0);
P_Object.prototype.material = {
	id: "pic1"
};

P_Object.prototype.draw = function(){
	P_Object.cxt.drawImage(this.material)
}