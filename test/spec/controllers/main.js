'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('noonvaleApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should have 9 boxes', function () {
        expect(scope.ticTac.length).toBe(9);
    });
    it('should tell the game to begin', function () {
        expect(scope.gameStatus).toBe('Make a move!');
    });
    it('should start at turn 0', function () {
        expect(scope.turn).toBe(0);
    });
});
