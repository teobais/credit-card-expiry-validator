var creditCardValidateExpiry = require('../index');

const ERROR_TEXT_INVALID_EXPIRY_DATE = 'Expiry date is invalid';
const ERROR_TEXT_MONTH_OUT_OF_RANGE = 'Expiry month should be between 01 and 12';
const ERROR_TEXT_YEAR_OUT_OF_RANGE = 'Expiry year cannot be in the past';

describe('#Testing Suite for credit-card-expiry-validator', function() {
        it('The "anti-patterns"', function() {
            expect(creditCardValidateExpiry.isExpiryInvalid('4/21')).toEqual(ERROR_TEXT_INVALID_EXPIRY_DATE);
            expect(creditCardValidateExpiry.isExpiryInvalid('1124/21')).toEqual(ERROR_TEXT_INVALID_EXPIRY_DATE);
            expect(creditCardValidateExpiry.isExpiryInvalid('11/212')).toEqual(ERROR_TEXT_INVALID_EXPIRY_DATE);
            expect(creditCardValidateExpiry.isExpiryInvalid('11/21222')).toEqual(ERROR_TEXT_INVALID_EXPIRY_DATE);
            expect(creditCardValidateExpiry.isExpiryInvalid('1222/22')).toEqual(ERROR_TEXT_INVALID_EXPIRY_DATE);
            expect(creditCardValidateExpiry.isExpiryInvalid('01/211')).toEqual(ERROR_TEXT_INVALID_EXPIRY_DATE);
        });

        it('Something totally irrelevant', function() {
            expect(creditCardValidateExpiry.isExpiryInvalid('I am just a test')).toEqual(ERROR_TEXT_INVALID_EXPIRY_DATE);
        });

        it('Inappropriate expiry month', function() {
            expect(creditCardValidateExpiry.isExpiryInvalid('14/21')).toEqual(ERROR_TEXT_MONTH_OUT_OF_RANGE);
        });

        it('Inappropiate expiry year', function(){
            expect(creditCardValidateExpiry.isExpiryInvalid('11/17')).toEqual(ERROR_TEXT_YEAR_OUT_OF_RANGE);
            expect(creditCardValidateExpiry.isExpiryInvalid('11/2017')).toEqual(ERROR_TEXT_YEAR_OUT_OF_RANGE);
            expect(creditCardValidateExpiry.isExpiryInvalid('01/2011')).toEqual(ERROR_TEXT_YEAR_OUT_OF_RANGE);
        });

        it('The happy-flows', function() {
            expect(creditCardValidateExpiry.isExpiryInvalid('01/2019')).toBeFalsy();
            expect(creditCardValidateExpiry.isExpiryInvalid('11/19')).toBeFalsy();
            expect(creditCardValidateExpiry.isExpiryInvalid('11/2019')).toBeFalsy();
            expect(creditCardValidateExpiry.isExpiryInvalid('12/21')).toBeFalsy();
            expect(creditCardValidateExpiry.isExpiryInvalid('01/22')).toBeFalsy();
        })
});