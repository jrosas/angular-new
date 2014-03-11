'use strict';

projectXServices.factory('resumeRecurrence', function ($http) {
	var resume = {
    percent : "",
    data : ""
  };

	var promise = $http({
          	method: 'GET',
          	url: ltxConn.url+":"+ltxConn.port+ltxVars.endpoints.main+ltxVars.endpoints.recurrenceresume
       	}).success(function(response){ 


    var total = response.values.reduce(function(previousValue, currentValue, index, array){
        return previousValue + currentValue[1];
    },0);

    

     resume.percent=response.percent;
     var size =  response.values.length - Math.ceil(response.values.length*0.4);

     var array=[];
     for (var i = 0; i < size-1   ; i++) {
      var aux=[];
      aux.push(response.values[i][0]);
      aux.push(response.values[i][1]);
      aux.push(100/total * response.values[i][1]);
      array.push(aux);                  
     };
     for (var i = size ; i < response.values.length ; i++) {
      response.values[size-1][1]=response.values[size-1][1]+response.values[i][1]
     };

      response.values[size-1][0]=response.values[size-1][0].toString() + " o mas ";
      
      var aux=[];
      aux.push(response.values[size-1][0]);
      aux.push(response.values[size-1][1]);
      aux.push(100/total * response.values[size-1][1]);
      array.push(aux);

    resume.data=array;

		});

	return {
      promise:promise,
      getData: function () {
          return resume;//.getSomeData();
      }

     
    };
});
   