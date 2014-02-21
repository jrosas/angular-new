'use strict';



projectXDir.directive('ltxDaily', ['$location', function ($location) {
    return {
      templateUrl: 'views/templates/ltxDailyStats.html',
      restrict: 'E',
      
    };
  }]);