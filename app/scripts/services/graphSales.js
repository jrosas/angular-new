'use strict';

projectXServices.factory('graphSales', function ($http) {
	var salesData = null;
  var dta = [{color:"#428bca", key:"Ventas",values:[]}];
  var beg = null;
  var end = null;



	var promise = $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.sales+"?"+ltxVars.arguments.last_thirty
       	}).success(function(response){ 
   			  dta[0].values = response.values;
  		      salesData=dta;
		});

	return {
      promise:promise,
      getData: function () {
          return salesData;//.getSomeData();
      },

      default: function () {
          $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.sales+"?"+ltxVars.arguments.last_thirty
        }).success(function(response){ 
          dta[0].values = response.values;
            salesData=dta;
       });
      },

      updateDate: function (type,tbeg,tend) {
          
          $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.sales+"?"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
        }).success(function(response){ 
          dta[0].values = response.values;
            salesData=dta;
       });




      }
    };
});
   