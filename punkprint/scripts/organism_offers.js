window.addEventListener("load",
	function(){
	organism_offers_list = document.querySelectorAll(".organism_offers");
	for (var i = 0; i < organism_offers_list.length; i++) {
		var organism_offers = organism_offers_list[i];

		var navbar = null;
		var offers = [];

		navbar = organism_offers.querySelector(".organism_navbar");
		offers = organism_offers.querySelectorAll(".molecule_single-offer");

		function showOfferAtIndex(index){
			for(var i = 0; i < offers.length; i++){
				offers[i].style.opacity = 0;
				offers[i].style.zIndex = 0;
			}
			offers[index].style.opacity = 1.0;
			offers[index].style.zIndex = 1;
		}

		navbar_items = navbar.querySelectorAll(".atom_menu-item");

		for(var j = 0; j < navbar_items.length; j++){
			navbar_items[j].item_index = j;
			navbar_items[j].addEventListener("mouseover", function(){
				showOfferAtIndex(this.item_index);
			});
		}

		showOfferAtIndex(0);
	}
});
