var validateExpiry = require('../index');

describe('#Testing Suite for credit-card-expiry-validator', function() {
        it('The "anti-patterns"', function() {
            expect(validateExpiry('4/21')).toEqual('Invalid expiry date');
            expect(validateExpiry('1124/21')).toEqual('Invalid expiry date');
            expect(validateExpiry('11/212')).toEqual('Invalid expiry date');
            expect(validateExpiry('11/21222')).toEqual('Invalid expiry date');
            expect(validateExpiry('1222/22')).toEqual('Invalid expiry date');
            expect(validateExpiry('01/211')).toEqual('Invalid expiry date');
        });

        it('Something totally irrelevant', function() {
            expect(validateExpiry('I am just a test')).toEqual('Invalid expiry date');
        });

        it('Inappropriate expiry month', function() {
            expect(validateExpiry('14/21')).toEqual('Month should be between 01 and 12');
        });

        it('Inappropiate expiry year', function(){
            expect(validateExpiry('11/17')).toEqual('Year is less than current year.');
            expect(validateExpiry('11/2017')).toEqual('Year is less than current year.');
            expect(validateExpiry('01/2011')).toEqual('Year is less than current year.');
        });

        it('The happy-flows', function() {
            expect(validateExpiry('01/2019')).toBeTruthy();
            expect(validateExpiry('11/19')).toBeTruthy();
            expect(validateExpiry('11/2019')).toBeTruthy();
            expect(validateExpiry('12/21')).toBeTruthy();
        })
});