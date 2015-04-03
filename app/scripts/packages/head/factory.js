/*===========================================================================
** Factory of the header
*===========================================================================*/
(function(){
	'use strict';

	angular
		.module('app.head')
		.factory('Head', head);

	function head () {
		var title ='', des = '', keywords = '';
		return {
			getTitle: function () { return title; },
			getMetaDes: function () { return des; },
			getMetaKey: function () { return keywords; },
			// Change title, meta description and keywords
			setHead: function (str1, str2, str3) {
				title = "Polaris Star - " + str1;
				des = str2;
				keywords = str3;
			}
		};
	}
})();