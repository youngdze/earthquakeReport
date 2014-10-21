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

        var updateData = function() {
            Place.loadList()
                .success(function(data, status, headers, config) {
//                    $log.log('load data successfully!');
                    $scope.places = data.features;
                    $scope.loadSuccess = true;
                    $scope.loading = false;
                    $timeout(function() {
                        $scope.loading = true;
                        updateData();
                    }, 30000);
                }).error(function() {
                    $log.error('load data failed, will reload in 10 seconds');
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