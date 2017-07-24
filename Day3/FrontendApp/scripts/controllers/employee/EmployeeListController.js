'use strict';

hrApp.controller('EmployeeListController', ['$scope', '$http', '$route', '$location', 'EmployeeService',
    function($scope, $http, $route, $location, EmployeeService) {

        EmployeeService.findAll().then(function(res) {
            $scope.employees = res.data;
        }, function(err) {
            console.log('An error occurred while finding all employees: ' + err.status);
        });

        /**
         * Navigate to view page of an employee
         * @param employeeId - identifier of the employee to be viewed
         */
        $scope.view = function(employeeId) {
            $location.url('/employeeView/' + employeeId);
        };

        /**
         * Navigate to edit page of an employee
         * @param employeeId - identifier of the employee to be edited
         */
        $scope.edit = function(employeeId) {
            $location.url('/employeeEdit/' + employeeId);
        };

        /**
         * Delete an employee
         * @param employeeId - identifier of the employee to be deleted
         */
        $scope.delete = function(employeeId) {
            EmployeeService.delete(employeeId).then(function() {
                alert('Employee has been deleted successfully');
                $route.reload();
            }, function(err) {
                console.log('An error occurred while deleting employee: ' + err.status);
            });
        }
    }]);