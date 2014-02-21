'use strict';

projectXCtrl.controller( 'LoginCtrl', [ '$scope','Auth', '$location' ,'$cookieStore' , function ($scope,Auth,$location,$cookieStore) {



	if ($location.path()==="/logout") {
		this.email="";
			this.password="";
			$cookieStore.remove("islogged");
	};


	$scope.submit=function () {
	//	console.log("ss");
		if (this.email==Auth.username && this.password==Auth.password) {
			Auth.islogged=true;
			$cookieStore.put("islogged",true);
			$location.path("/analytics/main");
		} else{
			this.email="";
			this.password="";
			$cookieStore.remove("islogged");
		};

		
	};

  }]);
