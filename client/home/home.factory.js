( function () {
	'use strict';

	function homeFactory () {
		return {
			'submit'     : angular.noop,
			'getHours'   : angular.noop,
			'getSeconds' : angular.noop,
			'getMonths'  : angular.noop,
			'getDays'    : angular.noop
		};
	}

	angular.module( 'app.home' )
		.factory( 'homeFactory', homeFactory );
} )();