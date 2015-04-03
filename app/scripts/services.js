/*▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬ Services              	  ▬▬
▬▬ HTTP request for the JSON  ▬▬
▬▬ data from local files	  ▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬*/

(function(){
	'use strict';

	angular
		.module('app.module')
		.service('Content', content)
		.service('ManagementContent', managementContent)
		.run(contentRun)
		.run(managementContentRun);

	content 			.$inject = ['$http'];
	managementContent 	.$inject = ['$http'];
	contentRun 			.$inject = ['Content'];
	managementContentRun.$inject = ['ManagementContent'];

	function content ($http) {
	    return $http.get('details/content.json');
	}
	function managementContent ($http) {
		return $http.get('details/management.json');
	}

	/* Run those on load and not every time when called*/
	function contentRun (Content) {
	    Content;
	}
	function managementContentRun (ManagementContent) {
	    ManagementContent;
	}
})();
		
