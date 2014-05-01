/**
 * @controller PageCTRL is the controller for the homepage
 * @object page has all the data from the page.json
 * @returns [all the data from the object "Object"]
 */


'use strict';

var app = angular.module('pppApp');

app.controller('PageCtrl', function ($scope, $http) {

    $scope.page = [];

    // Get all data for the page from the page.json
    // with an HTTP.get function
    // After succes it returns all the data in the page object
    $http.get('../scripts/models/page.json').success(function(page) {
            $scope.loaded = true;
            $scope.page = page;
    }).error(function(statusText) {
        // Alert if there's an error
        // returns the error if it faild to get the json
        console.log(statusText);
    });

  });
