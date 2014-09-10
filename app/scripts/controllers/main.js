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
        var freshArray, statusMessage;
        freshArray = [
            undefined,undefined,undefined,
            undefined,undefined,undefined,
            undefined,undefined,undefined
        ];
        statusMessage = {
            'gameOn': 'Make a move!',
            'winnerX': 'Winner is X!',
            'winnerY': 'Winner is O!',
            'tieGame': 'Everyone loses!'
        };
        $scope.ticTac = freshArray;
        $scope.turn = 0;
        $scope.winner = {
            'identity': false,
            'winSet': []
        };
        $scope.gameStatus = statusMessage.gameOn;
        $scope.clickSelect = function(index) {
            var classString = '';
            if ($scope.ticTac[index] !== undefined) {
                if ($scope.ticTac[index] === 1) {
                    classString = classString + ' selected mark_x';
                }
                else {
                    classString = classString + ' selected mark_o';
                }
            }
            return classString;
        };
        $scope.markWinSet = function(index) {
            var _i;
            if ($scope.winner.identity !== false) {
                for (_i in $scope.winner.winSet) {
                    if (index === $scope.winner.winSet[_i]) {
                        return 'winset_cell';
                    }
                }
            }
        };
        $scope.markCell = function(index) {
            var nextMark;
            if ($scope.ticTac[index] === undefined && $scope.winner.identity === false) {
                $scope.turn = $scope.turn + 1;
                $scope.ticTac[index] = 1;
                $scope.winner = TicTacFinger.whoWon($scope.ticTac);
                if ($scope.winner.identity === 1) {
                    $scope.gameStatus = statusMessage.winnerX;
                    console.log($scope.winner.winSet);
                }
                else {
                    // if there are still values to click
                    if ($scope.ticTac.indexOf(undefined) > -1) {
                        $scope.turn = $scope.turn + 1;
                        nextMark = TicTacFinger.randomSelect($scope.ticTac);
                        $scope.ticTac[nextMark] = 0;
                        $scope.winner = TicTacFinger.whoWon($scope.ticTac);
                        if ($scope.winner.identity === 0) {
                            $scope.gameStatus = statusMessage.winnerY;
                            console.log($scope.winner.winSet);
                        }
                    }
                }
                if ($scope.turn === 9 && $scope.winner.identity === false) {
                    $scope.gameStatus = statusMessage.tieGame;
                }
            }
        };
    }]);

