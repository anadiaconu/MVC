'use strict';

hrApp.service('EmployeeService', ['$http', 'CommonResourcesFactory', function($http, CommonResourcesFactory) {
        return {
            findAll: function() {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function(data) {
                        return data;
                    }).error(function(data) {
                        return data;
                    });
            },
            findOne: function(employeeId) {
                return $http.get(
                    CommonResourcesFactory.findOneEmployeeUrl, {params: {'employeeId': employeeId}}
                )
                    .success(function(data) {
                        return data;
                    })
                    .error(function(data) {
                        return data;
                    });
            },
            add: function(employee) {
                return $http.post(CommonResourcesFactory.addEmployeeUrl, employee)
                    .success(function(data) {
                        return data;
                    })
                    .error(function(data) {
                        return data;
                    });
            },
            edit: function(employee) {
                return $http.put(CommonResourcesFactory.editEmployeeUrl, employee)
                    .success(function(data) {
                        return data;
                    })
                    .error(function(data) {
                        return data;
                    });
            },
            delete: function(employeeId) {
                return $http.delete(CommonResourcesFactory.deleteEmployeeUrl, {params: {'employeeId': employeeId}})
                    .success(function(data) {
                        return data;
                    })
                    .error(function(data) {
                        return data;
                    });
            }
        }
    }]
);