'use strict';

var ppp = angular.module('ppppropertiesApp');

ppp.controller('PropertyCtrl', function ($scope, $http) {

    $scope.property = [];

    // Get all data for the propertypage
    $http.get('../scripts/models/property.json').success(function(property) {
            $scope.loaded = true;
            $scope.property = property;
    }).error(function(statusText) {
        // Alert if there's an error
        console.log(statusText);
    });

  });

// Function makes an object to put all propperties in
// for each property item. It saves all fields!
function PropertyFormCtrl($scope) {
    $scope.propertyObject = [];
    $scope.propertyItem = '';
    $scope.submit = function() {
      if ($scope.propertyItem) {
        $scope.propertyObject.push(this.propertyItem);
        $scope.propertyItem = '';
      }
    };
}

function GetCurrentDate() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	if (month<10){
		month="0" + month;
	};
	var day = date.getDate();
	$scope.date = year + "-" + month + "-" + day;
}
