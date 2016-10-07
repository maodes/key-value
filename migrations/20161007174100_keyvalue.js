
exports.up = function( knex ) {
	return knex.schema.createTable( 'Entries', function ( table ) {
		table.string( 'key' );
		table.string( 'value' );
		table.timestamp( 'timestamp' );
	} );
};

exports.down = function( knex ) {
	return knex.schema.dropTable( 'Entries' );
};
