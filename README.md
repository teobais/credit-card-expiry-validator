# credit-card-expiry-validator
> Validate credit card's expiry date

## Install
```
npm install -g credit-card-expiry-validator
```

## Use

### 1. Load the module
```javascript
var validateExpiry = require('credit-card-expiry-validator');
```

### 2. Validate an expiry date using the validator
```javascript
validateExpiry('14/21'); // returns 'Month should be between 01 and 12'
validateExpiry('11/17'); // returns 'Year is less than current year.'
validateExpiry('1222/22'); // returns 'Invalid expiry date'
validateExpiry('11/19'); // returns true
```

## Test
To execute tests, first install the project dependencies:

```
$ npm install
```

Then, run the tests
```
$ npm test
```