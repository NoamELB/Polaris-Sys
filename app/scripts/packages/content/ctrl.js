/*===========================================================================
** Content controller
*===========================================================================*/
(function(){
	'use strict';

	angular
		.module('app.content')
		.controller('ContentCtrl', contentCtrl);

		contentCtrl.$inject = ['$scope', '$location', '$routeParams', 'Content'];

		function contentCtrl($scope, $location, $routeParams, Content) {
			$scope.item = {};
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
		}
})();