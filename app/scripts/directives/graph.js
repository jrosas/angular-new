'use strict';


projectXDir.directive('ltxGraph', [ 'graphSales', 'graphRecurrences', function (graphSales,graphRecurrences) {
  return {
    templateUrl: 'views/templates/ltxGraph.html',
    restrict: 'E',
    transclude: true,

    scope: {
      graphTitle:"@",
      graph:"@",
      data:"=",
      type:"="
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
        var type = "";
        if (scope.date.from!="" && scope.date.until!="" ){
          scope.date.from.setHours(0);
          scope.date.from.setMinutes(0);
          scope.date.from.setSeconds(0);
          scope.date.from.setMilliseconds(0);
          var from=Math.round(scope.date.from/1000)-(scope.date.from.getTimezoneOffset()*60);

          /*ojo*/
     //   scope.date.until=scope.date.until+2592000;
     /*ojo*/
     scope.date.until.setHours(0);
     scope.date.until.setMinutes(0);
     scope.date.until.setSeconds(0);
     scope.date.until.setMilliseconds(0);
     var until=Math.round(scope.date.until/1000)-(scope.date.until.getTimezoneOffset()*60);

     /*ojo*/
     if (scope.btnCal=="Mensual"){

      type="monthly";


      /*ojo*/
    }

  if (scope.btnCal==="Mensual") {
    scope.type="monthly";
   //   setTimeout(function() { }, 50);
    }else{
      scope.type="daily";
   //  setTimeout(function() { }, 50);
     }; 

   switch(scope.graph){

    case "sales":

   


      graphSales.updateDate(type,from,until);
      scope.data= graphSales.getData();

    break;

    case "recurrences":

    

      graphRecurrences.updateDate(type,from,until);
      scope.data= graphRecurrences.getData();

    break;
    default:
    console.log("Algo salio muy mal");

  };
  
  



      //scope.dataSales=scope.data;
    }else{

      alert("Debe colocar ambas fechas");
    }
  };


  scope.delete = function (){
      //scope.data=[];
      scope.type="daily";
      switch(scope.graph){

        case "sales":
  //  setTimeout(function() { }, 50);
          graphSales.default();
          scope.data= graphSales.getData();
      console.log(" graphTitle: " + scope.graphTitle + " graph: " + scope.graph + " data: "+ scope.data + " type: " +scope.type);     
    
        break;

        case "recurrences":
//setTimeout(function() { scope.type="daily";}, 1000);
          graphRecurrences.default();
          scope.data= graphRecurrences.getData();
       console.log(" graphTitle: " + scope.graphTitle + " graph: " + scope.graph + " data: "+ scope.data + " type: " +scope.type); 

        break;

        default:
        console.log("Algo salio muy mal");

      };
      console.log(" graphTitle: " + scope.graphTitle + " graph: " + scope.graph + " data: "+ scope.data + " type: " +scope.type); 

     // setTimeout(function() { scope.type="daily";}, 500);
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