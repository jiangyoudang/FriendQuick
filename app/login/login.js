'use strict';

angular.module('myApp.login', ['ngRoute','firebase'])


.controller('LoginCtrl', ['$scope','userSession', '$location', '$rootScope','$firebaseAuth',
        function($scope, userSession, $location, $rootScope, $firebaseAuth) {

        $scope.facebook_login = function(home){
            var ref = new Firebase("https://quickfriend.firebaseio.com");

            var auth = $firebaseAuth(ref);
            auth.$authWithOAuthPopup("facebook").then(function(authData){
                console.log('Loggin', authData.uid);
                userSession.uid = authData.uid;
                userSession.name = authData.facebook.displayName;
                $location.path(home);
            });
            //ref.authWithOAuthPopup("facebook", function(error, authData) {
            //
            //    if (error) {
            //        console.log("Login Failed!", error);
            //    } else {
            //        console.log("Authenticated successfully with payload:", authData);
            //        $rootScope.uid = authData.uid;
            //        $rootScope.display_name = authData.facebook.displayName;
            //        //window.location.href = "home/home.html"
            //        //console.log(authData.uid);
            //        //console.log($location.path());
            //        //$rootScope.loggedUser = {'uid':authData.uid,'name':authData.facebook.dispalyName }
            //    }
            //
            //
            //});
            //
            ////if (userSession){
            ////    $location.path(home);
            ////}
            //
            ////console.log($rootScope);
            //$location.path(home);

        };






//var loginObj = $firebaseSimpleLogin(firebaseObj);
//
//  $scope.user = {};
//  $scope.SignIn = function(e){
//     e.preventDefault();
//     var username = $scope.user.email;
//     var password = $scope.user.password;
//     loginObj.$login('password', {
//                email: username,
//                password: password
//            })
//            .then(function(user) {
//                //Success callback
//                console.log('Authentication successful');
//            }, function(error) {
//                //Failure callback
//                console.log('Authentication failure');
//            });
//  }



}]);
