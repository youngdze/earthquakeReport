'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'quakeAppControllers',
    'quakeAppServices',
    'quakeAppFilters',
    'quakeAppDirectives'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'views/list-group.html',
            controller: 'LoadDataCtrl'
        }).otherwise({
            redirectTo: '/list'
        });
    }
]);

