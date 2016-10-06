( function () {
	'use strict';

	function homeFactory ( moment ) {
		function getMonths () {
			return [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
		}

		function getDays () {
			return [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
		}

		function getSeconds () {
			var secArr = [];
			var i      = 0;

			for( i; i < 60; i++ ) {
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
			return moment( date ).unix();
		}

		function cleanData ( data ) {
			if ( data.value === '' ) {
				delete data.value;
			}

			if ( data.dateTime === '' ) {
				delete data.dateTime;
			}

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

		return {
			'submitEntry'     : submitEntry,
			'getEntry'        : angular.noop,
			'saveUpdateEntry' : angular.noop,
			'convertToUTC'    : convertToUTC,
			'getHours'        : getHours,
			'getSeconds'      : getSeconds,
			'getMonths'       : getMonths,
			'getDays'         : getDays,
			'cleanData'       : cleanData
		};
	}

	angular.module( 'app.home' )
		.factory( 'homeFactory', homeFactory );
} )();