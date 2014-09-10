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
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ];
        $scope.markCell = function(index,parentIndex) {
            // console.log('markCell',index,parentIndex);
            $scope.ticTac[parentIndex][index] = 1;
            console.log($scope.ticTac.toString());
        };
    }]);
