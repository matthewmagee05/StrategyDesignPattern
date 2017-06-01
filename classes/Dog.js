const Animal = require('../classes/Animal');
const IsNotPottyTrained = require('../interfaces/IsNotPottyTrained');

//Dog class derived from Animal class
class Dog extends Animal {
	constructor(name, breed, gender, age, size, location) {
		super(name, breed, gender, age, size, location);

		this.pottyTrained = new IsNotPottyTrained();
	}
}

module.exports = Dog;
