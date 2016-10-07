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
			var getHoursSpy   = sinon.spy( factory, 'getHours' );
			var getSecondsSpy = sinon.spy( factory, 'getMinutes' );

			controller.activate();

			expect( getHoursSpy.callCount ).equal( 1 );
			expect( getSecondsSpy.callCount ).equal( 1 );
		} );
	} );

	describe( 'submitEntry method', function () {
		it( 'should trigger api', function () {
			var spy = sinon.stub( factory, 'submitEntry' );
			controller.submitEntry();
			expect( spy.callCount ).equal( 1 );
		} );
	} );

	describe( 'getDate method', function () {
		it( 'should return date with correct format', function () {
			var spy = sinon.stub( factory, 'convertToDisplay' );
			controller.getDate();
			expect( spy.callCount ).equal( 1 );
		} );
	} );

	describe( 'includeDateTime method', function () {
		it( 'should include dateTime when includeDate is checked', function () {
			var data = {};

			controller.includeDate    = true;
			controller.date           = '2016-10-06T17:00:00+08:00';
			controller.selectedHour   = '1';
			controller.selectedMin    = '09';
			controller.selectedPeriod = 'AM';
			controller.includeDateTime( data );
			expect( data.dateTime ).not.equal( undefined );
		} );
	} );
} );