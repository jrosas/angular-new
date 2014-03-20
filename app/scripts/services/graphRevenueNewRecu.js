'use strict';

projectXServices.factory('graphRevenueNewRecu', function ($http,$q) {
	var revenueData = null;
  var dta = [{color:"#428bca", key:"Ingresos por Visitas Recurrentes",values:[]}];
  var dto = [{color:"#FFCC00",key:"Ingresos por Visitas Nuevas",values:[]}];
  var dtao = [{color:"#FF0000",key:"Ingresos por Visitas No identificadas",values:[]}];
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

  var revenueNoid = $http({
            method: 'GET',
              url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.revenuenoid+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
          });



  var promise = $q.all([revenueNew,revenueRecurrences,revenueNoid]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "new_invoices":
          dto[0].values = result.data.values;
          break;
        case "recurrent_invoices":
          dta[0].values = result.data.values;
          break;
      
        case "noid_invoices":
          dtao[0].values = result.data.values;
          break;
        };




  });

 for (var i = 0; i < dta[0].values.length; i++) {
     
         dta[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1]+dtao[0].values[i][1]);
         dto[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1]+dtao[0].values[i][1]);
         dtao[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1]+dtao[0].values[i][1]);
       };
       
        var aux = dto.concat(dta);
        revenueData = aux.concat(dtao);
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



  var revenueNoid = $http({
            method: 'GET',
              url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.revenuenoid+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
          });



  $q.all([revenueNew,revenueRecurrences,revenueNoid]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "new_invoices":
          dto[0].values = result.data.values;
          break;
        case "recurrent_invoices":
          dta[0].values = result.data.values;
          break;

        case "noid_invoices":
          dtao[0].values = result.data.values;
          break;
        };




  });

 for (var i = 0; i < dta[0].values.length; i++) {
     
         dta[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1]+dtao[0].values[i][1]);
         dto[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1]+dtao[0].values[i][1]);
         dtao[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1]+dtao[0].values[i][1]);
       };
        var aux = dto.concat(dta);
        revenueData = aux.concat(dtao);
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



  var revenueNoid = $http({
            method: 'GET',
              url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.revenuenoid+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
          });



  $q.all([revenueNew,revenueRecurrences,revenueNoid]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "new_invoices":
          dto[0].values = result.data.values;
          break;
        case "recurrent_invoices":
          dta[0].values = result.data.values;
          break;
       
        case "noid_invoices":
          dtao[0].values = result.data.values;
          break;
        };




  });


    for (var i = 0; i < dta[0].values.length; i++) {
     
         dta[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1]+dtao[0].values[i][1]);
         dto[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1]+dtao[0].values[i][1]);
         dtao[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1]+dtao[0].values[i][1]);
       };


        var aux = dto.concat(dta);
        revenueData = aux.concat(dtao);

 });

      }
    };
});
   