'use strict';

projectXServices.factory('dailyStats', function ($http,$q) {
	var todayData = {
          sales : "",
          id : "",
          nid : "",
          new : "",
          recurrences : "",
          recunew : "",
          };

  var beg = null;
  var end = null;


  var todaySales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.sales+"?"+ltxVars.arguments.today
          });

  var todayId = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.idsales+"?"+ltxVars.arguments.today
          });

  var todayNid = $http({
            method: 'GET',
           url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.nidsales+"?"+ltxVars.arguments.today
          });

  var todayNew = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.new+"?"+ltxVars.arguments.today
          });

	var todayRecurrence = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recurrence+"?"+ltxVars.arguments.today
          });

   var todayRecuNew = $http({
            method: 'GET',
           	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recunew+"?"+ltxVars.arguments.today
          });

   




  var promise = $q.all([todaySales,todayId,todayNid,todayNew,todayRecurrence,todayRecuNew]).then(function (results) {
 angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "sales":
          todayData.sales = result.data.values[0][1];
          break;
        case "identified":
          todayData.id = result.data.values[0][1];
          break;
        case "noidentified":
          todayData.nid = result.data.values[0][1];
          break;
        case "recurrence_resume":
          todayData.new = result.data.values[0][1];
          break;
        case "daily_recurrence":
          todayData.recurrences = result.data.values[0][1];
          break;
        case "daily_recunew":
          todayData.recunew = result.data.values[0][1];
          break;
        };
        
        });


  });



	return {
      promise:promise,
      getData: function () {
          return todayData;//.getSomeData();
      }

    };
});