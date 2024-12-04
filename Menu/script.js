function dropDown() {
	var x = document.getElementById("links");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}

	const nums = document.getElementById('number')
	const alphabeat = document.getElementById('letter')
    

	document.getElementById("letters").addEventListener("click", function(event){
		event.preventDefault()
		x.style.display = "none";
		alphabeat.style.display = "block"
		nums.style.display = 'none'
	});
	document.getElementById("numbers").addEventListener("click", function(event){
		event.preventDefault()
		x.style.display = "none";
		alphabeat.style.display = "none"
		nums.style.display = 'block'
	});

	/*document.getElementById("links").addEventListener("click", function(event){
		event.preventDefault()
		x.style.display = "none";
	});

	

		*/
}
