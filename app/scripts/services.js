'use strict';
/* Services */
var ticTacServices = angular.module('ticTacServices', ['ngResource']);

ticTacServices.factory('TicTacFinger', function(){
    var winCombo;
    winCombo = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
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
            return randomO;

        },
        whoWon: function(ticTacArray) {
            var arrayMatch, winSets, winner, _i, _k, _l, checkSum;
            winner = {
                'identity': false,
                'winSet': []
            };
            arrayMatch = function(arr) {
                if (arr[0] === arr[1] && arr[0] === arr[2]) {
                    return true;
                }
                else {
                    return false;
                }
            };
            winSets = [];
            winSets.length = 8;

            for (_l = 0; _l < winSets.length; _l = _l + 1) {
                winSets[_l] = [];
                for (_k = 0;_k < 3;_k = _k + 1) {
                    winSets[_l][_k] = ticTacArray[winCombo[_l][_k]];
                }
            }
            _i = 0;
            while (_i < winSets.length) {
                checkSum = parseInt(winSets[_i][0],10) +
                    parseInt(winSets[_i][1],10) +
                    parseInt(winSets[_i][2],10);
                if (checkSum >= 0) {
                    if (arrayMatch(winSets[_i]) === true) {
                        winner.identity = winSets[_i][0];
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