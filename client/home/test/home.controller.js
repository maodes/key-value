'use strict';

describe( 'HomeCtrl unit test', function () {
	var controller, factory, scope;

	beforeEach( module( 'app', 'templates' ) );

	beforeEach( inject( function ( $controller, homeFactory, $rootScope ) {
		factory    = homeFactory;
		scope      = $rootScope.$new();
		controller = $controller( 'HomeCtrl', {
			'scope' : scope,
			'homeFactory' : factory
		} );
	} ) );

	describe( 'activate method', function () {
		it( 'should be successfully created', function () {
			expect( controller ).not.equal( undefined );
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

	describe( 'includeTimestamp', function () {
		it( 'should return null if timestamp input field is empty or timestamp provided is invalid', function () {
			controller.timestamp = null;
			expect( controller.includeTimestamp() ).equal( null );
		} );

		it( 'should return the timestamp if the timestamp provided is valid', function () {
			controller.timestamp = new Date().getTime();
			expect( controller.includeTimestamp() ).equal( controller.timestamp );
		} );
	} );
} );
