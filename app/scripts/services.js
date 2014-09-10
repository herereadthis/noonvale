'use strict';
/* Services */
var ticTacServices = angular.module('ticTacServices', ['ngResource']);

ticTacServices.factory('TicTacFinger', function(){
    return {
        randomSelect: function (ticTacArray) {
            var randomO, undefinedArray, index;
            undefinedArray = [];
            for (index in ticTacArray) {
                if (ticTacArray[index] === undefined) {
                    undefinedArray.push(index);
                }
            }
            randomO = undefinedArray[Math.floor(Math.random() * undefinedArray.length)];
            // console.log(randomO);
            return randomO;

        },
        whoWon: function(ticTacArray) {
            var row1, row2, row3, col1, col2, col3, dia1, dia2,
                arrayMatch, winSets, winner, _i, checkSum;
            arrayMatch = function(arr) {
                if (arr[0] === arr[1] && arr[0] === arr[2]) {
                    return true;
                }
                else {
                    return false;
                }
            };
            row1 = [ticTacArray[0], ticTacArray[1], ticTacArray[2]];
            row2 = [ticTacArray[3], ticTacArray[4], ticTacArray[5]];
            row3 = [ticTacArray[6], ticTacArray[7], ticTacArray[8]];
            col1 = [ticTacArray[0], ticTacArray[3], ticTacArray[6]];
            col2 = [ticTacArray[1], ticTacArray[4], ticTacArray[7]];
            col3 = [ticTacArray[2], ticTacArray[5], ticTacArray[8]];
            dia1 = [ticTacArray[0], ticTacArray[4], ticTacArray[8]];
            dia2 = [ticTacArray[2], ticTacArray[4], ticTacArray[6]];
            winSets = [row1, row2, row3, col1, col2, col3, dia1, dia2];

            winner = false;
            _i = 0;
            while (_i < winSets.length) {
                checkSum = parseInt(winSets[_i][0],10) +
                    parseInt(winSets[_i][1],10) +
                    parseInt(winSets[_i][2],10);
                if (checkSum >= 0) {
                    if (arrayMatch(winSets[_i]) === true) {
                        winner = winSets[_i][0];
                        break;
                    }
                }
                _i = _i + 1;
            }

            return winner;
        }
    };
});