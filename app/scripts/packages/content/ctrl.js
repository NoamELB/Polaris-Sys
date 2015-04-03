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