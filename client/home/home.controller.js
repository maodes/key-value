( function () {
	'use strict';

	function HomeCtrl () {
		var self = this;

		function activate () {
			self.ctrlName = 'HomeCtrl';
		}

		activate();
	}

	angular.module( 'app.home' )
		.controller( 'HomeCtrl', HomeCtrl );
} )();