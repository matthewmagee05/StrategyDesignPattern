$(document).ready(function() {
	function search() {
		//Find the animal that meets the dropdown selection criteria
		let results = data.filter(isAnimalFound);
		let resultsFormatted = results.map(item => {
			return `<tr><td>${item.name}</td><td>${item.breed}</td> <td>${item.gender}</td> <td>${item.size}</td> <td>${item.location}</td></tr>`;
		});

		$('#myTable tr').slice(1).empty();
		$('#myTable tr:last').after(resultsFormatted);
	}

	function isAnimalFound(obj) {
		//Grap the values selected in the dropdown
		let breedDropdown = document.getElementById('breed');
		let selectedBreed = breedDropdown.options[breedDropdown.selectedIndex].text;

		let genderDropdown = document.getElementById('gender');
		let selectedGender = genderDropdown.options[genderDropdown.selectedIndex].text;

		let sizeDropdown = document.getElementById('size');
		let selectedSize = sizeDropdown.options[sizeDropdown.selectedIndex].text;

		let locationDropdown = document.getElementById('location');
		let selectedLocation = locationDropdown.options[locationDropdown.selectedIndex].text;
		return (
			obj.breed === selectedBreed &&
			obj.gender === selectedGender &&
			obj.size === selectedSize &&
			obj.location === selectedLocation
		);
	}

	$('#searchButton').click(function() {
		search();
	});
});
