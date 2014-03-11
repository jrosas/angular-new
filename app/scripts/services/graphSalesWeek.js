'use strict';

projectXServices.factory('graphSalesWeek', function ($http,$q) {
	var averageData = null;
  var dta = [{color:"#428bca" ,key:"Ventas",values:[]}];
  var beg = null;
  var end = null;

var promise = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.weeklysales+"?"+ltxVars.arguments.last_thirty
        }).success(function(response){ 
          dta[0].values = response.values;
            averageData=dta;
    });

  return {
      promise:promise,
      getData: function () {
          return averageData;//.getSomeData();
      },

      default: function () {
          $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.weeklysales+"?"+ltxVars.arguments.last_thirty
        }).success(function(response){ 
          dta[0].values = response.values;
            averageData=dta;
       });
      },

      updateDate: function (type,tbeg,tend) {
          
          $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.weeklysales+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
        }).success(function(response){ 
          dta[0].values = response.values;
            averageData=dta;
       });




      }
    };
});
   