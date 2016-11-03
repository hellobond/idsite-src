'use strict';

angular.module('stormpathIdpApp')
.controller('ErrorCtrl', function ($scope,Stormpath) {
	$scope.errors = Stormpath.errors;
	$scope.inError = false;

	$scope.$watchCollection('errors',function() {
		//console.log('Stormpath.errors = ', Stormpath.errors);
		$scope.inError = $scope.errors.length > 0;
      	//$scope.inError = true;
  	});
});
