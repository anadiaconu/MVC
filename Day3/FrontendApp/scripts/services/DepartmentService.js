'use strict';

hrApp.service('DepartmentService', ['$http', 'CommonResourcesFactory', function($http, CommonResourcesFactory) {
    return {
        findAll: function() {
            return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                .success(function(data) {
                    return data;
                }).error(function(data) {
                    return data;
                });
        },
        findOne: function(departmentId) {
            return $http.get(CommonResourcesFactory.findOneDepartmentUrl, {params: {'departmentId': departmentId}})
                .success(function(data) {
                    return data;
                })
                .error(function(data) {
                    return data;
                });
        },
        add: function(department) {
            return $http.post(CommonResourcesFactory.addDepartmentUrl, department)
                .success(function(data) {
                    return data;
                })
                .error(function(data) {
                    return data;
                });
        },
        edit: function(department) {
            return $http.put(CommonResourcesFactory.editDepartmentUrl, department)
                .success(function(data) {
                    return data;
                })
                .error(function(data) {
                    return data;
                });
        },
        delete: function(departmentId) {
            return $http.delete(CommonResourcesFactory.deleteDepartmentUrl,{params: {'departmentId': departmentId}})
                .success(function(data) {
                    return data;
                })
                .error(function(data) {
                    return data;
                });
        }
    }
}]);