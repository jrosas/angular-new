'use strict';

projectXServices.factory('AverageStats', function ($http) {
	return{
		getAverageSales : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.averagesales+"?"+ltxVars.arguments.last_thirty
         	});
		},
		getAverageInvoices : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.averageinvoices+"?"+ltxVars.arguments.last_thirty
         	});
		}
	}
});