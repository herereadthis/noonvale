'use strict';

/**
 * @ngdoc function
 * @name noonvaleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noonvaleApp
 */
angular.module('noonvaleApp')
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.ticTac = [
            undefined,undefined,undefined,
            undefined,undefined,undefined,
            undefined,undefined,undefined
        ];
        $scope.markCell = function(index) {
            console.log('markCell',index);
            $scope.ticTac[index] = 1;
            console.log($scope.ticTac.toString());
        };
    }]);
