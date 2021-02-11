/* Scripts */

console.log("Scripts are linked!");

// smooth scroll to top
function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// bar menu
function handleBarMenu() {
	var barmenu = document.getElementById("barmenu-click");
	var bars = document.getElementById("barmenu");
	if (bars.style.display == "block") {
		barmenu.innerHTML = "<i class='fas fa-bars'></i>";
		bars.style.display = "none";
	} else {
		barmenu.innerHTML = "<i class='fas fa-times'></i>";
		bars.style.display = "block";
		bars.style.marginBottom = "5px";
	}
}

// Brand switches between red and orange colors for fun <|:^)
function makeItPretty() {
	var colors = ["#eb7e01","#da4343"];
	var brand = document.getElementById("site-brand");
	var min = 0;
	var max = 3;
	var randomColor = Math.floor(Math.random() * (max - min) + min);
	
	// mouse over
	brand.addEventListener("mouseover", function() {
		brand.style.color = colors[randomColor];
	});
	// mouse out
	brand.addEventListener("mouseout", function() {
		brand.style.color = "#454341";
	});
}
