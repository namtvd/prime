#Sum prime package

[![Build Status](https://travis-ci.org/zznamtran123/prime.svg?branch=master)](https://travis-ci.org/zznamtran123/prime)
[![Coverage Status](https://coveralls.io/repos/github/zznamtran123/prime/badge.svg?branch=master)](https://coveralls.io/github/zznamtran123/prime?branch=master)
[![Stable Version](https://img.shields.io/npm/v/sum-primes.svg)](https://www.npmjs.com/package/sum-primes)
[![Download Status](https://img.shields.io/npm/dt/sum-primes.svg)](https://www.npmjs.com/package/sum-primes) [![License](https://img.shields.io/github/license/zznamtran123/prime.svg)](https://github.com/zznamtran123/prime/blob/master/LICENSE)

A package to sum prime from 1 to n

## Requirement

* Node 6

## Installation

`npm install --save sum-primes`

## Usage
```javascript
var prime = require('sum-primes');

prime.sumPrimes(15, function (err, s) {
	console.log(s);
});
```

## Test

`npm test`

## Contributing

NamTVD

## Release History

* 1.0.0 Initial release
* 1.0.2 Update README

## License

MIT