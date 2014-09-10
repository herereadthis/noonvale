'use strict';
/* Services */
var ticTacServices = angular.module('ticTacServices', ['ngResource']);

// The factory function is similar to a controller's constructor in that both
// can declare dependencies to be injected via function arguments.
// The "Phone" service is declared as a dependency on the $resource service
ticTacServices.factory('randomSelect', function(){
    return {
        bar: function (ticTacArray) {
            var randomO, undefinedArray, index;
            undefinedArray = [];
            for (index in ticTacArray) {
                if (ticTacArray[index] === undefined) {
                    undefinedArray.push(index);
                }
            }
            randomO = undefinedArray[Math.floor(Math.random() * undefinedArray.length)];
            console.log(randomO);
            return randomO;

        }
    };
});