'use strict';

projectXServices.factory('dailyNew', function ($http) {
	return{
		getNew : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.new+"?"+ltxVars.arguments.last_thirty
         	});
		},
		getTodayNew : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.new+"?"+ltxVars.arguments.today
         	});
		},
		getMonthlyNew : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.new+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
         	});
		}
	}
});