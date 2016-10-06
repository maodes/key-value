( function () {
	'use strict';

	function HomeCtrl ( homeFactory ) {
		var self = this;

		function submitEntry () {
			homeFactory.submitEntry();
		}

		function activate () {
			self.ctrlName   = 'HomeCtrl';
			self.key        = '';
			self.value      = '';
			self.year       = '';
			self.timePeriod = [ 'am', 'pm' ];
			// get values from factory so that controller won't be bloated
			self.months     = homeFactory.getMonths();
			self.days       = homeFactory.getDays();
			self.hours      = homeFactory.getHours();
			self.seconds    = homeFactory.getSeconds();

			self.submitEntry = submitEntry;
		}

		// expose activate for test purposes
		self.activate = activate;

		activate();
	}

	angular.module( 'app.home' )
		.controller( 'HomeCtrl', HomeCtrl );
} )();