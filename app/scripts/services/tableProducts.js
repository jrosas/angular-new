'use strict';

projectXServices.factory('tableProducts', function ($http,$q) {
	var tableData = [];
  

	var productsCount = $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.productscount+"?"+ltxVars.arguments.total+"&"+ltxVars.arguments.last_thirty
       	});

  var productsRevenue = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.productsrevenue+"?"+ltxVars.arguments.total+"&"+ltxVars.arguments.last_thirty
        });


var promise = $q.all([productsCount,productsRevenue]).then(function (results) {
    angular.forEach(results, function (result) {
      var tableRow = { 
                    name:"",
                    qty : "",
                    rev : ""
                  };

      switch(result.data.key){

              case "product_count":
              angular.forEach(result.data.values,function (item) {

                var tableRow = { 
                    name:"",
                    qty : "",
                    rev : ""
                  };

               tableRow.name=item[0];
               tableRow.qty=item[1];

               tableData.push(tableRow);
              });

         
                
                break;
              case "product_revenue":
              var i = 0;
              angular.forEach(result.data.values,function (item) {

                tableData[i].rev=item[1];
                i=i+1;



                });
                break;
              };

              


  });

   
  });

	return {
      promise:promise,
      getData: function () {
          return tableData;//.getSomeData();
      },
      default: function () {
        tableData = [];
        var productsCount = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.productscount+"?"+ltxVars.arguments.total+"&"+ltxVars.arguments.last_thirty
        });

  var productsRevenue = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.productsrevenue+"?"+ltxVars.arguments.total+"&"+ltxVars.arguments.last_thirty
        });


$q.all([productsCount,productsRevenue]).then(function (results) {
    angular.forEach(results, function (result) {
      var tableRow = { 
                    name:"",
                    qty : "",
                    rev : ""
                  };

      switch(result.data.key){

              case "product_count":
              angular.forEach(result.data.values,function (item) {

                var tableRow = { 
                    name:"",
                    qty : "",
                    rev : ""
                  };

               tableRow.name=item[0];
               tableRow.qty=item[1];

               tableData.push(tableRow);
              });

         
                
                break;
              case "product_revenue":
              var i = 0;
              angular.forEach(result.data.values,function (item) {

                tableData[i].rev=item[1];
                i=i+1;



                });
                break;
              };

              


  });

   
  });


      },
      updateDate: function (type,tbeg,tend) {
      tableData=[];
        var productsCount = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.productscount+"?"+ltxVars.arguments.total+"&"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
        });

  var productsRevenue = $http({
            method: 'GET',
            url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.productsrevenue+"?"+ltxVars.arguments.total+"&"+ (type=="monthly" ? ltxVars.arguments.monthly +"&" :"") +"beg="+tbeg+"&"+"end="+tend
        });


$q.all([productsCount,productsRevenue]).then(function (results) {

    angular.forEach(results, function (result) {
      var tableRow = { 
                    name:"",
                    qty : "",
                    rev : ""
                  };

      switch(result.data.key){

              case "product_count":
              angular.forEach(result.data.values,function (item) {

                var tableRow = { 
                    name:"",
                    qty : "",
                    rev : ""
                  };

               tableRow.name=item[0];
               tableRow.qty=item[1];

               tableData.push(tableRow);
              });

         
                
                break;
              case "product_revenue":
              var i = 0;
              angular.forEach(result.data.values,function (item) {

                tableData[i].rev=item[1];
                i=i+1;



                });
                break;
              };

              


  });

   
  });
     }
    };
});
   