'use strict';

var ppp = angular.module('ppppropertiesApp');

ppp.controller('HomeCtrl', function ($scope, $http) {

    $scope.home = [];

    // Get all data for the homepage
    $http.get('../scripts/models/home.json').success(function(home) {
            $scope.loaded = true;
            $scope.home = home;
    }).error(function(statusText) {
        // Alert if there's an error
        console.log(statusText);
    });

  });
