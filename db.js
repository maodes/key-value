var config = require('./knexfile.js');  
var env    = 'development';  
var knex   = require( 'knex' )( config[ env ] );

// pre-create knex releated tables. for some reason, knex is unable to create knex_migrations table
// error: create table if not exists "knex_migrations" - syntax error at or near "not" 
// it seems that it has some issues createTableIfNotExists

function showError ( err ) {
	console.log( err );
}

function createKnexMigrationLock () {
	return knex.schema.createTable( 'knex_migrations_lock', function ( table ) {
		table.integer( 'is_locked' );
	} ).then( function () {
		console.log( 'Successfully created knex related tables' );
		knex.migrate.latest( [ config ] );
	}, showError )
	.catch( showError );
}

function checkExistence ( exists ) {
	if ( !exists ) {
		return knex.schema.createTable( 'knex_migrations', function ( table ) {
			table.increments( 'id' );
			table.string( 'name' );
			table.integer( 'batch' );
			table.timestamp( 'migration_time' );
		} )
		.then( createKnexMigrationLock, showError )
		.catch( showError );
	}

	knex.migrate.latest( [ config ] );
}

knex.schema.hasTable( 'knex_migrations' )
	.then( checkExistence )
	.catch( showError );

module.exports = knex;

