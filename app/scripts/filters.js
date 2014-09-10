'use strict';

/* Filters */
angular.module('ticTacFilters', []).filter('ticTacSymbol', function() {
    // human player returns 1, computer player returns 0
    // filter reads if 1, then replace with "X" - if 0, then replace with "O"
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
