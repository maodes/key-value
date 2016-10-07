( function () {
	'use strict';

	function HomeCtrl ( homeFactory ) {
		var self = this;

		function includeDateTime ( data ) {
			if ( self.includeDate ) {
				data.dateTime = homeFactory.convertToDisplay( self.date ) + ' ' + self.selectedHour + ':' + self.selectedMin + ' ' + self.selectedPeriod;
			}
		}

		function submitEntry () {
			var data = {
				'key'   : self.key,
				'value' : self.value
			};

			includeDateTime( data );
			// TODO: factory call in the next line should return a promise
			homeFactory.submitEntry( data );
		}

		function getDate () {
			return homeFactory.convertToDisplay( self.date );
		}
		

		function activate () {
			self.ctrlName   = 'HomeCtrl';
			self.key        = '';
			self.value      = '';
			self.year       = '';
			self.date       = new Date();
			self.timePeriod = [ 'AM', 'PM' ];
			// get values from factory so that controller won't be bloated
			self.hours   = homeFactory.getHours();
			self.minutes = homeFactory.getMinutes();

			self.submitEntry     = submitEntry;
			self.getDate         = getDate;
			self.includeDateTime = includeDateTime;
		}

		// expose activate for test purposes
		self.activate = activate;

		activate();
	}

	angular.module( 'app.home' )
		.controller( 'HomeCtrl', HomeCtrl );
} )();