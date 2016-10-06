'use strict';

describe( 'HomeCtrl unit test', function () {
	var controller;

	beforeEach( module( 'app' ) );

	beforeEach( inject( function ( $controller ) {
		controller = $controller( 'HomeCtrl' );
	} ) );

	it( 'should be successfully created', function () {
		expect( controller ).not.equal( undefined );
	} );
} );