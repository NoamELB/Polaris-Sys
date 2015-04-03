/*===========================================================================
** Titlebar controller - tooltip information
*===========================================================================*/

(function(){
	'use strict';

	angular
		.module('app.footerbar')
		.controller('FooterCtrl', footerCtrl);

	footerCtrl.$inject = ['$scope'];

	function footerCtrl ($scope) {
		$scope.about = '<p>Website created by: <br>'
		+ '<a target="_blank" href="https://www.linkedin.com/pub/tzook-shaked/a4/230/6a0">Tzook</a>'
		+ ' & <a target="_blank" href="https://www.linkedin.com/pub/noam-elboim/a6/372/a">Noam</a>.<br>'
		+ '<a target="_blank" href="mailto:tzook10@gmail.com">tzook10@gmail.com</a><br>'
		+ '<a target="_blank" href="mailto:noam@mail.com">noam@mail.com</a><br>'
		+ '<a target="_blank" href="https://github.com/NoamElb/Polaris-Sys">Source</a></p>';
	}
})();