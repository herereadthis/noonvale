'use strict';

/**
 * @ngdoc function
 * @name noonvaleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noonvaleApp
 */
angular.module('noonvaleApp')
    .controller('MainCtrl', ['$scope', 'randomSelect', function ($scope, randomSelect) {
        $scope.ticTac = [
            undefined,undefined,undefined,
            undefined,undefined,undefined,
            undefined,undefined,undefined
        ];
        $scope.asdf = false;
        $scope.clickSelect = function(index) {
            if ($scope.ticTac[index] !== undefined) {
                return 'selected    ';
            }
        };
        $scope.markCell = function(index) {
            var nextMark;
            if ($scope.ticTac[index] === undefined) {
                // console.log('markCell',index);
                $scope.ticTac[index] = 1;
                // console.log($scope.ticTac.toString());
                // if there are still values to click
                if ($scope.ticTac.indexOf(undefined) > -1) {
                    nextMark = randomSelect.bar($scope.ticTac);
                    $scope.ticTac[nextMark] = 0;
                }
            }
        };
    }]);

