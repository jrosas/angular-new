 'use strict';




projectXCtrl.controller('RecurrenceCtrl', [ '$scope','$cookieStore','resumeRecurrence' ,'graphAvgDistance', 'graphVisitNewRecu', 'graphRevenueNewRecu' ,
                                    function ($scope , $cookieStore, resumeRecurrence, graphAvgDistance, graphVisitNewRecu, graphRevenueNewRecu) {

$scope.data = {
  resume : {
    percent : "",
    data : "",
  },
  distanceVisit : {
    data : "",
    avg : "",
  },
  visitNewRecu : "",
  revenueNewRecu : "",
};

$scope.type = {
  distanceVisit : "hour",
  visitNewRecu : "monthly",
  revenueNewRecu : "monthly"
},



 $scope.toolTipContentAvgFunction = function(){
 return function(key, x, y, e, graph) {
  //console.log(y);
   return  '<h5 align="center">'  + y + " días entre la "+ (x-1) +"º y la "+ x + "º visita." +'</h5>'
 }
};

 $scope.IntAxisTickFormat = function(){
          return function(d){
            
            return  d3.format('.2f')(d);
          }
        };

$scope.y1AxisTickFormat = function(){
          return function(d){
            return "Bs. "+d3.format('.2f')(d);
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

        $scope.xAxisDayTickFormat = function(){
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


        $scope.y2AxisTickFormat = function(){
          return function(d){
            return  d3.format('d')(d);
          }
        };

$scope.toolTipContentNvRFunction = function(){
 return function(key, x, y, e, graph) {
  
   return  '<h4 align="center">'  + x + '</h4>'  + '<h5 align="center">'  + y +" Visitas" +" / " +(e.point[2] != 0 ? ((100/e.point[2])*y).toFixed(2) : 0)+"%" +' </h5>'    
 }
};


$scope.toolTipContentRevenueNvRFunction = function(){
 return function(key, x, y, e, graph) {

   return  '<h4 align="center">'  + x + '</h4>'  + '<h5 align="center">'  + y +" / " +(e.point[2] != 0 ? ((100/e.point[2])*parseFloat(y.substring(3))).toFixed(2) : 0)+"%" +' </h5>'
 }
};




if ($cookieStore.get("islogged")) {
 $scope.data.resume=resumeRecurrence.getData();
 $scope.data.distanceVisit=graphAvgDistance.getData();
 $scope.data.visitNewRecu=graphVisitNewRecu.getData();
 $scope.data.revenueNewRecu=graphRevenueNewRecu.getData();

};







     }]);