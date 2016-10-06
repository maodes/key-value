( function () {

	'use strict';

	function config ( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/' );
		$stateProvider.state( 'home', {
			'url'          : '/',
			'templateUrl'  : '/home/home.html',
			'controller'   : 'HomeCtrl',
			'controllerAs' : 'vm'
		} );
	}

	angular.module( 'app.routes', [] )
		.config( config );
} )( );