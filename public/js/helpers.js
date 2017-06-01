$(document).ready(function() {
	function search() {
		//Grap the values selected in the dropdown
		let breedDropdown = document.getElementById('breed');
		let selectedBreed = breedDropdown.options[breedDropdown.selectedIndex].text;

		let genderDropdown = document.getElementById('gender');
		let selectedGender = genderDropdown.options[genderDropdown.selectedIndex].text;

		let sizeDropdown = document.getElementById('size');
		let selectedSize = sizeDropdown.options[sizeDropdown.selectedIndex].text;

		locationDropdown = document.getElementById('location');
		let selectedLocation = locationDropdown.options[locationDropdown.selectedIndex].text;

		//Find the animal that meets the dropdown selection criteria
		let results = data.filter(
			obj =>
				obj.breed === selectedBreed &&
				obj.gender === selectedGender &&
				obj.size === selectedSize &&
				obj.location === selectedLocation
		);
		let stuff = displayData(results);
		//display the data in a table
		$('#animalItem').html(
			`<table border="1">
				<tr>
					<th>Name</th>
					<th>Breed</th>
					<th>Gender</th>
					<th>Size</th>
					<th>Location</th>
				</tr>
				<tr>
					${displayData(results)}
				</tr>
			</table>`
		);
	}
	function displayData(items) {
		return items.map(item => {
			return `<td>${item.name}</td><td>${item.breed}</td> <td>${item.gender}</td> <td>${item.size}</td> <td>${item.location}</td>`;
		});
	}

	$('#searchButton').click(function() {
		search();
	});
});
