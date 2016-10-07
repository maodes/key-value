'use strict';

describe( 'homeFactory test', function () {
	var factory;

	beforeEach( module( 'app' ) );

	beforeEach( inject( function ( homeFactory ) {
		factory = homeFactory;
	} ) );

	describe( 'getHours method', function () {
		it( 'should return an array that contains hours', function () {
			var data = factory.getHours();

			expect( data.length ).equal( 12 );
		} );
	} );

	describe( 'getMinutes method', function () {
		it( 'should return an array that contains hours', function () {
			var data = factory.getMinutes();

			expect( data.length ).equal( 60 );
		} );
	} );

	describe( 'getEntry method', function () {
		// TODO: refactor test once backend is ready
		it( 'should exists', function () {
			expect( factory.getEntry ).not.equal( undefined );
		} );
	} );

	describe( 'submitEntry method', function () {
		// TODO: refactor test once backend is ready
		it( 'should exists', function () {
			expect( factory.submitEntry ).not.equal( undefined );
		} );

		it( 'should trigger saveUpdateEntry when key and value or timestamp are present', function () {
			var spy  = sinon.spy( factory, 'saveUpdateEntry' );
			var data = {
				'key'      : 'Jedi',
				'value'    : 'Obi Wan',
				'dateTime' : 'Oct 6 2016'
			};

			factory.submitEntry( data );
			expect( spy.callCount ).equal( 1 );
		} );

		it( 'should trigger getEntry when only key ( with/without timestamp) is provided', function () {
			var spy  = sinon.spy( factory, 'getEntry' );
			var data = {
				'key' : 'Jedi'
			};

			factory.submitEntry( data );
			expect( spy.callCount ).equal( 1 );
		} );
	} );

	describe( 'convertToUTC method', function () {
		it( 'should convert date into utc format', function () {
			expect( factory.convertToUTC( 'Oct 6 2016' ) ).equal( 1475683200 );
		} );
	} );

	describe( 'cleanData method', function () {
		it( 'should remove value if it is an empty string', function () {
			var data = {
				'key'   : 'Yoda',
				'value' : ''
			};

			expect( factory.cleanData( data ).value ).equal( undefined );
		} );

		it( 'should remove dateTime if it is an empty string', function () {
			var data = {
				'key'      : 'Yoda',
				'value'    : 'Train you must',
				'dateTime' : ''
			};

			expect( factory.cleanData( data ).dateTime ).equal( undefined );
		} );
	} );

	describe( 'convertToDisplay method', function () {
		it( 'should convert date to correct format', function () {
			expect( factory.convertToDisplay( '2016-10-06T17:00:00+08:00' ) ).equal( 'Thu Oct 06 2016' );
		} );
	} );
} );