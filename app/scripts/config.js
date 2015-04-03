/*▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬ Config              		  ▬▬
▬▬ Routes handling            ▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬*/

(function(){
	'use strict';

	angular
		.module('app.module')
		.config(configure);

	configure.$inject = ['$routeProvider', '$locationProvider'];
	
	function configure ($routeProvider, $locationProvider) {
		$routeProvider.
		when('/landing', {
			templateUrl: 'partials/landing.html'
		}).
		when('/contact', {
			templateUrl: 'partials/contact.html'
		}).
		when('/management', {
			templateUrl: 'partials/management.html',
			controller: 'ManagementCtrl'
		}).
		when('/main/intelligence', {
			redirectTo: '/main/intelligence/overview'
		}).
		when('/main/integration', {
			redirectTo: '/main/integration/overview'
		}).
		when('/main/communication', {
			redirectTo: '/main/communication/overview'
		}).
		when('/main/aviation', {
			redirectTo: '/main/aviation/overview'
		}).
		when('/main/:part/:item', {
			templateUrl: 'partials/contnet.html',
			controller: 'ContentCtrl'
		}).	
		otherwise({
			redirectTo: '/landing' // default page
		});
		$locationProvider.html5Mode(true);
	}
})();