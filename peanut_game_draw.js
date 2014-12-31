


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





