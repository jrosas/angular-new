'use strict';

projectXServices.factory('DailyStats', function ($http) {
	return{
		getDailyStats : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.dailystats+"?"+ltxVars.arguments.now
         	});
		}
	}
});