/*▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬ Fliters              	  ▬▬
▬▬ HTML convertor             ▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬*/

(function(){
	'use strict';

	angular
		.module('app.module')
		.filter('strToHtml', strToHtml);

	strToHtml.$inject = ['$sce'];

	function strToHtml ($sce) {
	    return function(string) {
	        return $sce.trustAsHtml(string);
	    };
	}
})();