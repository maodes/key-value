'use strict';

var db = require( '../../db.js' ); // database connection
module.exports = function ( req, res ) {
	function catchError ( err ) {
		res.status( 500 ).send( 'Request error: ' + err );
	}

	function updateEntry () {
		return db( 'Entries' )
			.where( {
				'key'       : req.body.key,
				'timestamp' : req.body.timestamp
			} )
			.update( req.body )
			.returning( [ 'key', 'value', 'timestamp' ] );
	}

	function insertData () {
		return db( 'Entries' )
			.insert( req.body )
			.returning( [ 'key', 'value', 'timestamp' ] );
	}

	function findEntry () {
		return db( 'Entries' )
			.select()
			.where( {
				'key'       : req.body.key,
				'timestamp' : req.body.timestamp || null
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