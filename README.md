# credit-card-expiry-validator
> Validate credit card's expiry date

## Install
```
npm install -g credit-card-expiry-validator
```

## Use

### 1. Load the module
```javascript
var creditCardValidateExpiry = require('credit-card-expiry-validator');
```

### 2. Validate an expiry date using the validator
```javascript
creditCardValidateExpiry.isExpiryInvalid('14/21'); // returns 'Month should be between 01 and 12'
creditCardValidateExpiry.isExpiryInvalid('11/17'); // returns 'Year is less than current year.'
creditCardValidateExpiry.isExpiryInvalid('1222/22'); // returns 'Invalid expiry date'
creditCardValidateExpiry.isExpiryInvalid('11/19'); // returns false
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