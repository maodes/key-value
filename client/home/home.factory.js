( function () {
	'use strict';

	function homeFactory () {
		return {
			'submitEntry'     : angular.noop,
			'getEntry'        : angular.noop,
			'saveUpdateEntry' : angular.noop,
			'convertToUTC'    : angular.noop,
			'getHours'        : angular.noop,
			'getSeconds'      : angular.noop,
			'getMonths'       : angular.noop,
			'getDays'         : angular.noop
		};
	}

	angular.module( 'app.home' )
		.factory( 'homeFactory', homeFactory );
} )();