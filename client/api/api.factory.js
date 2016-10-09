( function () {
	'use strict';

	function apiFactory ( $resource ) {

		function saveEntry () {
			return $resource( '/api/v1/entry' );
		}

		function getWithoutTimestamp () {
			return $resource( '/api/v1/entry/:key', {
				'key' : '@key' 
			} );
		}

		function getWithTimestamp () {
			return $resource( '/api/v1/entry/:key/timestamp/:timestamp', {
				'key'       : '@key',
				'timestamp' : '@timestamp'
			} );
		}

		return {
			'saveEntry'           : saveEntry(),
			'getWithoutTimestamp' : getWithoutTimestamp(),
			'getWithTimestamp'    : getWithTimestamp()
		};
	}

	angular.module( 'app.api' )
		.factory( 'apiFactory', apiFactory );
} )();