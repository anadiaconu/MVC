'use strict';

hrApp.controller('MainController', ['$scope', function($scope) {

    $scope.title = 'HR Application';
    $scope.description = "Web application for employee management";

    $scope.descriptionShow = false;
    $scope.toggleDescription= function() {
        $scope.descriptionShow = !$scope.descriptionShow;
    };

}]);
