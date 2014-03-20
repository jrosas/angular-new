'use strict';


projectXDir.directive('ltxGraph', [ 'graphSales', 'graphRecurrences', 'graphSalesHour', 'graphIdNoId', 'graphSalesInvoices', 'graphIdNoIdTotal' , 'graphAvgDistance', 'graphVisitNewRecu', 'graphSalesWeek', 'graphRevenueNewRecu', 'tableProducts',
                           function (graphSales,graphRecurrences,graphSalesHour,graphIdNoId,graphSalesInvoices,graphIdNoIdTotal,graphAvgDistance,graphVisitNewRecu,graphSalesWeek, graphRevenueNewRecu,tableProducts) {
  return {
    templateUrl: 'views/templates/ltxGraph.html',
    restrict: 'E',
    transclude: true,

    scope: {
      graphTitle:"@",
      graph:"@",
      data:"=",
      type:"=",
      funct:"&"
    },

    link : function postLink (scope, element, attrs) {




  


    if (scope.type==='monthly'){
      scope.btnCal="Mensual";
        }else{
      scope.btnCal="Diario";
      }

      scope.date={from:"",
      until:"",};



    scope.$watch('date.until',function (newVal, oldVal) {
      if(newVal){
        if (scope.btnCal==='Mensual'){
          scope.date.until= new Date(newVal.getFullYear(),newVal.getMonth() + 1, 0);
        
        }
      }
    },true);

      scope.switch=function(){
        if (scope.type != "hour"){

          if (scope.btnCal==="Diario") {

            scope.btnCal="Mensual";
           // scope.type="monthly";

          } else{

            scope.btnCal="Diario";
           // scope.type="daily";
          };

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
     var until=(Math.round(scope.date.until/1000)-(scope.date.until.getTimezoneOffset()*60))+86399;



if (scope.type!="hour") {
  if (scope.btnCal==="Mensual") {
    scope.type="monthly";
    type="monthly";


   //   setTimeout(function() { }, 50);
    }else{
      scope.type="daily";
   //  setTimeout(function() { }, 50);
     }; 
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
    case "averageSalesHour":

    

      graphSalesHour.updateDate(type,from,until);
      scope.data= graphSalesHour.getData();

    break;
    case "idNid":

    

      graphIdNoId.updateDate(type,from,until);
      scope.data= graphIdNoId.getData();

    break;
    case "salesInvoices":

    

      graphSalesInvoices.updateDate(type,from,until);
      scope.data= graphSalesInvoices.getData();

    break;
    case "idNidTotal":

    

      graphIdNoIdTotal.updateDate(type,from,until);
      scope.data= graphIdNoIdTotal.getData();

    break;

    case "distanceVisit":

    

      graphAvgDistance.updateDate(type,from,until);
      scope.data= graphAvgDistance.getData();

    break;

    case "visitNewRecu":

    

      graphVisitNewRecu.updateDate(type,from,until);
      scope.data= graphVisitNewRecu.getData();

    break;

    case "averageSalesWeek":

    

      graphSalesWeek.updateDate(type,from,until);
      scope.data= graphSalesWeek.getData();

    break;

    case "revenueNewRecu":

    

      graphRevenueNewRecu.updateDate(type,from,until);
      scope.data= graphRevenueNewRecu.getData();

    break;
    case "productsTable":

    

      tableProducts.updateDate(type,from,until);
      scope.data= tableProducts.getData();

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
      
      switch(scope.graph){

        case "sales":
  //  setTimeout(function() { }, 50);
          graphSales.default();
          scope.data= graphSales.getData();
          scope.btnCal="Diario";
          scope.type="daily";
      
        break;

        case "recurrences":
//setTimeout(function() { scope.type="daily";}, 1000);
          graphRecurrences.default();
          scope.data= graphRecurrences.getData();
          scope.btnCal="Diario";
          scope.type="daily";
       
        break;
        case "averageSalesHour":

    

          graphSalesHour.default();
          scope.data= graphSalesHour.getData();
          scope.btnCal="Diario";
          scope.type="hour";

        break;
        case "idNid":

    

          graphIdNoId.default();
          scope.data= graphIdNoId.getData();
          scope.btnCal="Diario";
          scope.type="daily";

        break;
        case "salesInvoices":

    

          graphSalesInvoices.default();
          scope.data= graphSalesInvoices.getData();
          scope.btnCal="Mensual";
          scope.type="monthly";
        break;
        case "idNidTotal":

    

          graphIdNoIdTotal.default();
          scope.data= graphIdNoIdTotal.getData();
          scope.btnCal="Diario";
          scope.type="hour";
        break;

        case "distanceVisit":

    

          graphAvgDistance.default();
          scope.data= graphAvgDistance.getData();
          scope.btnCal="Diario";
          scope.type="hour";
        break;

          case "visitNewRecu":

    

          graphVisitNewRecu.default();
          scope.data= graphVisitNewRecu.getData();
          scope.btnCal="Mensual";
          scope.type="monthly";
        break;

          case "averageSalesWeek":

    

          graphSalesWeek.default();
          scope.data= graphSalesWeek.getData();
          scope.btnCal="Diario";
          scope.type="hour";

        break;

        case "revenueNewRecu":

    

          graphRevenueNewRecu.default();
          scope.data= graphRevenueNewRecu.getData();
          scope.btnCal="Mensual";
          scope.type="monthly";
        break;

        case "productsTable":
    
         
          tableProducts.default();
          scope.data= tableProducts.getData();
          scope.btnCal="Diario";
          scope.type="hour";
        break;


        default:
        console.log("Algo salio muy mal");

      };
      
     // setTimeout(function() { scope.type="daily";}, 500);
  
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