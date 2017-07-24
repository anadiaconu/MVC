'use strict';

hrApp.controller('LocationListController', ['$scope', '$http', '$route', '$location', 'LocationService',
    function($scope, $http, $route, $location, LocationService) {

        LocationService.findAll().then(function(res) {
            $scope.locations = res.data;
        }, function(err) {
            console.log('An error occurred while finding all locations: ' + err.status);
        });

        /**
         * Navigate to view page of a location
         * @param locationId - identifier of the location to be viewed
         */
        $scope.view = function(locationId) {
            $location.url('/locationView/' + locationId);
        };

        /**
         * Navigate to edit page of an location
         * @param locationId - identifier of the location to be edited
         */
        $scope.edit = function(locationId) {
            $location.url('/locationEdit/' + locationId);
        };

        /**
         * Delete an location
         * @param locationId - identifier of the location to be deleted
         */
        $scope.delete = function(locationId) {
            LocationService.delete(locationId).then(function() {
                alert('Location has been deleted successfully');
                $route.reload();
            }, function(err) {
                console.log('An error occurred while deleting location: ' + err.status);
            });
        };

    }]);