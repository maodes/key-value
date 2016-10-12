'use strict';

var db      = require( '../../db.js' ); // database connection
var Promise = require( 'bluebird' );

module.exports = function ( req, res ) {

	var key = Object.keys( req.body )[ 0 ];

	function catchError ( err ) {
		res.status( 500 ).send( 'Request error: ' + err );
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
			.where( {
				'key'   : key,
				'value' : req.body[ key ] 
			} )
			.orderBy( 'timestamp', 'desc' )
			.select();
	}

	function findKeyLatest () {
		return db( 'Entries' )
			.where( {
				'key' : key
			} )
			.orderBy( 'timestamp', 'desc' )
			.select();
	}

	function noEntry () {
		insertData()
			.then( function ( result ) {
				res.status( 200 ).send( {
					'message' : 'Entry saved',
					'data'    : result[ 0 ]
				} );
			}, catchError );
	}

	Promise.all( [
		findEntry(),
		findKeyLatest()
	] )
	.then( function ( results ) {
		if ( !results[ 0 ].length || results[ 0 ][ 0 ].timestamp !== results[ 1 ][ 0 ].timestamp ) {
			noEntry();
			return;
		}

		res.status( 200 ).send( {
			'message' : 'No changes in entry.',
			'data'    : results[ 0 ][ 0 ]
		} );
	} )
	.catch( catchError );
};
