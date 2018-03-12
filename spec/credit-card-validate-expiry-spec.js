var creditCardValidateExpiry = require('../index');

describe('#Testing Suite for credit-card-expiry-validator', function() {
        it('The "anti-patterns"', function() {
            expect(creditCardValidateExpiry.isExpiryInvalid('4/21')).toEqual('Invalid expiry date');
            expect(creditCardValidateExpiry.isExpiryInvalid('1124/21')).toEqual('Invalid expiry date');
            expect(creditCardValidateExpiry.isExpiryInvalid('11/212')).toEqual('Invalid expiry date');
            expect(creditCardValidateExpiry.isExpiryInvalid('11/21222')).toEqual('Invalid expiry date');
            expect(creditCardValidateExpiry.isExpiryInvalid('1222/22')).toEqual('Invalid expiry date');
            expect(creditCardValidateExpiry.isExpiryInvalid('01/211')).toEqual('Invalid expiry date');
        });

        it('Something totally irrelevant', function() {
            expect(creditCardValidateExpiry.isExpiryInvalid('I am just a test')).toEqual('Invalid expiry date');
        });

        it('Inappropriate expiry month', function() {
            expect(creditCardValidateExpiry.isExpiryInvalid('14/21')).toEqual('Month should be between 01 and 12');
        });

        it('Inappropiate expiry year', function(){
            expect(creditCardValidateExpiry.isExpiryInvalid('11/17')).toEqual('Year is less than current year.');
            expect(creditCardValidateExpiry.isExpiryInvalid('11/2017')).toEqual('Year is less than current year.');
            expect(creditCardValidateExpiry.isExpiryInvalid('01/2011')).toEqual('Year is less than current year.');
        });

        it('The happy-flows', function() {
            expect(creditCardValidateExpiry.isExpiryInvalid('01/2019')).toBeFalsy();
            expect(creditCardValidateExpiry.isExpiryInvalid('11/19')).toBeFalsy();
            expect(creditCardValidateExpiry.isExpiryInvalid('11/2019')).toBeFalsy();
            expect(creditCardValidateExpiry.isExpiryInvalid('12/21')).toBeFalsy();
        })
});