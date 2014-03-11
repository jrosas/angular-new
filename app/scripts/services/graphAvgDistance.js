'use strict';

projectXServices.factory('graphAvgDistance', function ($http,$q) {
	var averageData = {
                            data : "",
                            avg : "",
                          };
  var dta = [{color:"#428bca", key:"Distancia",values:[]}];
  var beg = null;
  var end = null;


  var averageDistance = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.averagedistance+"?"+ltxVars.arguments.last_thirty
          });

  var averageTotal = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.averagedistance+"?"+ltxVars.arguments.last_thirty+"&"+ltxVars.arguments.total
          });

  

  var promise = $q.all([averageDistance,averageTotal]).then(function (results) {
    angular.forEach(results, function (result) {
      if (result.data.values instanceof Array){
        dta[0].values=result.data.values;
        averageData.data=dta;
      } else {
        averageData.avg=result.data.values;
      };


  });

  });


	return {
      promise:promise,
      getData: function () {
          return averageData;//.getSomeData();
      },

      default: function () {
       var averageDistance = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.averagedistance+"?"+ltxVars.arguments.last_thirty
          });

  var averageTotal = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.averagedistance+"?"+ltxVars.arguments.last_thirty+"&"+ltxVars.arguments.total
          });

  

  $q.all([averageDistance,averageTotal]).then(function (results) {
    angular.forEach(results, function (result) {
      if (result.data.values instanceof Array){
        dta[0].values=result.data.values;
        averageData.data=dta;
      } else {
        averageData.avg=result.data.values;
      };


  });

  });
          
      },

      updateDate: function (type,tbeg,tend) {

        var averageDistance = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.averagedistance+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
          });

  var averageTotal = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.averagedistance+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend+"&"+ltxVars.arguments.total
          });

  

 $q.all([averageDistance,averageTotal]).then(function (results) {
    angular.forEach(results, function (result) {
      if (result.data.values instanceof Array){
        dta[0].values=result.data.values;
        averageData.data=dta;
      } else {
        averageData.avg=result.data.values;
      };


  });

  });


      }

    };
});
   