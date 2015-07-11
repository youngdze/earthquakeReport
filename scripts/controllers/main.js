'use strict';

var quakeAppControllers = angular.module('quakeAppControllers', []);

quakeAppControllers.controller('TimeCtrl', ['$scope', '$timeout', '$log', 'Time',
    function ($scope, $timeout, $log, Time) {
        var updateTime = function () {
            $scope.time = Time.getTime();
            $timeout(updateTime, 1000);
        };

        updateTime();
    }
]);

quakeAppControllers.controller('LoadDataCtrl', ['$scope', '$timeout', '$log', 'Place',
    function($scope, $timeout, $log, Place) {
        $scope.loading = true;
        $scope.loadSuccess = false;

        $scope.pageSize = 10;
        $scope.showMore = function () {
            $scope.pageSize += 10;
        };


        var updateData = function() {
            Place.loadList()
                .success(function(data, status, headers, config) {
//                    $log.log('load data successfully!');

                    $scope.places = data.features;

                    $scope.loadSuccess = true;
                    $scope.loading = false;
                    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
                        var $ = jQuery;
                        $('.collapsible').collapsible({
                            accordion : false
                        });
                    });
                    $timeout(function() {
                        $scope.loading = true;
                        updateData();
                    }, 1 * 60 * 1000);
                }).error(function() {
                    $log.error('load data failed, reloading.');
                    Place.loadList();
                });
        }

        updateData();
    }
]);

// quakeAppControllers.controller('LoadDataCtrl', ['$scope', '$log', 'PlaceNew',
//     function ($scope, $log, PlaceNew) {
//         $scope.loading = true;
//         $scope.loadSuccess = false;

//         PlaceNew.get({}, function (place) {
//             $scope.places = place.features;
//             $scope.loadSuccess = true;
//             $scope.loading = false;
//         });
//     }
// ]);