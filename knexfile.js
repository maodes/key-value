module.exports = {

	'development' : {
		'client'     : 'postgresql',
		'connection' : {
			'database' : 'KeyValue',
			'user'     : 'postgres',
			'password' : 'postgres',
			'port'     : 5433,
			'host'     : '127.0.0.1'
		},

		'pool' : {
			'min' : 2,
			'max' : 10
		}
	}
};
