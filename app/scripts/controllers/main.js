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
        // cells begin as an array of 9 undefined values
        freshArray = [
            undefined,undefined,undefined,
            undefined,undefined,undefined,
            undefined,undefined,undefined
        ];
        // messages to be displayed for game status
        statusMessage = {
            'gameOn': 'Make a move!',
            'winnerX': 'Winner is X!',
            'winnerY': 'Winner is O!',
            'tieGame': 'Everyone loses!'
        };
        // scope for cells is undefined array length 9
        $scope.ticTac = freshArray;
        // Mark turns for the game
        $scope.turn = 0;
        // winner object returns 1 if X wins, 0 if O wins. False otherwise.
        // winner.winset is the the subset of the array of winning cells
        $scope.winner = {
            'identity': false,
            'winSet': []
        };
        // initial status is "Make a move"
        $scope.gameStatus = statusMessage.gameOn;
        // function for ngClass, mark classes for selected cells
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
        // function for ngClass, will visibly show the winning cells
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
        // function for ngClick, what happens when human player clicks
        $scope.markCell = function(index) {
            var nextMark;
            // only run if cell is unitially undefined and no winner declared
            if ($scope.ticTac[index] === undefined && $scope.winner.identity === false) {
                // increment 1 turn
                $scope.turn = $scope.turn + 1;
                // mark cell with 1 for X = human player
                $scope.ticTac[index] = 1;
                // factory to see if anyone won, return object
                $scope.winner = TicTacFinger.whoWon($scope.ticTac);
                // if winner identity is 1, then human player wins
                if ($scope.winner.identity === 1) {
                    $scope.gameStatus = statusMessage.winnerX;
                }
                else {
                    // if there are still values to click
                    // that is, since human player goes first, human player can
                    // play on turn 9 and computer player has no options
                    if ($scope.ticTac.indexOf(undefined) > -1) {
                        // increment 1 turn
                        $scope.turn = $scope.turn + 1;
                        // computer player selects a random undefined cell with
                        // factory function
                        nextMark = TicTacFinger.randomSelect($scope.ticTac);
                        // mark cell with 0 for O = computer player
                        $scope.ticTac[nextMark] = 0;
                        // factory to see if anyone won, return object
                        $scope.winner = TicTacFinger.whoWon($scope.ticTac);
                        // if winner identity is 0, then computer player wins
                        if ($scope.winner.identity === 0) {
                            $scope.gameStatus = statusMessage.winnerY;
                        }
                    }
                }
                // also the possibility that game ends with no winner
                if ($scope.turn === 9 && $scope.winner.identity === false) {
                    $scope.gameStatus = statusMessage.tieGame;
                }
            }
        };
    }]);

