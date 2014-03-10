'use strict';

projectXServices.factory('graphRecurrences', function ($http,$q) {
	var recurrenceData = null;
  var dta = [{color:"#428bca", key:"Usuarios Recurrentes",values:[]}];
  var dto = [{color:"#FFCC00",key:"Usuarios Nuevos",values:[]}];
  var dtao = [{color:"#33CC33",key:"Recurrencias Adicionales",values:[]}];
  var beg = null;
  var end = null;


  var dailyRecurrence = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recurrence+"?"+ltxVars.arguments.last_thirty
          });

  var dailyNew = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.new+"?"+ltxVars.arguments.last_thirty
          });

  var dailyRecuNew = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recunew+"?"+ltxVars.arguments.last_thirty
          });


  var promise = $q.all([dailyRecurrence,dailyNew,dailyRecuNew]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "daily_recurrence":
          dta[0].values = result.data.values;
          break;
        case "recurrence_resume":
          dto[0].values = result.data.values;
          break;
        case "daily_recunew":
          dtao[0].values = result.data.values;
          break;
        };
        var aux =dta.concat(dto);

        recurrenceData = aux.concat(dtao);
        });


  });



	return {
      promise:promise,
      getData: function () {
          return recurrenceData;//.getSomeData();
      },

      default: function () {
        var dailyRecurrence = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recurrence+"?"+ltxVars.arguments.last_thirty
          });

         var dailyNew = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.new+"?"+ltxVars.arguments.last_thirty
          });

       var dailyRecuNew = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recunew+"?"+ltxVars.arguments.last_thirty
          });


$q.all([dailyRecurrence,dailyNew,dailyRecuNew]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "daily_recurrence":
          dta[0].values = result.data.values;
          break;
        case "recurrence_resume":
          dto[0].values = result.data.values;
          break;
        case "daily_recunew":
          dtao[0].values = result.data.values;
          break;
        };
        var aux =dta.concat(dto);

        recurrenceData = aux.concat(dtao);
        });


  });

          
      },

      updateDate: function (type,tbeg,tend) {

      var dailyRecurrence = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recurrence+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
          });

         var dailyNew = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.new+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
          });

       var dailyRecuNew = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recunew+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
          });

$q.all([dailyRecurrence,dailyNew,dailyRecuNew]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "daily_recurrence":
          dta[0].values = result.data.values;
          break;
        case "recurrence_resume":
          dto[0].values = result.data.values;
          break;
        case "daily_recunew":
          dtao[0].values = result.data.values;
          break;
        };
        var aux =dta.concat(dto);

        recurrenceData = aux.concat(dtao);
        });


  });


      }
    };
});
   