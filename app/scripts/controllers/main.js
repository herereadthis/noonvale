'use strict';

/**
 * @ngdoc function
 * @name noonvaleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noonvaleApp
 */
angular.module('noonvaleApp')
    .controller('MainCtrl', ['$scope', 'TicTacFinger', function ($scope, TicTacFinger) {
        $scope.ticTac = [
            undefined,undefined,undefined,
            undefined,undefined,undefined,
            undefined,undefined,undefined
        ];
        $scope.asdf = false;
        $scope.clickSelect = function(index) {
            if ($scope.ticTac[index] !== undefined) {
                if ($scope.ticTac[index] === 1) {
                    return 'selected mark_x';
                }
                else {
                    return 'selected mark_o';
                }
            }
        };
        $scope.markCell = function(index) {
            var nextMark, winner;
            if ($scope.ticTac[index] === undefined) {
                // console.log('markCell',index);
                $scope.ticTac[index] = 1;
                winner = TicTacFinger.whoWon($scope.ticTac);
                // console.log($scope.ticTac.toString());
                if (winner === 1) {
                    console.log('winner is X');
                }
                else {
                    // if there are still values to click
                    if ($scope.ticTac.indexOf(undefined) > -1) {
                        nextMark = TicTacFinger.randomSelect($scope.ticTac);
                        $scope.ticTac[nextMark] = 0;
                        if (TicTacFinger.whoWon($scope.ticTac) === 0) {
                            console.log('winner is O');
                        }
                    }
                }
            }
        };
        // $scope.$watchCollection('ticTac', function() {
        //     console.log($scope.ticTac.toString());
        // });
    }]);

