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
          'todayData':function(dailyStats){
              return dailyStats.promise;
           },
          'SalesData':function(graphSales){
              return graphSales.promise;
           },
          'RecurrencesData':function(graphRecurrences){
              return graphRecurrences.promise;
           },
          'SalesInvoicesData':function(graphSalesInvoices){
              return graphSalesInvoices.promise;
           },
          'AverageData':function(graphSalesHour){
              return graphSalesHour.promise;
           },
           'IdvNidData':function(graphIdNoId){
              return graphIdNoId.promise;
           },
           'IdvNidTotalData':function(graphIdNoIdTotal){
              return graphIdNoIdTotal.promise;
           },
           'AverageWeekData':function(graphSalesWeek){
              return graphSalesWeek.promise;
           }


         }
       
       
      });
    $routeProvider.when('/analytics/recurrence', 
      {
        templateUrl: 'views/recurrence.html', 
        controller: 'RecurrenceCtrl',
        resolve: {
          'recurrenceResume':function(resumeRecurrence){
              return resumeRecurrence.promise;
           },
          'avgDistanceData':function(graphAvgDistance){
              return graphAvgDistance.promise;
           },
          'VisitNewRecuData':function(graphVisitNewRecu){
              return graphVisitNewRecu.promise;
           },
          'RevenueNewRecuData':function(graphRevenueNewRecu){
              return graphRevenueNewRecu.promise;
           }
        }
      });


    $routeProvider.otherwise({
        redirectTo: '/'
      });
  });
