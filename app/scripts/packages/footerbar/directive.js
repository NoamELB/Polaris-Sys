/*===========================================================================
** Footerbar directive
*===========================================================================*/
(function(){
	'use strict';

	angular
		.module('app.footerbar')
		.directive('footerBar', footerBar);


	function footerBar () {
	    return {
		  	restrict: 'E',
		  	template: '<span class="footer-wrap"><a tooltip-html-unsafe="{{::about}}" tooltip-trigger="click" href=""><b>About</b></a></span>',
		  	controller: 'FooterCtrl'
	    };
	}
})();