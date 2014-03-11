'use strict';

projectXServices.factory('graphRevenueNewRecu', function ($http,$q) {
	var revenueData = null;
  var dta = [{color:"#428bca", key:"Ingresos por Visitas Recurrentes",values:[]}];
  var dto = [{color:"#FFCC00",key:"Ingresos por Visitas Nuevas",values:[]}];
  var beg = null;
  var end = null;


  var revenueNew = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.revenuenew+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
          });

  var revenueRecurrences = $http({
            method: 'GET',
              url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.revenuerecurrences+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
          });



  var promise = $q.all([revenueNew,revenueRecurrences]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "new invoices":
          dto[0].values = result.data.values;
          break;
        case "recurrent invoices":
          dta[0].values = result.data.values;
          break;
        };


        revenueData = dto.concat(dta);


  });

 });

	return {
      promise:promise,
      getData: function () {
          return revenueData;//.getSomeData();
      },

      default: function () {
var revenueNew = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.revenuenew+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
          });

  var revenueRecurrences = $http({
            method: 'GET',
              url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.revenuerecurrences+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
          });



  $q.all([revenueNew,revenueRecurrences]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "new invoices":
          dto[0].values = result.data.values;
          break;
        case "recurrent invoices":
          dta[0].values = result.data.values;
          break;
        };


        revenueData = dto.concat(dta);


  });

 });
          
      },

      updateDate: function (type,tbeg,tend) {
var revenueNew = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.revenuenew+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
          });

  var revenueRecurrences = $http({
            method: 'GET',
              url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.revenuerecurrences+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
          });



  $q.all([revenueNew,revenueRecurrences]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "new invoices":
          dto[0].values = result.data.values;
          break;
        case "recurrent invoices":
          dta[0].values = result.data.values;
          break;
        };


        revenueData = dto.concat(dta);


  });

 });

      }
    };
});
   