/*===========================================================================
** Titlebar controller
*===========================================================================*/

(function(){
	'use strict';

	angular
		.module('app.titlebar')
		.controller('TitlebarCtrl', titlebarCtrl);

	titlebarCtrl.$inject = ['$scope', '$location'];

	function titlebarCtrl ($scope, $location) {
		$scope.titlebar = [
			{"url":"/main/integration", "content": "Intergation", "isClicked": false},
			{"url":"/main/intelligence", "content": "Intelligence", "isClicked": false},
			{"url":"/main/aviation", "content": "Aviation", "isClicked": false},
			{"url":"/main/communication", "content": "Communication", "isClicked": false},
			{"url":"/management", "content": "Management", "isClicked": false},
			{"url":"/contact", "content": "Contact Us", "isClicked": false}
		];
		$scope.isClicked = false;

		/* check when URL changes to change clicked class */
		$scope.$on("$routeChangeSuccess", function () {
			$scope.isClicked = false;
			angular.forEach($scope.titlebar, function(li, index) {
	    		li.isClicked = ($location.path().indexOf(li.url) == 0)
	    	});
		});
	}
})();