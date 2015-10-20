"use strict";

var app = angular.module('App', [
    'ngMaterial',
    'ngRoute',
    'App.controller'
]);

app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })
        .otherwise('/404',{

        });

}]);