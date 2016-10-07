'use strict';

describe( 'calendar directive test', function () {
	var element, template;

	beforeEach( module( 'app', 'templates' ) );

	beforeEach( inject( function ( $compile, $rootScope ) {
		element  = angular.element( '<calendar model="\'Oct 06 2016\'"></calendar>' );
		template = $compile( element )( $rootScope );

		$rootScope.$digest();
	} ) );

	it( 'should successfully rendered', function () {
		expect( template.isolateScope().vm.model ).equal( 'Oct 06 2016' );
	} );
} );