'use strict';

var handlers = require( './handlers' );

module.exports = function ( app ) {
	// list routes here with their corresponding handler

	app.post( '/api/v1/entry', handlers.upsertEntry );
};