/*===========================================================================
** Titlebar directive
*===========================================================================*/
(function(){
	'use strict';

	angular
		.module('app.titlebar')
		.directive('titleBar', titleBar);


	function titleBar () {
  		return {
		  	restrict: 'E',
		  	templateUrl: 'partials/title-bar.html',
		  	controller: 'TitlebarCtrl'
	    };
	}
})();