'use strict';

projectXServices.factory('graphVisitNewRecu', function ($http,$q) {
	var visitData = null;
  var dta = [{color:"#428bca", key:"Visitas Recurrentes",values:[]}];
  var dto = [{color:"#FFCC00",key:"Visitas Nuevas",values:[]}];
  var beg = null;
  var end = null;


  var recurrence = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recurrence+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
          });

  var vNew = $http({
            method: 'GET',
              url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.new+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
          });

  var recunew = $http({
              method: 'GET',
                url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recunew+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
            });


  var promise = $q.all([recurrence,vNew,recunew]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "daily_recurrence":
          dta[0].values = result.data.values;
          break;
        case "recurrence_resume":
          dto[0].values = result.data.values;
          break;
        case "daily_recunew":
          for (var i = 0; i < result.data.values.length; i++) {
             dta[0].values[i][1]=dta[0].values[i][1]+result.data.values[i][1];

           };
        break;




        };


  });

    for (var i = 0; i < dta[0].values.length; i++) {
     
         dta[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1]);
         dto[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1])
       };

       visitData = dto.concat(dta);
 

 });

	return {
      promise:promise,
      getData: function () {
          return visitData;//.getSomeData();
      },

      default: function () {
var recurrence = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recurrence+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
          });

  var vNew = $http({
            method: 'GET',
              url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.new+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
          });

  var recunew = $http({
              method: 'GET',
                url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recunew+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
            });


  var promise = $q.all([recurrence,vNew,recunew]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "daily_recurrence":
          dta[0].values = result.data.values;
          break;
        case "recurrence_resume":
          dto[0].values = result.data.values;
          break;
        case "daily_recunew":
          for (var i = 0; i < result.data.values.length; i++) {
             dta[0].values[i][1]=dta[0].values[i][1]+result.data.values[i][1];

           };
        break;




        };


  });

    for (var i = 0; i < dta[0].values.length; i++) {
     
         dta[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1]);
         dto[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1])
       };

       visitData = dto.concat(dta);
 

 });
          
      },

      updateDate: function (type,tbeg,tend) {
var recurrence = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recurrence+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
          });

  var vNew = $http({
            method: 'GET',
              url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.new+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
          });

  var recunew = $http({
              method: 'GET',
                url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recunew+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
            });


  var promise = $q.all([recurrence,vNew,recunew]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "daily_recurrence":
          dta[0].values = result.data.values;
          break;
        case "recurrence_resume":
          dto[0].values = result.data.values;
          break;
        case "daily_recunew":
          for (var i = 0; i < result.data.values.length; i++) {
             dta[0].values[i][1]=dta[0].values[i][1]+result.data.values[i][1];

           };
        break;




        };


  });

    for (var i = 0; i < dta[0].values.length; i++) {
     
         dta[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1]);
         dto[0].values[i].push(dta[0].values[i][1]+dto[0].values[i][1])
       };

       visitData = dto.concat(dta);
 

 });

      }
    };
});
   