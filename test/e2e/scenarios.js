'use strict';

describe('Noonvale app', function() {

    // beforeEach(function() {
    //     browser().navigateTo('/');
    // });

    // describe('Homepage', function() {
    //     it('should display the correct route', function() {
    //         expect(browser().location().path()).toBe('/');
    //     });
    // });

    browser.get('/');

    describe('Homepage', function() {
        it('should display the correct route', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/");
        });
    });
});