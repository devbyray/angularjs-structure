'use strict';

var app = angular.module('pppApp', [
  'ngResource',
  'ngCookies',
  'ngSanitize',
  'ngRoute'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'page/page.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
