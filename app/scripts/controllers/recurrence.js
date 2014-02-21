'use strict';




projectXCtrl.controller('RecurrenceCtrl', [ '$scope','$cookieStore', 'recurrenceResume', 'averageDistance','dailyRecurrence','dailyNew', 'dailyRecuNew', 'newInvoices', 'recuInvoices', function ($scope , $cookieStore, recurrenceResume, averageDistance, dailyRecurrence, dailyNew, dailyRecuNew, newInvoices, recuInvoices) {


 
 function fetchRecurrenceResume(){

   recurrenceResume.getResume()
   .success(function(response){

    var total = response.values.reduce(function(previousValue, currentValue, index, array){
        return previousValue + currentValue[1];
    },0);

    

     $scope.dataResumePercent=response.percent;
     var size =  response.values.length - Math.ceil(response.values.length*0.4);

     var array=[];
     for (var i = 0; i < size-1   ; i++) {
      var aux=[];
      aux.push(response.values[i][0]);
      aux.push(response.values[i][1]);
      aux.push(100/total * response.values[i][1]);
      array.push(aux);                  
     };
     for (var i = size ; i < response.values.length ; i++) {
      response.values[size-1][1]=response.values[size-1][1]+response.values[i][1]
     };

      response.values[size-1][0]=response.values[size-1][0].toString() + " o mas ";
      
      var aux=[];
      aux.push(response.values[size-1][0]);
      aux.push(response.values[size-1][1]);
      aux.push(100/total * response.values[size-1][1]);
      array.push(aux);

     
     
     //array.push(response.values[size-1])
    $scope.dataResumeValue=array;


   });

 }

 function fetchDataAvg(){

   averageDistance.getaverage()
   .success(function(response){

     var dta = [{color:"#428bca", key:"Distancia",values:[]}];
     dta[0].values = response.values;
     $scope.dataAvg=dta;



   });

 }

function fetchDataAvgTotal(){

   averageDistance.getaverageTotal()
   .success(function(response){

     $scope.dataAvgTotal=response.values;



   });

 }



 function fetchDataNvRMonthly(){

   dailyRecurrence.getMonthlyRecurrence()
   .success(function(response){

     var dta = [{color:"#428bca", key:"Visitas Recurrentes",values:[]}];
     
     dta[0].values = response.values;
     dailyNew.getMonthlyNew()
      .success(function(response){
        var dto = [{color:"#FFCC00",key:"Visitas Nuevas",values:[]}];
        dto[0].values = response.values;
        dailyRecuNew.getMonthlyRecuNew()

      .success(function(response){
       for (var i = 0; i < response.values.length; i++) {
          dta[0].values[i][1]=dta[0].values[i][1]+response.values[i][1];

       };

       

       for (var i = 0; i < dta[0].values.length; i++) {
         dta[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1]);
         dto[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1])
       };

      var output=  dto.concat(dta);
      

       
        //var aux =dta.concat(dto);
 
        $scope.dataMonthlyNvR=output;
        });
    });

   });

 }

 function fetchDataInvoNvsR(){

   newInvoices.getNewInvoices()
   .success(function(response){
                       //    console.log(response);
                       var dta = [{color:"#428bca", key:"Ventas por Visitas Nuevas",values:[]}];
                       dta[0].values = response.values;
                           //dta[0].key = response.key;


                           recuInvoices.getRecuInvoices()
                           .success(function(response){

                             var dto = [{color:"#FF0000",key:"Ventas por Visitas Recurrentes",values:[]}];
                             dto[0].values = response.values;
                           //dto[0].key = response.key;
                           //console.log(dta.concat(dto));
                           $scope.dataInvoNvsR=dta.concat(dto);
                          // console.log(dta.concat(dto));
                         });
                         });

 }






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
  
   return  '<h4 align="center">'  + x + '</h4>'  + '<h5 align="center">'  + y +" Visitas" +" / " + (e.point[2] != 0 ? ((100/e.point[2])*y).toFixed(2) : 0)+"%" +' </h5>'    
 }
};


if ($cookieStore.get("islogged")) {
fetchRecurrenceResume();
fetchDataAvg();
fetchDataAvgTotal();
fetchDataNvRMonthly();
fetchDataInvoNvsR();
};







     }]);