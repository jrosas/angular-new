'use strict';


projectXDir.directive('ltxGraph', [ 'graphSales', function (graphSales) {
    return {
      templateUrl: 'views/templates/ltxGraph.html',
      restrict: 'E',
      transclude: true,
        
      scope: {
        graphTitle:"@",
        data:"=",
      },

      link : function postLink (scope, element, attrs) {


        scope.btnCal="Diario";
        scope.date={from:"",
      until:"",};


    
        scope.switch=function(){
          if (scope.btnCal==="Diario") {
           
            scope.btnCal="Mensual";
           
          } else{
           
            scope.btnCal="Diario";
          };
        };
    
        
    scope.refresh = function (){
graphSales.updateDate(null,null);
scope.data= graphSales.getData();
      if (scope.date.from!="" ){
        scope.date.from.setHours(0);
        scope.date.from.setMinutes(0);
        scope.date.from.setSeconds(0);
        scope.date.from.setMilliseconds(0);
        var from=Math.round(scope.date.from/1000)-(scope.date.from.getTimezoneOffset()*60);

console.log("antes");
console.log(from);

//graphSales.clearData();
console.log('desps');
console.log(scope);
      //scope.dataSales=scope.data;
      }
    };
    

    scope.delete = function (){
      scope.data=[];
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