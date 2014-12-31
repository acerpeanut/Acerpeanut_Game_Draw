P_Material = function(){this.material = []; this.count=0;}

P_Material.prototype = {
	add: function(mat_arr){for(var i in mat_arr){this.material[this.count]=mat_arr[i];this.count++;}},
	load : function(){
		var div = document.getElementById("all_material");
		if(! div){
			div = document.createElement("div");
			div.id = "all_material";
			document.body.appendChild(div);
		}
		div.style.display = "none";
		for(var i in this.material){
			var img = document.createElement("img");
			img.id = "pic"+i;
			img.src = this.material[i];
			div.appendChild(img);			
		}
	}
}