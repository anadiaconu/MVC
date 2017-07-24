var hrApp = angular.module('hrApp', ['ngRoute']);

hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/employeeList', {
                templateUrl: 'views/employee/employeeList.html',
                controller: 'EmployeeListController'
            })
            .when('/employeeView/:employeeId', {
                templateUrl: 'views/employee/employeeView.html',
                controller: 'EmployeeViewController'
            })
            .when('/employeeAdd', {
                templateUrl: 'views/employee/employeeAdd.html',
                controller: 'EmployeeAddController'
            })
            .when('/employeeEdit/:employeeId', {
                templateUrl: 'views/employee/employeeEdit.html',
                controller: 'EmployeeEditController'
            })
            .when('/jobList', {
                templateUrl: 'views/job/jobList.html',
                controller: 'JobListController'
            })
            .when('/jobAdd', {
                templateUrl: 'views/job/jobAdd.html',
                controller: 'JobAddController'
            })
            .when('/jobView/:jobId', {
                templateUrl: 'views/job/jobView.html',
                controller: 'JobViewController'
            })
            .when('/jobEdit/:jobId', {
                templateUrl: 'views/job/jobEdit.html',
                controller: 'JobEditController'
            })
            .when('/departmentList', {
                templateUrl: 'views/department/departmentList.html',
                controller: 'DepartmentListController'
            })
            .when('/departmentAdd', {
                templateUrl: 'views/department/departmentAdd.html',
                controller: 'DepartmentAddController'
            })
            .when('/departmentView/:departmentId', {
                templateUrl: 'views/department/departmentView.html',
                controller: 'DepartmentViewController'
            })
            .when('/departmentEdit/:departmentId', {
                templateUrl: 'views/department/departmentEdit.html',
                controller: 'DepartmentEditController'
            })
            .when('/locationList', {
                templateUrl: 'views/location/locationList.html',
                controller: 'LocationListController'
            })
            .when('/locationAdd', {
                templateUrl: 'views/location/locationAdd.html',
                controller: 'LocationAddController'
            })
            .when('/locationView/:locationId', {
                templateUrl: 'views/location/locationView.html',
                controller: 'LocationViewController'
            })
            .when('/locationEdit/:locationId', {
                templateUrl: 'views/location/locationEdit.html',
                controller: 'LocationEditController'
            })
            .otherwise({
                templateUrl: 'views/main.html',
                controller: 'MainController'
            });
    }]).run(['$rootScope',
        function($rootScope) {
            // TODO
        }
    ]);