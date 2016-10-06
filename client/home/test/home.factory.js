'use strict';

describe( 'homeFactory test', function () {
	var factory;

	beforeEach( module( 'app' ) );

	beforeEach( inject( function ( homeFactory ) {
		factory = homeFactory;
	} ) );

	describe( 'getMonths method', function () {
		it( 'should return an array that contains months', function () {
			var data = factory.getMonths();

			expect( data.length ).equal( 12 );
			expect( data[ 0 ] ).equal( 'Jan' );
			expect( data[ 1 ] ).equal( 'Feb' );
			expect( data[ 2 ] ).equal( 'Mar' );
			expect( data[ 3 ] ).equal( 'Apr' );
			expect( data[ 4 ] ).equal( 'May' );
			expect( data[ 5 ] ).equal( 'Jun' );
			expect( data[ 6 ] ).equal( 'Jul' );
			expect( data[ 7 ] ).equal( 'Aug' );
			expect( data[ 8 ] ).equal( 'Sep' );
			expect( data[ 9 ] ).equal( 'Oct' );
			expect( data[ 10 ] ).equal( 'Nov' );
			expect( data[ 11 ] ).equal( 'Dec' );
		} );
	} );

	describe( 'getDays method', function () {
		it( 'should return an array that contains days', function () {
			var data = factory.getDays();

			expect( data.length ).equal( 7 );
			expect( data[ 0 ] ).equal( 'Sun' );
			expect( data[ 1 ] ).equal( 'Mon' );
			expect( data[ 2 ] ).equal( 'Tue' );
			expect( data[ 3 ] ).equal( 'Wed' );
			expect( data[ 4 ] ).equal( 'Thu' );
			expect( data[ 5 ] ).equal( 'Fri' );
			expect( data[ 6 ] ).equal( 'Sat' );
		} );
	} );

	describe( 'getHours method', function () {
		it( 'should return an array that contains hours', function () {
			var data = factory.getHours();

			expect( data.length ).equal( 12 );
		} );
	} );

	describe( 'getSeconds method', function () {
		it( 'should return an array that contains hours', function () {
			var data = factory.getSeconds();

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
} );