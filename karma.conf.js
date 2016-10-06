// Karma configuration
// Generated on Thu Oct 06 2016 10:30:39 GMT+0800 (China Standard Time)

module.exports = function ( config ) {
	config.set( {

		// base path that will be used to resolve all patterns (eg. files, exclude)
		'basePath' : './',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		'frameworks' : [ 'mocha', 'chai', 'sinon', 'chai-sinon', 'jquery-chai' ],


		// list of files / patterns to load in the browser
		'files' : [
			'bower_components/jquery/dist/jquery.min.js',
			'bower_components/angular/angular.min.js',
			'bower_components/angular-ui-router/release/angular-ui-router.min.js',
			'bower_components/bootstrap/dist/js/bootstrap.min.js',
			'bower_components/less/dist/less.min.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/moment/min/moment.min.js',
			'bower_components/angular-moment/angular-moment.min.js',

			'client/app.module.js',
			'client/*.js',
			'client/**/*.module.js',
			'client/**/*.js',
			'client/*.html',
			'client/**/*.html',
			'client/app.routes.js',


			'client/**/test/*.js'
		],


		// list of files to exclude
		'exclude': [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		'preprocessors' : {
			'client/**/*.js'   : [ 'coverage' ],
			'client/**/*.html' : [ 'ng-html2js' ]
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		'reporters': [ 'mocha', 'coverage', 'threshold' ],


		// web server port
		'port' : 9876,


		// enable / disable colors in the output (reporters and logs)
		'colors': true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		'logLevel' : config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		'autoWatch' : true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		'browsers' : [ 'PhantomJS' ],

		'thresholdReporter' : {
			'statements' : 100,
			'branches'   : 100,
			'functions'  : 100,
			'lines'      : 100
		},

		'plugins' : [
			'karma-mocha',
			'karma-chai',
			'karma-sinon',
			'karma-chai-sinon',
			'karma-mocha-reporter',
			'karma-phantomjs-launcher',
			'karma-coverage',
			'karma-jquery-chai',
			'karma-ng-html2js-preprocessor',
			'karma-threshold-reporter'
		],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		'singleRun' : true,

		// Concurrency level
		// how many browser should be started simultaneous
		'concurrency' : Infinity,

		'ngHtml2JsPreprocessor' : {
			'stripPrefix' : 'client',
			'moduleName'  : 'templates'
		}
	} );
};
