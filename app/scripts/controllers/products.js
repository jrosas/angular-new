'use strict';

projectXCtrl.controller( 'ProductsCtrl', [ '$scope','ngTableParams', '$cookieStore', '$filter','tableProducts',
								function ($scope,ngTableParams,$cookieStore,$filter, tableProducts) {


$scope.data = {
    table : ""

};

$scope.type = {
    table : ""

};

$scope.data.table= tableProducts.getData();


  }]);
