'use strict';

projectXDir.directive('ltxHeader', ['$location', function ($location) {
    return {
      templateUrl: 'views/templates/ltxHeader.html',
      restrict: 'E',
      scope:{},
      link: function postLink(scope, element, attrs) {
        //element.text('this is the headerbar directive');
        
        scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
      };

      }
    };
  }]);



/*projectXDir.directive('ltxHeader', ['$location', function ($location) {
    return {
      templateUrl: 'views/templates/ltxHeader.html',
      restrict: 'E',
     
      link: function postLink(scope, element, attrs) {
        //element.text('this is the headerbar directive');
        scope.title = function (item) {
        switch ($location.path()){

          case "/analytics/main" :
          return "Principal";
          break;
          case "/analytics/recurrence" :
          return "Recurrencias";
          break;
          case "/analytics/product" :
          return "Productos";
          break;
          case "/analytics/refund" :
          return "Devoluciones";
          break;
          default:
          return "Gráficas" ;
        };
        
      };

        scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    	};

      }
    };
  }]);
*/