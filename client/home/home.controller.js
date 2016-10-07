( function () {
	'use strict';

	function HomeCtrl ( homeFactory ) {
		var self = this;

		function submitEntry () {
			// TODO: factory call in the next line should return a promise
			homeFactory.submitEntry();
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

			self.submitEntry = submitEntry;
			self.getDate     = getDate;
		}

		// expose activate for test purposes
		self.activate = activate;

		activate();
	}

	angular.module( 'app.home' )
		.controller( 'HomeCtrl', HomeCtrl );
} )();