'use strict';

hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'EmployeeService',
    function($scope, $http, $routeParams, $location, EmployeeService) {

        /**
         * Retrieve an employee
         * @param employeeId - identifier of the employee to be retrieved
         */
        EmployeeService.findOne($routeParams.employeeId)
            .then(function(res) {
                $scope.employee = res.data;
            }, function(err) {
                console.log('An error occurred while finding the employee: ' + err.status);
            });

        /**
         * Navigate back to employee list page
         */
        $scope.back = function() {
            $location.url('/employeeList');
        }

    }]);