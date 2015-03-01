'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
    'myApp.home'
]).
config(['$routeProvider', function($routeProvider) {

    $routeProvider

      .when('/home', {
          templateUrl: 'home/home.html',
          controller: 'HomeCtrl'
  })
      .when('/login', {
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl'
  }).
      otherwise({redirectTo: '/login'});

}]).value('userSession', {})

//
//.run(function( $rootScope , $location){
//
//        $rootScope.$on( "$routeChangeStart", function (event, next, current) {
//                if ($rootScope.loggeduser == null){
//                    // no logged user, we should be going to #login
//                    if (next.templateUrl == 'login/login.html'){
//
//                    }else{
//                        $location.path("/login");
//                    }
//                }
//            }
//
//        );
//
//    })

;
