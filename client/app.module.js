( function () {
	'use strict';

	angular.module( 'app', [
		'ui.router',
		'ngResource',
		'app.routes',
		'ui.bootstrap',
		'angularMoment',
		'app.api',
		'app.home'
	] );
} )();