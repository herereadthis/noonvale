'use strict';

/**
 * @ngdoc overview
 * @name noonvaleApp
 * @description
 * # noonvaleApp
 *
 * Main module of the application.
 */
angular
  .module('noonvaleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ticTacFilters',
    'ticTacServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
