'use strict';

hrApp.controller('LocationViewController', ['$scope', '$http', '$routeParams', '$location', 'LocationService',
    function($scope, $http, $routeParams, $location, LocationService) {

        /**
         * Retrieve a location
         * @param locationId - identifier of the location to be retrieved
         */
        LocationService.findOne($routeParams.locationId)
            .then(function(res) {
                $scope.location = res.data;
            }, function(err) {
                console.log('An error occurred while finding the location: ' + err.status);
            });

        /**
         * Navigate back to location list page
         */
        $scope.back = function() {
            $location.url('/locationList');
        };

    }]);