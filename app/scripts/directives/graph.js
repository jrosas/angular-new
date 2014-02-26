'use strict';


projectXDir.directive('ltxGraph', [ 'Sales', function (Sales) {
    return {
      templateUrl: 'views/templates/ltxGraph.html',
      restrict: 'E',
      transclude: true,
        
      scope: {
        graphTitle:"@",
        data:"=",
      },

      link : function postLink (scope, element, attrs) {
      console.log("afuera");
console.log(scope);
        scope.btnCal="Diario";
                  
        scope.switch=function(){
          if (scope.btnCal==="Diario") {
           
            scope.btnCal="Mensual";
           
          } else{
           
            scope.btnCal="Diario";
          };
        };
    
        
    scope.refresh = function (){
console.log("antes");
console.log(scope);
//scope.data="";
console.log('desps');
console.log(scope);
      //scope.dataSales=scope.data;
      
    };
    

    scope.delete = function (){
      scope.btnCal="Diario";
      scope.date={from:"",
      until:"",};

    };

        /*
        scope.$watch("date.from",function () {
          console.log(scope.date);
          function fetchDataIvs(){

           Sales.getSales()
           .success(function(response){

           var dta = [{color:"#428bca", key:"Ventas",values:[]}];
            dta[0].values = response.values;
          //  $scope.dataSales=dta;
          console.log(dta);



            });

          }
          fetchDataIvs();
        });
*/
    //    console.log(element);
      
        // body...
      }
     
    };
  }]);