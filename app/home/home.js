/**
 * Created by congliu on 2/28/15.
 */
angular.module('myApp.home', ['ngRoute','firebase'])
    .controller('HomeCtrl', ['$scope','$rootScope','userSession', function($scope, $rootScope, userSession){
        console.log(userSession);
            $scope.name = userSession.name;

        console.log($scope.name);

    }])