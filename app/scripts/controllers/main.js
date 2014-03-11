'use strict';


projectXCtrl.controller('MainCtrl', [ '$scope', '$cookieStore', 'graphSales', 'graphRecurrences', 'graphSalesHour', 'graphIdNoId', 'graphSalesInvoices' , 'graphIdNoIdTotal' ,'dailyStats',  'graphSalesWeek',
                            function ($scope, $cookieStore , graphSales, graphRecurrences, graphSalesHour, graphIdNoId, graphSalesInvoices, graphIdNoIdTotal, dailyStats, graphSalesWeek) {

$scope.data={
  sales : "" ,
  recurrences : "",
  salesInvoices : "",
  averagePerHour : "",
  idNid : "",
  idNidTotal : "",
  today : {
          sales : "",
          id : "",
          nid : "",
          new : "",
          recurrences : "",
          recunew : "",
          },
  averagePerWeek : "",

};

$scope.type={
  sales : "daily" ,
  recurrences : "daily",
  salesInvoices : "monthly",
  averagePerHour : "hour",
  idNid : "daily",
  idNidTotal : "hour",
  averagePerWeek : "hour",
  
};

var colorArray = ['#428bca', '#FF0000' , '#FF0000','#FF0000','#FF0000','#FF0000','#FF0000','#FF0000','#FF0000','#FF0000' ];
$scope.colorFunction = function() {
 return function(d, i) {
  return colorArray[i];
}
};


$scope.toolTipContentSalesFunction = function(){
 return function(key, x, y, e, graph) {

   if (y==0) {return "" };
   return  '<h4 align="center">'  + x + '</h4>' + '</br>' + '<h5 align="center">'  + y + '</h5>'    
 }
};

$scope.toolTipContentNvRFunction = function(){
 return function(key, x, y, e, graph) {
   return  '<h4 align="center">'  + x + '</h4>' + '</br>' + '<h5 align="center">'  + y +" Clientes" + ' </h5>'    
 }
};

$scope.toolTipContentAvgFunction = function(){
 return function(key, x, y, e, graph) {
  var aux=e.point[2]+e.point[3];
   return  '<h4 align="center">'+ key+": " + y +'</h4>'+'<h5 align="center" style="color:#428bca" >'  +"Facturas Identificadas: " + e.point[2] + " / "+ (aux==0 ? 0 : ((e.point[2]/aux)*100).toFixed(2))+"%" +'</h5>' + '<h5 align="center" style="color:#FF0000">'  + "Facturas no Identificadas: " + e.point[3]+ " / "+ (aux==0 ? 0 :((e.point[3]/aux)*100).toFixed(2))+"%" +' </h5>'  
 }
};

$scope.toolTipContentAvgFacFunction = function(){
 return function(key, x, y, e, graph) {
   return  '<h4 align="center">'  + y + " Facturas a las" + x + "h" + '</h4>' 
 }
};
$scope.toolTipContentFunction = function(){
 return function(key, x, y, e, graph) {

   if (y==0) {return "" };
   return  '<h4 align="center">' +  y + " Clientes" + '</h4>' 
 }
};

$scope.toolTipFactFunction = function(){
 return function(key, x, y, e, graph) {

   
   return  '<h4 align="center">' + Math.round(parseFloat(x.replace(",","")))+ " Facturas" + '</h4>' 
 }
};

$scope.toolTipContentIdvNidFunction = function(){
 return function(key, x, y, e, graph) {
   return  '<h4 align="center">'  + x + '</h4>' + '</br>' + '<h5 align="center">'  + y +" Facturas" + ' </h5>'    
 }
};

$scope.xAxisTickMonthlyFormat = function(){
  return function(d){
            //var  = d3.time.format("%c");
            //var format = d3.time.format.utc('%a, %d-%m-%y')(new Date(d));
            var date= (new Date(d));
            var day= date.getUTCMonth();
            var x;
              switch (day)
              {
              case 0:
                x="Ene";
                break;
              case 1:
                x="Feb";
                break;
              case 2:
                x="Mar";
                break;
              case 3:
                x="Abr";
                break;
              case 4:
                x="May";
                break;
              case 5:
                x="Jun";
                break;
              case 6:
                x="Jul";
                break;
                case 7:
                x="Ago";
                break;
                case 8:
                x="Sep";
                break;
                case 9:
                x="Oct";
                break;
                case 10:
                x="Nov";
                break;
                case 11:
                x="Dic";
                break;

              }
             return x+d3.time.format.utc(', %Y')(date)
          }
        };

$scope.xAxisTickFormat = function(){
  return function(d){
            //var  = d3.time.format("%c");
            //var format = d3.time.format.utc('%a, %d-%m-%y')(new Date(d));
            var date= (new Date(d));
            var day= date.getUTCDay();
            var x;
              switch (day)
              {
              case 0:
                x="Dom";
                break;
              case 1:
                x="Lun";
                break;
              case 2:
                x="Mar";
                break;
              case 3:
                x="Mie";
                break;
              case 4:
                x="Jue";
                break;
              case 5:
                x="Vie";
                break;
              case 6:
                x="Sab";
                break;
              }
             return x+d3.time.format.utc(', %d-%m-%y')(date)
          }
        };

        $scope.y1AxisTickFormat = function(){
          return function(d){
            return "Bs. "+d3.format('.2f')(d);
          }
        };

        $scope.y2AxisTickFormat = function(){
          return function(d){
            return  d3.format('d')(d);
          }
        };

        $scope.xFunction = function(){
         return function(d) {
           return d.key;
         }
       };

       $scope.yFunction = function(){
         return function(d) {
           return d.y;
         }
       };

      $scope.yFunctionAvg = function(){
         return function(d) {
          //console.log(d[1]);
          return d[1];
         }
       };

if ($cookieStore.get("islogged")) {
  $scope.data.today = dailyStats.getData();
  $scope.data.sales= graphSales.getData();
  $scope.data.recurrences= graphRecurrences.getData();
  $scope.data.salesInvoices= graphSalesInvoices.getData();
  $scope.data.averagePerHour = graphSalesHour.getData();
  $scope.data.idNid = graphIdNoId.getData();
  $scope.data.idNidTotal = graphIdNoIdTotal.getData();
  $scope.data.averagePerWeek = graphSalesWeek.getData();
};



     }]);