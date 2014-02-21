'use strict';

projectXServices.factory('recuInvoices', function ($http) {
	return{
		getRecuInvoices : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recuinvoices+"?"+ltxVars.arguments.last_thirty
         	});
		}
	}
});