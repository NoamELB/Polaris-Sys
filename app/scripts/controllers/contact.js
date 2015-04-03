/*===========================================================================
** 
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('contact', [])
	.controller('ContactCtrl', ['$scope', 'Head', function($scope, Head) {
		Head.setHead("Contact Us",
					"Details for contacting us, Office in Israel: Azrieli Center, Derech Menachem Begin 132, Tel Aviv-Yafo. contact@polaris-sys.com",
					"Integration, Solutions, Technologies, Markets, Intelligence, Aviation, Communication, Safe Cities, Federal Assets, Airports, Borders");
	}]);
})(angular);