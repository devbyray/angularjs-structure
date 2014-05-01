'use strict';

var ppp = angular.module('ppppropertiesApp', [
  'ngResource',
  'ngCookies',
  'ngSanitize',
  'ngRoute'
]);

ppp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.html'
    })
    .when('/home', {
      templateUrl: 'home/home.html'
    })
    .when('/weather', {
      templateUrl: 'weather/weather.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
