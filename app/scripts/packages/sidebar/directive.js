/*===========================================================================
** Sidebar directive
*===========================================================================*/
(function(){
	'use strict';

	angular
		.module('app.sidebar')
		.directive('sideBar', sideBar);


	function sideBar () {
	    return {
		  	restrict: 'E',
		  	templateUrl: 'partials/side-bar.html',
		  	controller: 'SidebarCtrl'		  	
	    };
	}
})();