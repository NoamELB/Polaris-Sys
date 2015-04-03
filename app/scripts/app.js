/*▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬ Main module of the app.	  ▬▬
▬▬ Collects all the modules,  ▬▬
▬▬ creates a filter & configs ▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬*/
(function(){
	'use strict';

	angular
		.module('app.module', [
			'ngRoute',
    		'ui.bootstrap',
			'app.titlebar',
			'app.footerbar', 
			'app.sidebar', 
			'app.content', 
			'app.market', 
			'app.management', 
			'app.head', 
			'app.main' 
	]);
})();