'use strict';

var ppp = angular.module('ppppropertiesApp');

ppp.controller('WeatherCtrl', function ($scope, $http) {

    $scope.weather = [];

    // Get all data for the weatherpage
    $http.get('../scripts/models/weather.json').success(function(weather) {
            $scope.loaded = true;
            $scope.weather = weather;
    }).error(function(statusText) {
        // Alert if there's an error
        console.log(statusText);
    });

  });
