'use strict';


var quakeAppDirectives = angular.module('quakeAppDirectives', []);

/* the solution below is found at
 * http://stackoverflow.com/questions/15207788/calling-a-function-when-ng-repeat-has-finished
 */
quakeAppDirectives.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }
});

quakeAppDirectives.directive('googleMap', function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            latitude: '@',
            longitude: '@',
            index: '@'
        },
        template: '<div id="map-canvas-{{ index }}"></div>',
        link: function (scope, ele) {
        }
    }
});