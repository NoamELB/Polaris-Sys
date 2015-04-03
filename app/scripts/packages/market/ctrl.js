/*===========================================================================
** Market controller
*===========================================================================*/
(function(){
	'use strict';

	angular
		.module('app.market')
		.controller('MarketCtrl', marketCtrl);

		marketCtrl.$inject = ['$scope', '$location', '$routeParams', 'Content'];

		function marketCtrl($scope, $location, $routeParams, Content) {
			Content.success(dataFetch);

			function dataFetch (data) {	
				angular.forEach((data[0])[$routeParams.part], setItem);			
				if (!$scope.item.name) {
					$location.path('/landing');
				}
			}
			
			function setItem (item) {
				if (item.name == $routeParams.item) {
					$scope.item = item;
				}
			}
		}
})();