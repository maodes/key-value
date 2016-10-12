'use strict';

var handlers = require( './handlers' );

module.exports = function ( app ) {
	// list routes here with their corresponding handler

	// for adding/updating an entry
	app.post( '/api/v1/entry', handlers.insertEntry );

	// for getting a single entry
	app.get( '/api/v1/entry/:key', handlers.getEntry );
	app.get( '/api/v1/entry/:key/timestamp/:timestamp', handlers.getEntry );

};