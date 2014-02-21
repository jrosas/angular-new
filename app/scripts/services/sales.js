'use strict';

projectXServices.factory('Sales', function ($http) {
	return{
		getSales : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.sales+"?"+ltxVars.arguments.last_thirty
         	});
		},
		getTodaySales : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.sales+"?"+ltxVars.arguments.today
         	});
		},
		getMonthlySales : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.sales+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
         	});
		}
	}
});
   