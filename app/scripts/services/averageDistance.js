'use strict';

projectXServices.factory('averageDistance', function ($http) {
	return{
		getaverage : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.averagedistance+"?"+ltxVars.arguments.last_thirty
         	});
		},
		getaverageTotal : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.averagedistance+"?"+ltxVars.arguments.last_thirty+"&"+ltxVars.arguments.total
         	});
		}
	}
});