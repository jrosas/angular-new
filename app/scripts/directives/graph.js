'use strict';


projectXDir.directive('ltxGraph', function () {
    return {
      templateUrl: 'views/templates/ltxGraph.html',
      restrict: 'E',
      transclude: true,
      scope: {
      	graphTitle:"@",
      	untilDate:"@",
      },
      link : function link (scope, element, attrs) {
      	console.log(scope);
      	scope.$watch('fromDate', function(){
      		console.log("wssa");
      		console.log(scope.fromDate);
      	});
      	console.log(attrs.patria);
      	// body...
      }
     
    };
  });
