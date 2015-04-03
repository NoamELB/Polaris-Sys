/*===========================================================================
** Main controller
*===========================================================================*/
(function(){
	'use strict';

	angular
		.module('app.main')
		.controller('MainCtrl', mainCtrl);

		mainCtrl.$inject = ['$scope', '$window', '$interval', '$location'];

		function mainCtrl($scope, $window, $interval, $location) {
			var widthForSmall = '960'; // minimum computer display
			$scope.isSmall = $window.innerWidth < widthForSmall;
			$scope.content = false;
			$scope.tooLong = false;
			// watch width in order to switch between phone and computer display
			$interval(sizeHandle, 500);
			$scope.$on("$routeChangeSuccess", classHandle);

			function sizeHandle () {
				$scope.isSmall = ($window.innerWidth < widthForSmall);
			}
			function classHandle () {
		    	$scope.content = ($location.path().indexOf('/main') == 0);
		    	$scope.tooLong = (($location.path().indexOf('/management') == 0) || $scope.content);
			}
		}
})();