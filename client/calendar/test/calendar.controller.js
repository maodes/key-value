'use strict';

describe( 'CalendarCtrl test', function () {
	var controller;

	beforeEach( module( 'app' ) );

	beforeEach( inject( function ( $controller ) {
		controller = $controller( 'CalendarCtrl' );
	} ) );

	it( 'should be created successfully', function () {
		expect( controller ).not.equal( undefined );
	} );
} );