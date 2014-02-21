'use strict';

projectXServices.factory('Idsales', function ($http) {
	return{
		getIdsales : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.idsales+"?"+ltxVars.arguments.last_thirty
         	});
		},
		getTodayIdsales : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.idsales+"?"+ltxVars.arguments.today
         	});
		},
		getIdsalesTotal : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.idsales+"?"+ltxVars.arguments.total
         	});
		}
	}
});