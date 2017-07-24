'use strict';

hrApp.controller('LocationEditController', ['$scope', '$http', '$routeParams', '$filter', '$location', 'LocationService',
    function($scope, $http, $routeParams, $filter, $location, LocationService) {

        $scope.requiredErrorMessage = 'Please fill out this field';

        LocationService.findOne($routeParams.locationId).then(function(res) {
            $scope.location = res.data;
        }, function(err) {
            console.log('An error occurred while finding location: ' + err.status);
        });

        /**
         * Reset location fields
         */
        $scope.reset = function() {
            $scope.location = {};
        };

        /**
         * Update a location
         * @param location - location to be updated
         */
        $scope.save = function(location) {
            LocationService.edit(location).then(function() {
                $location.url('/locationView/' + $scope.location.locationId);
            }, function(err) {
                console.log('An error occurred while editing location: ' + err.status);
            });
        };

    }]);