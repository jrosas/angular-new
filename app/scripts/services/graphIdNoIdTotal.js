'use strict';

projectXServices.factory('graphIdNoIdTotal', function ($http,$q) {
	var identificationTotalData = null;
  var dta = [{color:"#428bca", key:"Facturas Identificadas",y:[]}];
  var dto = [{color:"#FF0000",key:"Facturas no Identificadas",y:[]}];
  var beg = null;
  var end = null;


  var identifiedSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.idsales+"?"+ltxVars.arguments.total
          });

  var nIdentifiedSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.nidsales+"?"+ltxVars.arguments.total
          });

  

  var promise = $q.all([identifiedSales,nIdentifiedSales]).then(function (results) {
    angular.forEach(results, function (result) {
      
    switch(result.data.key){
        case "identified":
          dta[0].y = result.data.values;
          break;
        case "noidentified":
          dto[0].y = result.data.values;
          break;
        };
        
        identificationTotalData = dta.concat(dto);
        });


  });

	return {
      promise:promise,
      getData: function () {
          return identificationTotalData;//.getSomeData();
      },

      default: function () {
        var identifiedSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.idsales+"?"+ltxVars.arguments.total
          });

        var nIdentifiedSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.nidsales+"?"+ltxVars.arguments.total
          });

  

        var promise = $q.all([identifiedSales,nIdentifiedSales]).then(function (results) {
          angular.forEach(results, function (result) {
            
          switch(result.data.key){
              case "identified":
                dta[0].y = result.data.values;
                break;
              case "noidentified":
                dto[0].y = result.data.values;
                break;
              };
              
              identificationTotalData = dta.concat(dto);
              });


        });
          
      },

      updateDate: function (type,tbeg,tend) {

      var identifiedSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.idsales+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend+"&"+ltxVars.arguments.total
          });

      var nIdentifiedSales = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.nidsales+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend+"&"+ltxVars.arguments.total
          });

  

      var promise = $q.all([identifiedSales,nIdentifiedSales]).then(function (results) {
      angular.forEach(results, function (result) {
      
      switch(result.data.key){
        case "identified":
          dta[0].y = result.data.values;
          break;
        case "noidentified":
          dto[0].y = result.data.values;
          break;
        };
        
        identificationTotalData = dta.concat(dto);
        });


        });


      }
    };
});
   