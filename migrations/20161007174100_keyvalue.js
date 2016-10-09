
exports.up = function( knex ) {
	return knex.schema.createTable( 'Entries', function ( table ) {
		table.string( 'key' );
		table.string( 'value' );
		table.string( 'timestamp' ); // string instead of timestamp so that it will accept unix values
	} );
};

exports.down = function( knex ) {
	return knex.schema.dropTable( 'Entries' );
};
