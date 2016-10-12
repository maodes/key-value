'use strict';

var db = require( '../../db.js' ); // database connection
module.exports = function ( req, res ) {

	var key = Object.keys( req.body )[ 0 ];

	function catchError ( err ) {
		res.status( 500 ).send( 'Request error: ' + err );
	}

	function updateEntry () {
		return db( 'Entries' )
			.where( {
				'key' : key
			} )
			.update( {
				'value' : req.body[ key ]
			} )
			.returning( [ 'key', 'value', 'timestamp' ] );
	}

	function insertData () {
		return db( 'Entries' )
			.insert( {
				'key'       : key,
				'value'     : req.body[ key ],
				'timestamp' : new Date().getTime()
			} )
			.returning( [ 'key', 'value', 'timestamp' ] );
	}

	function findEntry () {
		return db( 'Entries' )
			.select()
			.where( {
				'key' : key
			} );
	}

	function noEntry () {
		insertData()
			.then( function ( result ) {
				res.status( 200 ).send( { 
					'message' : 'Added New Entry',
					'data'    : result[ 0 ]
				} );
			}, catchError );
	}

	function hasEntry () {
		updateEntry()
			.then( function ( result ) {
				res.status( 200 )
					.send( { 
						'message' : 'Updated Entry',
						'data'    : result[ 0 ]
					} );
			}, catchError );
	}

	findEntry()
		.then( function ( result ) {
			if ( !result.length ) {
				noEntry();
				return;
			}

			hasEntry();
		} )
		.catch( catchError );
};
