'use strict';

var projectXApp = angular.module('xdataLealtagApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'mgcrea.ngStrap',
  'nvd3ChartDirectives',
  'projectXApp.controllers',
  'projectXApp.services',
  'projectXApp.directives'
]);

var projectXCtrl = angular.module('projectXApp.controllers',[]);

var projectXServices = angular.module('projectXApp.services',[]);

var projectXDir = angular.module('projectXApp.directives',[]);

projectXApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
      });
    $routeProvider.when('/login', 
      {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
     
      });
    $routeProvider.when('/analytics/main', 
      {
        templateUrl: 'views/main.html', 
        controller: 'MainCtrl',
        resolve:{
          'SalesData':function(graphSales){
              return graphSales.promise;
           }
         }
       
       
      });
    $routeProvider.when('/analytics/recurrence', 
      {
        templateUrl: 'views/recurrence.html', 
        controller: 'RecurrenceCtrl'
      });


    $routeProvider.otherwise({
        redirectTo: '/'
      });
  });
