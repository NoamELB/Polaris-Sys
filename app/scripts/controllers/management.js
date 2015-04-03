/*===========================================================================
** 
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('management', [])
	.controller('ManagementCtrl', ['$scope', 'Head', 'ManagementContent', function($scope, Head, ManagementContent) {
		Head.setHead("Management",
					"Details about the management of Polaris Star.",
					"Management, Polaris, Star, Markets, Intelligence, Aviation, Communication, Safe Cities, Federal Assets, Airports, Borders");
		
		ManagementContent.success(function(data) {
			$scope.managementContent = data;
		});
	}]);
})(angular);