/*global require, desc, task, jake, fail, complete, directory*/

(function() {
	"use strict";

	desc('Build and test');
	task('default', ['lint', 'test']);

	desc('Run jslint on all the JavaScript files');
	task('lint', function() {
		var lint = require('./build/lint/lint_runner.js');

		var files = new jake.FileList();
		files.include('Jakefile');
		files.include('lib/**/*.js');
		files.exclude('node_modules');

		var options = {
			node: true,
			strict: true
		};

		lint.validateFileList(files.toArray(), options);
	});

	desc('Run all the tests');
	task('test', function() {
		var reporter = require('nodeunit' ).reporters['default'];
		reporter.run(['test']);
	});

	desc('Run full integration');
	task('integrate', ['default'], function() {
		// TODO
	});
}());
