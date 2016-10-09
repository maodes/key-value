'use strict';

var db = require( '../../db.js' );

module.exports = function ( req, res ) {
	var reqData = {
		'key'       : req.params.key,
		'timestamp' : req.params.timestamp || null
	};

	function getEntry () {
		return db( 'Entries' )
			.where( reqData )
			.select();
	}

	getEntry()
		.then( function ( result ) {
			res.status( 200 ).send( {
				'message' : result.length > 0 ? 'Got one' : 'Got none',
				'data'    : result[ 0 ] || {}
			} );
		} )
		.catch( function ( err ) {
			res.status( 500 ).send( 'Unable to get entry: ' + err );
		} );
};