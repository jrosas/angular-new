'use strict';

projectXServices.factory('graphSalesInvoices', function ($http,$q) {
	var salesInvoicesData = null;
  var dta = [{color:"#FF0000",  key:"Facturas",values:[]}];
   var dto = [{color:"#428bca", bar:"true", key:"Ventas",values:[]}];
  var beg = null;
  var end = null;


  var invoices = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.invoices+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
          });

  var sales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.sales+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
          });



  var promise = $q.all([invoices,sales,]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "invoices":
          dta[0].values = result.data.values;
          break;
        case "sales":
          dto[0].values = result.data.values;
          break;
        };


        salesInvoicesData = dta.concat(dto);


  });

 });

	return {
      promise:promise,
      getData: function () {
          return salesInvoicesData;//.getSomeData();
      },

      default: function () {
        var invoices = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.invoices+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
          });

  var sales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.sales+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
          });


$q.all([invoices,sales,]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "invoices":
          dta[0].values = result.data.values;
          break;
        case "sales":
          dto[0].values = result.data.values;
          break;
        };


        salesInvoicesData = dta.concat(dto);


  });
 });
          
      },

      updateDate: function (type,tbeg,tend) {
 var invoices = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.invoices+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
          });

  var sales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.sales+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
          });


$q.all([invoices,sales,]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "invoices":
          dta[0].values = result.data.values;
          break;
        case "sales":
          dto[0].values = result.data.values;
          break;
        };


        salesInvoicesData = dta.concat(dto);


  });
 });

      }
    };
});
   