const express = require('express');
const path = require('path');
const IsNotPottyTrained = require('../interfaces/IsNotPottyTrained');
const IsPottyTrained = require('../interfaces/IsPottyTrained');
const Dog = require('../classes/Dog');
const app = express();
const router = express.Router();
const animalData = require('../data/animalData');

const animals = animalData;

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
console.log(animals[0].isPottyTrained());
animals[0].setPottyTrained(new IsPottyTrained());
console.log(animals[0].isPottyTrained());

//Pass the animal properties as well as the array of animal objects to the index.pug template
router.get('/', (req, res) => {
	res.render('index', { breeds, genders, sizes, locations, animals: JSON.stringify(animals) });
});

module.exports = router;
