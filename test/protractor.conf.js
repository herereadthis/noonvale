http://stackoverflow.com/questions/19066747/integrating-protractor-for-e2e-testing-with-yeoman-in-grunt-file-for-angular-j
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/e2e/*_test.js'],
  baseUrl: 'http://localhost:9000' //default test port with Yeoman
}