var gulp             = require( 'gulp' );
var path             = require( 'path' );
var karma            = require( 'karma');
var karmaParseConfig = require( 'karma/lib/config' ).parseConfig;

function runKarma( configFilePath, options, cb ) {

	configFilePath = path.resolve( configFilePath );

	var server = karma.server;
	var config = karmaParseConfig( configFilePath, {} );

	Object.keys( options ).forEach( function( key ) {
		config[ key ] = options[ key ];
	} );

	server.start( config, function ( exitCode ) {
		console.log( 'Karma has exited with ' + exitCode );
		cb();
		process.exit( exitCode );
	} );
}

gulp.task( 'test', function ( cb ) {
	runKarma( 'karma.conf.js', {
		autoWatch: false,
		singleRun: true
	}, cb );
} );