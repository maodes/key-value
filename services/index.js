'use strict';

function routes ( app ) {
	// list here categories for the routes
	require( './home.js' )( app );
}

module.exports = routes;
