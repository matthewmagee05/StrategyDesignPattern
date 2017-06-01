const PottyTrained = require('../interfaces/PottyTrained');

class IsNotPottyTrained extends PottyTrained {
	pottyTrained(){
		return "I am not potty trained!!";
	}
}

module.exports = IsNotPottyTrained;