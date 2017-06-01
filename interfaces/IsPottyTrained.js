const PottyTrained = require('../interfaces/PottyTrained');

class IsPottyTrained extends PottyTrained {
	pottyTrained(){
		return "I am potty trained!";
	}
}

module.exports = IsPottyTrained; 