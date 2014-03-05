'use strict';

projectXCtrl.controller('MainCtrl', [ '$scope', 'graphSales', 'graphRecurrences', 'Invoices', 'Sales', 'Nidsales', 'Idsales','dailyRecurrence','dailyNew', 'dailyRecuNew', 'DailyStats','AverageStats', '$cookieStore', function ($scope, graphSales, graphRecurrences, Invoices, Sales, Nidsales, Idsales ,dailyRecurrence, dailyNew, dailyRecuNew, DailyStats, AverageStats, $cookieStore) {

$scope.data={
  sales : "" ,
  recurrences : "",
   
};

$scope.type={
  sales : "daily" ,
   
};
$scope.data.sales= graphSales.getData();
$scope.data.recurrences= graphRecurrences.getData();
console.log($scope.data.recurrences);
//setTimeout(function() {$scope.data.sales=[{"color":"#FFCC00","key":"Ventas","values":[[1391212800000,3510.36],[1391299200000,0],[1391385600000,7286.76],[1391472000000,4835.53],[1391558400000,5998.84],[1391644800000,7399.76],[1391731200000,9079.64],[1391817600000,1858.63],[1391904000000,0],[1391990400000,4333.08],[1392076800000,4931.83],[1392163200000,4730.6],[1392249600000,2916.41],[1392336000000,6561.01],[1392422400000,3776.92],[1392508800000,0],[1392595200000,3776.44],[1392681600000,0],[1392768000000,3953.02],[1392854400000,4448.56],[1392940800000,3217.39],[1393027200000,0],[1393113600000,0],[1393200000000,804.8],[1393286400000,3467.62],[1393372800000,4984.82],[1393459200000,1505.94],[1393545600000,0],[1393632000000,261.64],[1393718400000,0],[1393804800000,0]]}]; graphSales.clearData(); console.log("time");}, 500); 

 function fetchDataIvs(){

   Sales.getSales()
   .success(function(response){

     var dta = [{color:"#428bca", key:"Ventas",values:[]}];
     dta[0].values = response.values;
     $scope.data.sales=dta;



   });

 }





 function fetchDataNvR(){

   dailyRecurrence.getRecurrence()
   .success(function(response){

     var dta = [{color:"#428bca", key:"Usuarios Recurrentes",values:[]}];
     dta[0].values = response.values;
     dailyNew.getNew()
      .success(function(response){
        var dto = [{color:"#FFCC00",key:"Usuarios Nuevos",values:[]}];
        dto[0].values = response.values;
        dailyRecuNew.getRecuNew()

      .success(function(response){
        var dtao = [{color:"#33CC33",key:"Recurrencias Adicionales",values:[]}];
        dtao[0].values = response.values;
        var aux =dta.concat(dto);
 
        $scope.data.recurrences= aux.concat(dtao);
        });
    });

   });

 }


 function fetchDataAverage(){

   AverageStats.getAverageSales()
   .success(function(response){
//console.log(response);
     var dta = [{color:"#428bca" ,key:"Ventas",values:[]}];
     
     

      dta[0].values=response.values
    
     

      
    // console.log(response.values);
   


AverageStats.getAverageInvoices()
.success(function(response){
 //  var dta = [{color:"#FFCC00", key:"Facturas Identificadas",values:[]}];
 //    var dto= [{color:"#CC0000", key:"Facturas no Identificadas",values:[]}];

     
    // console.log(response);
      for (var i = 0; i < response.values.length; i++) {
       
       if (response.values[i].key=="identified") {
          for (var j = 0; j < response.values[i].values.length; j++) {
             dta[0].values[j].push(response.values[i].values[j][1]);
           }; 
    //    dta[0].values[] =response.values[i].values;
       };
       if (response.values[i].key=="noidentified") {
        for (var j = 0; j < response.values[i].values.length; j++) {
             dta[0].values[j].push(response.values[i].values[j][1]);
           }; 
     //   dta[0].values[2] =response.values[i].values;
       }; 
     };
     //console.log(dta);
  $scope.dataAvgSales=dta

   });
});
 }

 function fetchDataIdvnid(){

   Idsales.getIdsales()
   .success(function(response){
                       //    console.log(response);
                       var dta = [{color:"#428bca", key:"Facturas Identificadas",values:[]}];
                       dta[0].values = response.values;
                           //dta[0].key = response.key;


                           Nidsales.getNidsales()
                           .success(function(response){

                             var dto = [{color:"#FF0000",key:"Facturas no Identificadas",values:[]}];
                             dto[0].values = response.values;
                           //dto[0].key = response.key;
                           //console.log(dta.concat(dto));
                           $scope.dataIdvnid=dta.concat(dto);
                           
                         });
                         });

 }

 function fetchDataSvI_M(){

   Invoices.getMonthlyInvoices()
   .success(function(response){
                       //    console.log(response);
                       var dta = [{color:"#FF0000",  key:"Facturas",values:[]}];
                       dta[0].values = response.values;
                           //dta[0].key = response.key;


                           Sales.getMonthlySales()
                           .success(function(response){

                             var dto = [{color:"#428bca", bar:"true", key:"Ventas",values:[]}];
                             dto[0].values = response.values;
                           //dto[0].key = response.key;
                           //console.log(dta.concat(dto));
                           $scope.dataSvI_M=dta.concat(dto);
                           
                         });
                         });

 }

 function fetchDataIdnidtotal(){

   Idsales.getIdsalesTotal()
   .success(function(response){
                         //  console.log(response);
                         var dta = [{color:"#428bca", key:"Facturas Identificadas",y:[]}];
                         dta[0].y = response.values;
                           //dta[0].key = response.key;


                           Nidsales.getNidsalesTotal()
                           .success(function(response){
                         //  console.log(response);
                         var dto = [{color:"#FF0000",key:"Facturas No Identificadas",y:[]}];
                         dto[0].y = response.values;
                           //dto[0].key = response.key;
                           $scope.dataIdvnidTotal=dta.concat(dto);
                        //   console.log(dta.concat(dto));
                      });
                         });

 }

// function fetchDataRecurrence(){

        /*       Recurrence.getRecurrence()
                       .success(function(response){
                           //console.log(response);
                           var dta = [{ key:"Recurrencia",values:[]}];
                           
                           var size =  response.values.length - Math.ceil(response.values.length*0.4)
                           for (var i = 0; i < size-1   ; i++) {
                               response.values[i][0]= response.values[i][0].toString();
                           dta[0].values[i]=response.values[i];
                           //console.log(response.values[i]);                         
                           };
                           for (var i = size ; i < response.values.length ; i++) {
                               response.values[size-1][1]=response.values[size-1][1]+response.values[i][1];
                              

                           };

                           dta[0].values[size-1]=response.values[size-1];
                           dta[0].values[size-1][0]=dta[0].values[size-1][0].toString() + " o m��s ";

                            $scope.dataRecurrence=dta
                           //console.log(dta[0].values);
                          // dta[0].values = response.values;
                           //dta[0].key = response.key;       
               
              });
*/       
/*Recurrence.getRecurrence()
.success(function(response){
                           //console.log(response);
                           
                           var dta = [];
                           var size =  response.values.length - Math.ceil(response.values.length*0.4)
                           for (var i = 0; i < size-1   ; i++) {
                             dta[i] ={ key:"",values:[]};   
                             dta[i].key = response.values[i][0].toString();
                             dta[i].values[i]= [];
                             dta[i].values[i][0] = response.values[i][0];
                             dta[i].values[i][1] = response.values[i][1];


                             for (var j = 0; j <= size-1; j++) {
                               if (j!=i) {

                                 dta[i].values[j]= [];
                                 dta[i].values[j][0] = response.values[j][0];
                                 dta[i].values[j][1] = 0;                                        

                                       //dta[i].values[j]=response.values[j];
                                       //dta[i].values[j][1]=0;
                                     };
                                   };

                           //console.log(response.values[i]);                         
                         };
                         for (var i = size ; i < response.values.length ; i++) {
                           response.values[size-1][1]=response.values[size-1][1]+response.values[i][1];


                         };
                         dta[size-1] ={ key:"",values:[]};
                         dta[size-1].key=response.values[size-1][0].toString() + " o mas ";
                         dta[size-1].values[size-1]=[];
                         dta[size-1].values[size-1][0]=response.values[size-1][0];
                         dta[size-1].values[size-1][1]=response.values[size-1][1];

                         for (var j = 0; j < size-1; j++) {
                           if (j!=size-1) {

                             dta[size-1].values[j]= [];
                             dta[size-1].values[j][0] = response.values[j][0];
                             dta[size-1].values[j][1] = 0;                                        

                                       //dta[i].values[j]=response.values[j];
                                       //dta[i].values[j][1]=0;
                                     };
                                   };



                                //   console.log(dta);
                                   $scope.dataRecurrence=dta;
                                   $scope.dataRecurrencePercent=response.percent;
                          // dta[0].values = response.values;
                           //dta[0].key = response.key;       

                         });




};
*/
function getDailyStats(){
 Sales.getTodaySales()
 .success(function(response){
  $scope.dataTodaySales=response.values[0][1];
});
 Idsales.getTodayIdsales()
 .success(function(response){
  $scope.dataTodayIdsales=response.values[0][1];
});
 Nidsales.getTodayNidsales()
 .success(function(response){
  $scope.dataTodayNidsales=response.values[0][1];
});
 dailyNew.getTodayNew()
 .success(function(response){
  $scope.dataTodaydailyNew=response.values[0][1];
});
 dailyRecurrence.getTodayRecurrence()
 .success(function(response){
  $scope.dataTodaydailyRecurrence=response.values[0][1];
});
 dailyRecuNew.getTodayRecuNew()
 .success(function(response){
  $scope.dataTodaydailyRecuNew=response.values[0][1];
});


       // DailyNewUsers.getDailyNewUsers()
       //     .success(function(response){
       //         // console.log(response.values);
       //         $scope.dailynewusers = response.values
       //     });

       // DailyUsers.getDailyUsers()
       //     .success(function(response){
       //         // console.log(response.values);
       //         $scope.dailyusers = response.values
       //     });

       // DailyUnknownUsers.getDailyUnknownUsers()
       //     .success(function(response){
       //         // console.log(response.values);
       //         $scope.dailyunknownusers = response.values
       //     });
}




//$scope.data = [{"key":"Facturas","values":[[1385337600000,36],[1385424000000,37],[1385510400000,34],[1383177600000,9],[1383264000000,40],[1383350400000,31],[1383523200000,29],[1383696000000,46],[1383782400000,35],[1383868800000,52],[1383955200000,24],[1384128000000,26],[1384300800000,56],[1384387200000,57],[1384473600000,70],[1384560000000,20],[1384732800000,40],[1384819200000,57],[1384905600000,62],[1385078400000,46],[1385164800000,38],[1385596800000,44],[1385683200000,40],[1385942400000,33],[1386201600000,49],[1386288000000,41],[1386374400000,34],[1383609600000,34],[1384214400000,49],[1384992000000,41],[1386028800000,42],[1386115200000,40],[1386547200000,59],[1386633600000,63]]},{"bar":true,"key":"Ventas","values":[[1385337600000,2806.53],[1385424000000,2791.58],[1385510400000,2533.73],[1383177600000,279.85],[1383264000000,2859.4],[1383350400000,2601.3],[1383523200000,2205.45],[1383696000000,3555.4],[1383782400000,2521.55],[1383868800000,3267.86],[1383955200000,1555.2],[1384128000000,1808.01],[1384300800000,3796.57],[1384387200000,3620.24],[1384473600000,4795.73],[1384560000000,1702.09],[1384732800000,2692.09],[1384819200000,4525.46],[1384905600000,4371.73],[1385078400000,3496.69],[1385164800000,2495.45],[1385596800000,2820.86],[1385683200000,2957.69],[1385942400000,1988.97],[1386201600000,3160.38],[1386288000000,3063.56],[1386374400000,2754.38],[1383609600000,2401.2],[1384214400000,2560.58],[1384992000000,3322.55],[1386028800000,3173.83],[1386115200000,2751.48],[1386547200000,3900.09],[1386633600000,4390.23]]}];
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
 //fetchDataIvs();
 //fetchDataNvR();
 //fetchDataIdvnid();
// fetchDataAverage();
 //fetchDataIdnidtotal();
// fetchDataSvI_M();
 //fetchDataRecurrence();
// getDailyStats();
};



     }]);