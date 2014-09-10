'use strict';

/* Filters */
// the name of the filter is "checkmark"
angular.module('ticTacFilters', []).filter('ticTacSymbol', function() {
    return function(input) {
        if (input === 1) {
            return '\u2715';
        }
        else if (input === 0) {
            return '\u25ef';
        }
    };
})
.filter('disabler', function() {
    return function(input) {
        if (input === undefined) {
            return true;
        }
        else {
            return false;
        }
    };
});
