'use strict';

describe( 'homeFactory test', function () {
	var factory;

	beforeEach( module( 'app' ) );

	beforeEach( inject( function ( homeFactory ) {
		factory = homeFactory;
	} ) );

	describe( 'getEntry method', function () {
		it( 'should exists', function () {
			expect( factory.getEntry ).not.equal( undefined );
		} );
	} );

	describe( 'submitEntry method', function () {
		it( 'should exists', function () {
			expect( factory.submitEntry ).not.equal( undefined );
		} );

		it( 'should trigger saveUpdateEntry when key and value or timestamp are present', function () {
			var saveSpy    = sinon.spy( factory, 'saveUpdateEntry' );
			var data = {
				'key'       : 'Jedi',
				'value'     : 'Obi Wan',
				'timestamp' : 'Oct 6 2016'
			};

			factory.submitEntry( data );
			expect( saveSpy.callCount ).equal( 1 );
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

	describe( 'cleanData method', function () {
		it( 'should remove value if it is an empty string', function () {
			var data = {
				'key'   : 'Yoda',
				'value' : ''
			};

			expect( factory.cleanData( data ).value ).equal( undefined );
		} );
	} );

	describe( 'restructureJSON method', function () {
		it( 'should be able to restructure json before saving', function () {
			var data = {
				'key'       : 'Jedi',
				'value'     : 'Kenobi'
			};

			expect( Object.keys( factory.restructureJSON( data ) )[ 0 ] ).equal( 'Jedi' );
			expect( factory.restructureJSON( data )[ 'Jedi' ] ).equal( 'Kenobi' );
		} );
	} );
} );