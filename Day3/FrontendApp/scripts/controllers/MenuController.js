'use strict';

hrApp.controller('MenuController', ['$scope', '$interval', 'EmployeeActionsService', 'JobActionsService', 'DepartmentActionsService', 'LocationActionsService',
    function($scope, $interval, EmployeeActionsService, JobActionsService, DepartmentActionsService, LocationActionsService) {

        $scope.employeeActionList = EmployeeActionsService;
        $scope.jobActionList = JobActionsService;
        $scope.departmentActionList = DepartmentActionsService;
        $scope.locationActionList = LocationActionsService;

        $interval(function() {
            $scope.currentDateTime = new Date();
        }, 1000);

    }]);
