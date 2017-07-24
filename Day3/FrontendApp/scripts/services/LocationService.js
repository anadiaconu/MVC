'use strict';

hrApp.service('LocationService', ['$http', 'CommonResourcesFactory', function($http, CommonResourcesFactory) {
    return {
        findAll: function() {
            return $http.get(CommonResourcesFactory.findAllLocationsUrl)
                .success(function(data) {
                    return data;
                }).error(function(data) {
                    return data;
                });
        },
        findOne: function(locationId) {
            return $http.get(CommonResourcesFactory.findOneLocationUrl, {params: {'locationId': locationId}})
                .success(function(data) {
                    return data;
                }).error(function(data) {
                    return data;
                });
        },
        add: function(location) {
            return $http.post(CommonResourcesFactory.addLocationUrl, location)
                .success(function(data) {
                    return data;
                })
                .error(function(data) {
                    return data;
                });
        },
        edit: function(location) {
            return $http.put(CommonResourcesFactory.editLocationUrl, location)
                .success(function(data) {
                    return data;
                })
                .error(function(data) {
                    return data;
                });
        },
        delete: function(locationId) {
            return $http.delete(CommonResourcesFactory.deleteLocationUrl, {params: {'locationId': locationId}})
                .success(function(data) {
                    return data;
                })
                .error(function(data) {
                    return data;
                });
        }
    }
}]);