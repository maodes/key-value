( function () {
	'use strict';

	function homeFactory ( moment ) {

		function getMinutes () {
			var secArr = [];
			var i      = 0;

			for( i; i < 60; i++ ) {
				if ( i < 10 ) {
					i = '0' + i;
				}

				secArr.push( i );
			}

			return secArr;
		}

		function getHours () {
			var hrArr = [];
			var i     = 1;

			for( i; i < 13; i++ ) {
				hrArr.push( i );
			}

			return hrArr;
		}

		function convertToUTC ( date ) {
			return moment( date ).format( 'X' );
		}

		function cleanData ( data ) {
			if ( data.value === '' ) {
				delete data.value;
			}

			return data;
		}

		function saveUpdateEntry ( data ) {
			// TODO: make api call here
			return data;
		}

		function getEntry ( data ) {
			// TODO: make api call here
			return data;
		}

		function submitEntry ( data ) {
			var apiActions = {
				'0' : this.saveUpdateEntry,
				'1' : this.getEntry
			};

			data = cleanData( data );

			if ( data.dateTime ) {
				data.dateTime = convertToUTC( data.dateTime );
			}

			// TODO: this should return a promise
			apiActions[ Number( !data.value ) ]();
		}

		function convertToDisplay ( date ) {
			return moment( date ).format( 'ddd MMM DD YYYY' );
		}

		return {
			'submitEntry'      : submitEntry,
			'getEntry'         : getEntry,
			'saveUpdateEntry'  : saveUpdateEntry,
			'convertToUTC'     : convertToUTC,
			'getHours'         : getHours,
			'getMinutes'       : getMinutes,
			'cleanData'        : cleanData,
			'convertToDisplay' : convertToDisplay
		};
	}

	angular.module( 'app.home' )
		.factory( 'homeFactory', homeFactory );
} )();