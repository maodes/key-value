'use strict';

describe( 'HomeCtrl unit test', function () {
	var controller, factory;

	beforeEach( module( 'app' ) );

	beforeEach( inject( function ( $controller, homeFactory ) {
		factory    = homeFactory;
		controller = $controller( 'HomeCtrl' );
	} ) );

	describe( 'activate method', function () {
		it( 'should be successfully created', function () {
			expect( controller ).not.equal( undefined );
		} );

		it( 'should trigger homeFactory methods for the date and time', function () {
			var getMonthsSpy  = sinon.spy( factory, 'getMonths' );
			var getDaysSpy    = sinon.spy( factory, 'getDays' );
			var getHoursSpy   = sinon.spy( factory, 'getHours' );
			var getSecondsSpy = sinon.spy( factory, 'getSeconds' );

			controller.activate();

			expect( getMonthsSpy.callCount ).equal( 1 );
			expect( getDaysSpy.callCount ).equal( 1 );
			expect( getHoursSpy.callCount ).equal( 1 );
			expect( getSecondsSpy.callCount ).equal( 1 );
		} );
	} );

	describe( 'submitEntry method', function () {
		it( 'should trigger api', function () {
			var spy = sinon.spy( factory, 'submitEntry' );
			controller.submitEntry();
			expect( spy.callCount ).equal( 1 );
		} );
	} );
} );