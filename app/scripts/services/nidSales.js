'use strict';

projectXServices.factory('Nidsales', function ($http) {
	return{
		getNidsales : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.nidsales+"?"+ltxVars.arguments.last_thirty
         	});
		},
		getTodayNidsales : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.nidsales+"?"+ltxVars.arguments.today
         	});
		},
		getNidsalesTotal : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.nidsales+"?"+ltxVars.arguments.total
         	});
		}
	}
});
   