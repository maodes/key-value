( function () {
	'use strict';

	function HomeCtrl ( homeFactory ) {
		var self = this;

		function includeTimestamp () {
			var timestamp = null;

			if ( parseInt( self.timestamp ) ) {
				timestamp = self.timestamp;
			}

			return timestamp;
		}

		function submitEntry () {
			var data = {
				'key'       : self.key,
				'value'     : self.value,
				'timestamp' : includeTimestamp()
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

		function activate () {
			self.ctrlName      = 'HomeCtrl';
			self.key           = '';
			self.value         = '';
			self.outputMessage = 'No Data. Please fill form on the right section and submit';

			// methods/functions
			self.submitEntry      = submitEntry;
			self.includeTimestamp = includeTimestamp;
		}

		// expose activate for test purposes
		self.activate = activate;

		activate();
	}

	angular.module( 'app.home' )
		.controller( 'HomeCtrl', HomeCtrl );
} )();
