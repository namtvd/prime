var isPrime = function (num) {
	for (var i = 2; i <= num; i++) {
		if (num % 2 == 0) {
			return false;
		}
	}
	return true;
};

var sumPrimes = function (num, callback) {
	if (isNaN(num)) {
		var err = new Error('Param must be a number');
		return callback(err);
	}

	if (num < 0) {
		var err = new Error('Param must be > 0');
		return callback(err);
	}

	var sum = 0;
	for (var i = 0;  i < num; i++) {
		if (isPrime(i) == true) {
			sum += i;
		}
	}

	var s = sum;
	callback(null, s);
};

module.exports = {
	sumPrimes : sumPrimes
}