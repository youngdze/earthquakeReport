'use strict';

var quakeAppServices = angular.module('quakeAppServices', []);

quakeAppServices.factory('Place', ['$http',
    function ($http) {
        return {
            loadList: function () {
                var targetUrl = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';
                return $http({
                    method: 'GET',
                    url: 'data/getData.php',
                    params: {
                        target: targetUrl
                    }
                });
            },
            loadDetail: function () {
                return $resource('data/getData.php');
            }
        };
    }
]);

quakeAppServices.service('Time', [
    function () {
        this.getTime = function () {
            var d = new Date();
            return d.getTime();
        }
    }
]);

quakeAppServices.service('PlaceNew', ['$resource',
    function ($resource) {
        var dataUrl = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

        return $resource('data/getData.php?target=:targetUrl', {}, {
            query: {
                method: 'GET',
                params: {
                    targetUrl: dataUrl
                },
                isArray: true
            }
        });
    }
]);