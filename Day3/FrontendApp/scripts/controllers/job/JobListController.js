'use strict';

hrApp.controller('JobListController', ['$scope', '$http', '$route', '$location', 'JobService',
    function($scope, $http, $route, $location, JobService) {

        JobService.findAll().then(function(res) {
            $scope.jobs = res.data;
        }, function(err) {
            console.log('An error occurred while finding all jobs: ' + err.status);
        });

        /**
         * Navigate to view page of a job
         * @param jobId - identifier of the job to be viewed
         */
        $scope.view = function(jobId) {
            $location.url('/jobView/' + jobId);
        };

        /**
         * Navigate to edit page of a job
         * @param jobId - identifier of the job to be edited
         */
        $scope.edit = function(jobId) {
            $location.url('/jobEdit/' + jobId);
        };

        /**
         * Delete a job
         * @param jobId - identifier of the job to be deleted
         */
        $scope.delete = function(jobId) {
            JobService.delete(jobId).then(function() {
                alert('Job has been deleted successfully');
                $route.reload();
            }, function(err) {
                console.log('An error occurred while deleting job: ' + err.status);
            });
        };
}]);