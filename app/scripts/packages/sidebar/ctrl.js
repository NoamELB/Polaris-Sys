/*===========================================================================
** Sidebar controller
*===========================================================================*/
(function(){
	'use strict';

	angular
		.module('app.sidebar')
		.controller('SidebarCtrl', sidebarCtrl);

	sidebarCtrl.$inject = ['$scope', '$location', 'Content'];

	function sidebarCtrl ($scope, $location, Content) {
		$scope.solutions = '';
		$scope.part = '';
		$scope.status = {
			open: true,
			openMarket: false
		};
		// open and close for the accordion
		$scope.$on("$routeChangeSuccess", accordionHandle);

		function accordionHandle () {
			$scope.status.open = true;
			if ($scope.isSmall) {
				$scope.status.open = false;
				$scope.status.openMarket = false;
			}
			var split = $location.path().split('/');
			$scope.part = split[2];			
			Content.success(dataHandle);
		}

		function dataHandle (data) {
			$scope.solutions = (data[0])[$scope.part];
		}
	}
})();