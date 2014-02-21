'use strict';

projectXServices.factory('newInvoices', function ($http) {
	return{
		getNewInvoices : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.newinvoices+"?"+ltxVars.arguments.last_thirty
         	});
		}
	}
});