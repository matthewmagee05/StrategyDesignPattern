const express = require('express');
const path = require('path');
const IsNotPottyTrained = require('../interfaces/IsNotPottyTrained');
const IsPottyTrained = require('../interfaces/IsPottyTrained');
const Dog = require('../classes/Dog');
const app = express();
const router = express.Router();

//name, breed, gender, age, size, location
let dog = new Dog('Dumb Dog', 'Labrador', 'female', 42, 'small', 'San Diego');
let dog2 = new Dog('Frenchy McFrencherson', 'French Bulldog', 'male', 20, 'medium', 'New York');
let dog3 = new Dog('Roberto', 'Papillon', 'undecided', 5, 'large', 'Austin');
let dog4 = new Dog('Wazzupp', 'Labrador', 'female', 10, 'medium', 'San Diego');
let dog5 = new Dog('Biscuit', 'Poodle', 'male', 8, 'large', 'San Diego');

animals = [dog, dog2, dog3, dog4];

//Get the individual unique properties from the animals
let breedDirty = animals.map(animal => animal.breed);
let breeds = breedDirty.filter((v, i, a) => a.indexOf(v) === i);
let genderDirty = animals.map(animal => animal.gender);
let genders = genderDirty.filter((v, i, a) => a.indexOf(v) === i);
let sizeDirty = animals.map(animal => animal.size);
let sizes = sizeDirty.filter((v, i, a) => a.indexOf(v) === i);
let locationDirty = animals.map(animal => animal.location);
let locations = locationDirty.filter((v, i, a) => a.indexOf(v) === i);

//Using the strategy pattern for if an animal is potty trained or not.
console.log(dog.isPottyTrained());
dog.setPottyTrained(new IsPottyTrained());
console.log(dog.isPottyTrained());

//Pass the animal properties as well as the array of animal objects to the index.pug template
router.get('/', (req, res) => {
	res.render('index', { breeds, genders, sizes, locations, animals: JSON.stringify(animals) });
});

module.exports = router;
