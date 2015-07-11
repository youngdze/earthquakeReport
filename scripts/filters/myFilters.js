'use strict';

var quakeAppFilters = angular.module('quakeAppFilters', []);

quakeAppFilters.filter('danger', function() {
    return function(mag) {
        return (mag >= 6) ? true : false;
    }
});

quakeAppFilters.filter('warning', function() {
    return function(mag) {
        return (mag >= 4 && mag < 6) ? true : false;
    }
});

quakeAppFilters.filter('safe', function() {
    return function(mag) {
        return (mag < 4) ? true : false;
    }
});

quakeAppFilters.filter('abs', function () {
    return function (num) {
        return Math.abs(num);
    };
});

quakeAppFilters.filter('longitude', function () {
    return function (longitude) {
        return (longitude < 0) ? 'W' : 'E';
    };
});

quakeAppFilters.filter('latitude', function () {
    return function (latitude) {
        return (latitude < 0) ? 'S' : 'N';
    };
});

quakeAppFilters.filter('tsunami', function () {
    return function (tsunami, trueValue, falseValue) {
        return (tsunami != 0) ? trueValue : falseValue;
    }
})

quakeAppFilters.filter('startFrom', function () {
    return function (place, start) {
        start = +start;
        return place.slice(start);
    };
});