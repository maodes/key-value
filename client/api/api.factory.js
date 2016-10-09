( function () {
	'use strict';

	function apiFactory ( $resource ) {

		function saveEntry () {
			return $resource( '/api/v1/entry' );
		}

		return {
			'saveEntry' : saveEntry()
		};
	}

	angular.module( 'app.api' )
		.factory( 'apiFactory', apiFactory );
} )();