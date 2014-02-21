'use strict';

projectXServices.factory('dailyRecurrence', function ($http) {
	return{
		getRecurrence : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recurrence+"?"+ltxVars.arguments.last_thirty
         	});
		},
		getTodayRecurrence : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recurrence+"?"+ltxVars.arguments.today
         	});
		},
		getMonthlyRecurrence : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recurrence+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
         	});
		}
	}
});