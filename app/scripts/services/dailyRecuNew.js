'use strict';

projectXServices.factory('dailyRecuNew', function ($http) {
	return{
		getRecuNew : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recunew+"?"+ltxVars.arguments.last_thirty
         	});
		},
		getTodayRecuNew : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recunew+"?"+ltxVars.arguments.today
         	});
		},
		getMonthlyRecuNew : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recunew+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
         	});
		}
	}
});