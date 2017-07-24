'use strict';

hrApp.controller('JobViewController', ['$scope', '$routeParams', '$location', 'JobService',
    function($scope, $routeParams, $location, JobService) {

        /**
         * Retrieve a job
         * @param jobId - identifier of the job to be retrieved
         */
        JobService.findOne($routeParams.jobId)
            .then(function(res) {
                $scope.job = res.data;
            }, function(err) {
                console.log('An error occurred while finding the employee: ' + err.status);
            });

        /**
         * Navigate back to job list page
         */
        $scope.back = function() {
            $location.url('/jobList');
        };

    }]);