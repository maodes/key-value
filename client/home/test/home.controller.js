'use strict';

describe( 'HomeCtrl unit test', function () {
	var controller, factory, scope;

	beforeEach( module( 'app', 'templates' ) );

	beforeEach( inject( function ( $controller, homeFactory, $rootScope ) {
		factory    = homeFactory;
		scope = $rootScope.$new();
		controller = $controller( 'HomeCtrl', {
			'scope' : scope,
			'homeFactory' : factory
		} );
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
		it( 'should trigger api', inject( function ( $q ) {
			var deferred = $q.defer();
			deferred.resolve( { 'message' : 'Success' } );

			sinon.stub( factory, 'submitEntry' ).returns( deferred.promise );
			controller.submitEntry();

			scope.$apply();
			expect( controller.outputMessage ).equal( 'Success' );

			factory.submitEntry.restore();
		} ) );

		it( 'should catch error', inject( function ( $q ) {
			var deferred = $q.defer();

			controller.outputMessage = 'No Data';
			deferred.reject();

			sinon.stub( factory, 'submitEntry' ).returns( deferred.promise );
			controller.submitEntry();

			scope.$apply();
			expect( controller.outputMessage ).equal( 'No Data' );

			factory.submitEntry.restore();
		} ) );
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

			controller.includeDate    = true;
			controller.date           = '2016-10-06T17:00:00+08:00';
			controller.selectedHour   = '1';
			controller.selectedMin    = '09';
			controller.selectedPeriod = 'AM';

			expect( controller.includeDateTime() ).not.equal( null );
		} );
	} );
} );