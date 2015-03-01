/**
 * Created by congliu on 2/28/15.
 */
angular.module('myApp.home', ['ngRoute','firebase'])
    .controller('HomeCtrl', ['$scope','$rootScope', function($scope, $rootScope){
        console.log($rootScope);
            $scope.name = $rootScope.display_name;

        console.log($scope.name);

    }])