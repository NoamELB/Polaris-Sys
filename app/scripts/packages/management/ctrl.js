/*===========================================================================
** Management controller
*===========================================================================*/
(function(){
	'use strict';

	angular
		.module('app.management')
		.controller('ManagementCtrl', managementCtrl);

		managementCtrl.$inject = ['$scope', 'ManagementContent'];

		function managementCtrl($scope, ManagementContent) {
			ManagementContent.success(function(data) {
				$scope.managementContent = data;
			});
		}
})();