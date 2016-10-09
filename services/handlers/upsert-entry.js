'use strict';

var db = require( '../../db.js' ); // database connection
module.exports = function ( req, res ) {
	function catchError ( err ) {
		res.status( 500 ).send( 'Request error: ' + err );
	}

	function updateEntry () {
		return db( 'Entries' )
			.where( 'key', req.body.key )
			.update( req.body );
	}

	function insertData () {
		return db( 'Entries' )
			.insert( req.body );
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
			.then( function () {
				res.status( 200 ).send( { 'message' : 'Added New Entry' } );
			}, catchError );
	}

	function hasEntry () {
		updateEntry()
			.then( function () {
				res.status( 200 ).send( { 'message' : 'Updated Entry' } );
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