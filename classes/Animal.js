const PottyTrained = require('../interfaces/PottyTrained');
//Base class that all animals will be derived from
class Animal {
	constructor(name, breed, gender, age, size, location) {
		this.pottyTrained = PottyTrained;
		this.name = name;
		this.breed = breed;
		this.gender = gender;
		this.age = age;
		this.size = size;
		this.location = location;
	}

	setName(name) {
		this.name = name;
	}

	getName(name) {
		return this.name;
	}

	setBreed(breed) {
		this.breed = breed;
	}

	getBreed() {
		return this.breed;
	}

	setGender(gender) {
		this.gender = gender;
	}

	getGender() {
		return this.gender;
	}

	setAge(age) {
		this.age = age;
	}

	getAge() {
		return this.age;
	}

	setSize(size) {
		this.size = size;
	}

	getSize() {
		return this.size;
	}

	setLocation(location) {
		this.location = location;
	}

	getLocation() {
		return this.location;
	}

	isPottyTrained() {
		return this.pottyTrained.pottyTrained();
	}

	setPottyTrained(newPottyType) {
		this.pottyTrained = newPottyType;
	}
}

module.exports = Animal;
