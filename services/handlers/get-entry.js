'use strict';

var db = require( '../../db.js' );

module.exports = function ( req, res ) {
	var reqData = {
		'key' : req.params.key
	};

	if ( req.params.timestamp ) {
		reqData.timestamp = req.params.timestamp;
	}

	function getEntry () {
		return db( 'Entries' )
			.where( reqData )
			.select()
			.orderBy( 'timestamp', 'desc' );
	}

	getEntry()
		.then( function ( result ) {
			res.status( 200 ).send( {
				'message' : result.length > 0 ? 'Got one' : 'Got none',
				'data'    : result[ 0 ] || {} // get only the latest
			} );
		} )
		.catch( function ( err ) {
			res.status( 500 ).send( 'Unable to get entry: ' + err );
		} );
};