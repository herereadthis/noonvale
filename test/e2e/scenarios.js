'use strict';
describe('E2E: Testing Routes:', function () {
'use strict';
beforeEach(function() {
    browser().navigateTo('/');
});

it('test', function() {
    browser().navigateTo('#/');
    expect(browser().location().path()).toBe("/");
});
})
