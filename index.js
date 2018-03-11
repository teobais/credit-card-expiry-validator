'use strict';

module.exports = function(expiryDate) {

    const expiryDatePattern = new RegExp('^(\\d{2})\\/(\\d{4}|\\d{2})$');
    if (!expiryDate.match(expiryDatePattern) ) return 'Invalid expiry date';

    const monthPattern = new RegExp("(0[1-9]|1[0-2])");
    var expiryMonth = expiryDate.split("/")[0];
    if(!expiryMonth.match(monthPattern)) return 'Month should be between 01 and 12';

    var expiryYear = expiryDate.split("/")[1];
    var currentYear = new Date().getFullYear();
    currentYear = parseInt(expiryYear.length === 4 ? currentYear : currentYear.toString().substr(-2));
    if (currentYear > expiryYear) return 'Year is less than current year.';


    return true;
};