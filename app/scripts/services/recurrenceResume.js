'use strict';

projectXServices.factory('recurrenceResume', function ($http) {
	return{
		getResume : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recurrenceresume
         	});
		}
	}
});