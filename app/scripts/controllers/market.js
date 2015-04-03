/*===========================================================================
** 
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('market', [])
	.controller('MarketCtrl', ['$scope', '$location', '$routeParams', 'Content', 'Head', function($scope, $location, $routeParams, Content, Head) {
		$scope.item = {};
		Head.setHead("Market",
					"Polaris Star provides different markets, from federal assets and safe cities up to airports, correctional facilities and maritime structures.",
					"Federal Assets, Safe Cities, Correctional Facilities, Airports, Borders, Maritime, Mobile Infrastructure, Transportation");
		Content.success(function(data) {	
			angular.forEach((data[0])[$routeParams.part], function(item) {
				if (item.name == $routeParams.item) {
					$scope.item = item;
				}
			});			
			if (!$scope.item.name) {
				$location.path('/landing');
			}
		});
	}]);
})(angular);