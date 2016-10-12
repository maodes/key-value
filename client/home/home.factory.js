( function () {
	'use strict';

	function homeFactory ( moment, apiFactory ) {
		function restructureJSON ( data ) {
			var newData = {};

			newData[ data.key ] = data.value;

			return newData;
		}

		function cleanData ( data ) {
			if ( data.value === '' ) {
				delete data.value;
			}

			return data;
		}

		function saveUpdateEntry ( data ) {
			return apiFactory.saveEntry.save( restructureJSON( data ) ).$promise;
		}

		function getEntry ( data ) {
			var apiActions = {
				'0' : apiFactory.getWithTimestamp,
				'1' : apiFactory.getWithoutTimestamp
			};

			return apiActions[ Number( !data.timestamp ) ].get( data ).$promise;
		}

		function submitEntry ( data ) {
			var apiActions = {
				'0' : this.saveUpdateEntry,
				'1' : this.getEntry
			};

			data = cleanData( data );

			return apiActions[ Number( !data.value ) ]( data );
		}

		return {
			'submitEntry'     : submitEntry,
			'getEntry'        : getEntry,
			'saveUpdateEntry' : saveUpdateEntry,
			'cleanData'       : cleanData,
			'restructureJSON' : restructureJSON
		};
	}

	angular.module( 'app.home' )
		.factory( 'homeFactory', homeFactory );
} )();