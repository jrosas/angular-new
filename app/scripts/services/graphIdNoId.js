'use strict';

projectXServices.factory('graphIdNoId', function ($http,$q) {
	var identificationData = null;
  var dta = [{color:"#428bca", key:"Facturas Identificadas",values:[]}];
  var dto = [{color:"#FF0000",key:"Facturas no Identificadas",values:[]}];
  var beg = null;
  var end = null;


  var identifiedSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.idsales+"?"+ltxVars.arguments.last_thirty
          });

  var nIdentifiedSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.nidsales+"?"+ltxVars.arguments.last_thirty
          });

  

  var promise = $q.all([identifiedSales,nIdentifiedSales]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "identified":
          dta[0].values = result.data.values;
          break;
        case "noidentified":
          dto[0].values = result.data.values;
          break;
        };
        
        
        });

      identificationData = dta.concat(dto);
  });
  /*
var promise = dailyRecurrence.success(function(response){
    dta[0].values = response.values;
    dailyNew.success(function(response){
      dto[0].values = response.values;
      dailyRecuNew.success(function(response){
        dtao[0].values = response.values;
        var aux =dta.concat(dto);

        identificationData = aux.concat(dtao);
        console.log(identificationData);
      });
    });
});
 
*/


	return {
      promise:promise,
      getData: function () {
          return identificationData;//.getSomeData();
      },

      default: function () {
        var identifiedSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.idsales+"?"+ltxVars.arguments.last_thirty
          });

        var nIdentifiedSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.nidsales+"?"+ltxVars.arguments.last_thirty
          });

  

        var promise = $q.all([identifiedSales,nIdentifiedSales]).then(function (results) {
          angular.forEach(results, function (result) {
            
          switch(result.data.key){
              case "identified":
                dta[0].values = result.data.values;
                break;
              case "noidentified":
                dto[0].values = result.data.values;
                break;
              };
              
              identificationData = dta.concat(dto);
              });


        });
          
      },

      updateDate: function (type,tbeg,tend) {

      var identifiedSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.idsales+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
          });

      var nIdentifiedSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.nidsales+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
          });

  

      var promise = $q.all([identifiedSales,nIdentifiedSales]).then(function (results) {
      angular.forEach(results, function (result) {
      
      switch(result.data.key){
        case "identified":
          dta[0].values = result.data.values;
          break;
        case "noidentified":
          dto[0].values = result.data.values;
          break;
        };
        
        identificationData = dta.concat(dto);
        });


        });


      }
    };
});
   