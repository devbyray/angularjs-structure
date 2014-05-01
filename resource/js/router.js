(function(){
    'use strict';

    angular.module("app", ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider
                .when('/', {
                    templateUrl: 'home/home.html'
                })
                .when('/creator', {
                    templateUrl: 'home/home.html'
                });
        });
}());
