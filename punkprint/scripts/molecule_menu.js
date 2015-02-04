window.addEventListener("load",
function setHeadListeners(){
	var heads = []
	molecule_menu_list = document.querySelectorAll(".molecule_menu");
	for (var i = 0; i < molecule_menu_list.length; i++) {
		var menu = molecule_menu_list[i];

		var head = null;
		var container = null;

		head = menu.querySelector(".atom_menu-head");

		container = menu.querySelector(".container");
		if((container == null) || (head == null)){
			continue;
		}

		head.container = container;
		head.container.expanded = false;
		head.container.style.height = "auto";
		head.container.max_height = head.container.clientHeight;
		head.container.style.height = "0";
		head.menu = menu;
		heads[heads.length] = head;

		head.addEventListener("click", function(){
			if(this.container.expanded == false){
				for(var j = 0; j< heads.length; j++){
					heads[j].container.style.height = "0";
					heads[j].container.expanded = false;
					heads[j].container.style.transition = "height 0.3s ease-in-out";
				}
				this.container.style.height = this.container.max_height+"px";
				this.container.expanded = true;
				this.container.style.transition = "height 0.3s ease-out"
			}else{
				this.container.style.height = "0";
				this.container.expanded = false;
				this.container.style.transition = "height 0.3s ease-in-out";
			}
		});
	}
});
