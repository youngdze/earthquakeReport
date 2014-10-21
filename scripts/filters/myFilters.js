'use strict';

var quakeAppFilters = angular.module('quakeAppFilters', []);

quakeAppFilters.filter('danger', function() {
    return function(mag) {
        return (mag >= 6) ? true : false;
    }
});

quakeAppFilters.filter('warning', function() {
    return function(mag) {
        return (mag >= 5 && mag < 6) ? true : false;
    }
});

quakeAppFilters.filter('safe', function() {
    return function(mag) {
        return (mag < 5) ? true : false;
    }
});