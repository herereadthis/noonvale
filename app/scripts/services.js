'use strict';
/* Services */
var ticTacServices = angular.module('ticTacServices', ['ngResource']);

ticTacServices.factory('TicTacFinger', function(){
    var winCombo;
    // this is the array of indices of possible winning cell combinations
    // for example a win on column 2 is [1,4,7]
    winCombo = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    return {
        // factory method to select a random cell from a subset of undefined
        // values
        randomSelect: function (ticTacArray) {
            var randomO, undefinedArray, index;
            undefinedArray = [];
            // that is, loop through array, if cell is undefined, push array
            // index
            for (index in ticTacArray) {
                if (ticTacArray[index] === undefined) {
                    undefinedArray.push(index);
                }
            }
            // select random number in array size. use that number to find the
            // array index. This value becomes the random undefined cell
            randomO = undefinedArray[Math.floor(Math.random() * undefinedArray.length)];
            return randomO;

        },
        // factory method to determine a winner
        whoWon: function(ticTacArray) {
            var arrayMatch, winSets, winner, _i, _k, _l, checkSum;
            // winner object is both identity, and the winning subset of cells
            winner = {
                'identity': false,
                'winSet': []
            };
            // private function to check if array values in subset cell match
            arrayMatch = function(arr) {
                if (arr[0] === arr[1] && arr[0] === arr[2]) {
                    return true;
                }
                else {
                    return false;
                }
            };
            // multidimensional array of possible winning scenarios
            winSets = [];
            // there are 8 scenarios: 3 row wins, 3 column wins, 2 diagonal
            winSets.length = 8;

            // build array where each element is a winning combination
            for (_l = 0; _l < winSets.length; _l = _l + 1) {
                winSets[_l] = [];
                // grab indices from the game array to make subsets that might
                // be winning subsets
                for (_k = 0;_k < 3;_k = _k + 1) {
                    winSets[_l][_k] = ticTacArray[winCombo[_l][_k]];
                }
            }
            _i = 0;
            // cycle through winning combo subsets to determine a winner
            while (_i < winSets.length) {
                checkSum = parseInt(winSets[_i][0],10) +
                    parseInt(winSets[_i][1],10) +
                    parseInt(winSets[_i][2],10);
                // only run if all values in subset are defined
                if (checkSum >= 0) {
                    if (arrayMatch(winSets[_i]) === true) {
                        // return winner object. Identity is value of 1st
                        // sell of subset. It could be 2nd or 3rd, doesn't
                        // matter because the cells obviously match
                        winner.identity = winSets[_i][0];
                        // return the indices of the winning subset
                        winner.winSet = winCombo[_i];
                        break;
                    }
                }
                _i = _i + 1;
            }

            return winner;
        }
    };
});