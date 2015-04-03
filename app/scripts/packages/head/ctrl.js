/*===========================================================================
** Controller of the head
*===========================================================================*/
(function(){
	'use strict';

	angular
		.module('app.head')
		.controller('HeaderCtrl', headerCtrl);

		headerCtrl.$inject = ['$scope', '$location', 'Head'];

		function headerCtrl($scope, $location, Head) {
			$scope.Head = Head;

			switch ($location.path()) {
				case "/landing":
					Head.setHead("Integration Solutions",
						"Polaris Star provide creative integration solutions using cutting-edge technologies of various kinds, providing to various nation-level entities.",
						"Integration, Solutions, Technologies, Markets, Intelligence, Aviation, Communication, Safe Cities, Federal Assets, Airports, Borders");
					break;
				case "/main/integration":
					Head.setHead("Integration",
								"Polaris Star supply nation quality security technologies that provide fully covered security solutions for your needs.",
								"Surveillance Solutions, Biometric Management, Command & Control Centers, Perimeter Protection");
					break;
				case "/main/intelligence":
					Head.setHead("Intelligence",
								"Polaris Star brings cutting edge intelligence solutions and services, which amongst others include:Tactial and strategic Integration, Analysis of HUMINT and SIGINT and Cyber security for a range of intelligence solutions.",
								"Cyber Security, SIGINT Protection, Sensors, Covert Platforms, Intelligence Integration, Analytics, Intelligence C&C");
					break;
				case "/main/aviation":
					Head.setHead("Aviation",
								"Polaris Star has fore-front expertise in the aviation field, bringing solutions to many services and systems.",
								"UAVs, SIGINT, Tools, Support, Maintenance, Repair, Platforms");
					break;
				case "/main/communication":
					Head.setHead("Communication",
								"Polaris Star supply cutting-edge nation quality communication technologies that include - telephony networks and radio networks, high quality broadband IP access and Cellular network access, different level of radio frequencies and data encryption.",
								"Infrastructure, Satallite Communication, Radio Communication");
					break;
				case "/main/market":
					Head.setHead("Market",
								"Polaris Star provides different markets, from federal assets and safe cities up to airports, correctional facilities and maritime structures.",
								"Federal Assets, Safe Cities, Correctional Facilities, Airports, Borders, Maritime, Mobile Infrastructure, Transportation");
					break;
				case "/management":
					Head.setHead("Management",
						"Details about the management of Polaris Star.",
						"Management, Polaris, Star, Markets, Intelligence, Aviation, Communication, Safe Cities, Federal Assets, Airports, Borders");
					break;
				case "/contact":
					Head.setHead("Contact Us",
						"Details for contacting us, Office in Israel: Azrieli Center, Derech Menachem Begin 132, Tel Aviv-Yafo. contact@polaris-sys.com",
						"Integration, Solutions, Technologies, Markets, Intelligence, Aviation, Communication, Safe Cities, Federal Assets, Airports, Borders");
			}
		}
})();