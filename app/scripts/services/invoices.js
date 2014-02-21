'use strict';

projectXServices.factory('Invoices', function ($http) {
	return{
		getMonthlyInvoices : function () {
			return $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.invoices+"?"+ltxVars.arguments.monthly+"&"+ltxVars.arguments.last_year
         	});
		}
         
	}
});