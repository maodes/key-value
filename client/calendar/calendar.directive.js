( function () {
	'use strict';

	function calendar () {
		return {
			'templateUrl' : '/calendar/calendar.html',
			'scope'       : {
				'model' : '='
			}
		};
	}

	angular.module( 'app.home' )
		.directive( 'calendar', calendar );
} )();