( function () {
	'use strict';

	function HomeCtrl ( homeFactory ) {
		var self = this;

		function includeDateTime () {
			var timestamp = null;

			if ( self.includeDate ) {
				timestamp = homeFactory.convertToDisplay( self.date ) + ' ' + self.selectedHour + ':' + self.selectedMin + ' ' + self.selectedPeriod;
			}

			return timestamp;
		}

		function submitEntry () {
			var data = {
				'key'       : self.key,
				'value'     : self.value,
				'timestamp' : includeDateTime()
			};

			homeFactory.submitEntry( data )
				.then( function ( res ) {
					self.outputMessage = res.message;
					self.output        = res.data;
				} )
				.catch( function ( err ) {
					console.log( err );
				} );
		}

		function getDate () {
			return homeFactory.convertToDisplay( self.date );
		}

		function checkSelectedTime () {
			return !self.selectedHour || !self.selectedMin || !self.selectedPeriod;
		}
		

		function activate () {
			self.ctrlName      = 'HomeCtrl';
			self.key           = '';
			self.value         = '';
			self.year          = '';
			self.date          = new Date();
			self.timePeriod    = [ 'AM', 'PM' ];
			self.outputMessage = 'No Data. Please fill form on the right section and submit';
			// get values from factory so that controller won't be bloated
			self.hours   = homeFactory.getHours();
			self.minutes = homeFactory.getMinutes();

			// methods/functions
			self.submitEntry       = submitEntry;
			self.getDate           = getDate;
			self.includeDateTime   = includeDateTime;
			self.checkSelectedTime = checkSelectedTime;
		}

		// expose activate for test purposes
		self.activate = activate;

		activate();
	}

	angular.module( 'app.home' )
		.controller( 'HomeCtrl', HomeCtrl );
} )();