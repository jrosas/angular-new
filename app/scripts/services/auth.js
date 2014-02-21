'use strict';


projectXServices.factory('Auth',[ '$cookies', function($cookies){
   var Auth= {};

    Auth.islogged=false;
   Auth.username="froyogur";
   Auth.password="12345abc"


    return Auth;

}]);
