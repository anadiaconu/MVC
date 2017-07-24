'use strict';

hrApp.controller('JobEditController', ['$scope', '$location', '$routeParams', '$http', 'JobService',
    function($scope, $location, $routeParams, $http, JobService) {

        $scope.requiredErrorMessage = 'Please fill out this field';

        JobService.findOne($routeParams.jobId)
            .then(function(res) {
                $scope.job = res.data;
            }, function(err) {
                console.log('An error occurred while finding job: ' + err.status);
            });

        /**
         * Reset job fields
         */
        $scope.reset = function() {
            $scope.job = {};
        };

        /**
         * Update a job
         * @param job - job to be updated
         */
        $scope.save = function(job) {
            JobService.edit(job).then(function() {
                $location.url('/jobView/' + $scope.job.jobId);
            }, function(err) {
                console.log('An error occurred while editing job: ' + err.status);
            });
        };
}]);