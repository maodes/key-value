( function () {
	'use strict';

	function calendar () {
		return {
			'templateUrl'      : '/calendar/calendar.html',
			'controller'       : 'CalendarCtrl',
			'controllerAs'     : 'vm',
			'bindToController' : true,
			'scope'            : {
				'model' : '='
			}
		};
	}

	angular.module( 'app.home' )
		.directive( 'calendar', calendar );
} )();