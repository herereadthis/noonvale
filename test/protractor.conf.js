// http://stackoverflow.com/questions/19066747/integrating-protractor-for-e2e-testing-with-yeoman-in-grunt-file-for-angular-j
exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'e2e/*.js'
    ],
    baseUrl: 'http://localhost:9001' //default test port with Yeoman
}