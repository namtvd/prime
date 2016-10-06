var expect = require('chai').expect; // expect library
var prime = require('../src/index.js'); // your module, test this

describe('Prime', function () {
	describe('sum()', function () { // test prime method

		it('Tong cac so nguyen to tu 1 > 10 la: 25', function (done) { // test case to test with param 10
			prime.sumPrimes(10, function (err, s) {
				expect(err).to.equal(null);
				expect(s).to.equal(25);
				done();
			});
		});

		it('Returns error when param is not number', function (done) {
			prime.sumPrimes('I am not number', function (err, s) {
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('Param must be a number');
				done();
			});
		});

		it('Returns error when param is  < 0', function (done) {
			prime.sumPrimes(-5, function (err, s) {
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('Param must be > 0');
				done();
			});
		});

	});
});