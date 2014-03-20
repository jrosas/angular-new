'use strict';

projectXServices.factory('graphSalesWeek', function ($http,$q) {
	var averageData = null;
  var dta = [{color:"#428bca" ,key:"Ventas",values:[]}];
  var beg = null;
  var end = null;

  var averageSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.weeklysales+"?"+ltxVars.arguments.last_thirty
          });



  var averageInvoices = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.averageinvoices+"?"+ltxVars.arguments.weekly+'&'+ltxVars.arguments.last_thirty
          });

var promise = $q.all([averageSales,averageInvoices]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "weekly sales":
          dta[0].values=result.data.values;
          break;
        case "average_invoices":
          for (var i = 0; i < result.data.values.length; i++) {
       
            if (result.data.values[i].key=="identified") {
              for (var j = 0; j < result.data.values[i].values.length; j++) {
                 dta[0].values[j].push(result.data.values[i].values[j][1]);
              }; 
            };
            if (result.data.values[i].key=="noidentified") {
              for (var j = 0; j < result.data.values[i].values.length; j++) {
                dta[0].values[j].push(result.data.values[i].values[j][1]);
              }; 
            }; 
          };

          break;
        };
        
        });

    averageData = dta;
  });

  return {
      promise:promise,
      getData: function () {
          return averageData;//.getSomeData();
      },

      default: function () {

       var averageSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.weeklysales+"?"+ltxVars.arguments.last_thirty
          });



  var averageInvoices = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.averageinvoices+"?"+ltxVars.arguments.weekly+'&'+ltxVars.arguments.last_thirty
          });

 $q.all([averageSales,averageInvoices]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "weekly sales":
          dta[0].values=result.data.values;
          break;
        case "average_invoices":
          for (var i = 0; i < result.data.values.length; i++) {
       
            if (result.data.values[i].key=="identified") {
              for (var j = 0; j < result.data.values[i].values.length; j++) {
                 dta[0].values[j].push(result.data.values[i].values[j][1]);
              }; 
            };
            if (result.data.values[i].key=="noidentified") {
              for (var j = 0; j < result.data.values[i].values.length; j++) {
                dta[0].values[j].push(result.data.values[i].values[j][1]);
              }; 
            }; 
          };

          break;
        };
        
        });

    averageData = dta;
  });
      },

      updateDate: function (type,tbeg,tend) {
         
       var averageSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.weeklysales+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend 
          });



  var averageInvoices = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.averageinvoices+"?"+ltxVars.arguments.weekly+'&'+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend 
          });

 $q.all([averageSales,averageInvoices]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "weekly sales":
          dta[0].values=result.data.values;
          break;
        case "average_invoices":
          for (var i = 0; i < result.data.values.length; i++) {
       
            if (result.data.values[i].key=="identified") {
              for (var j = 0; j < result.data.values[i].values.length; j++) {
                 dta[0].values[j].push(result.data.values[i].values[j][1]);
              }; 
            };
            if (result.data.values[i].key=="noidentified") {
              for (var j = 0; j < result.data.values[i].values.length; j++) {
                dta[0].values[j].push(result.data.values[i].values[j][1]);
              }; 
            }; 
          };

          break;
        };
        
        });

    averageData = dta;
  });

      }
    };
});
   