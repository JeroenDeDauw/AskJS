/*global require, desc, task, jake, fail, complete, directory*/

(function() {
	"use strict";

	task('default', ['lint']);

	desc('Run jslint on all the JavaScript files');
	task('lint', function() {
		var lint = require('./build/lint/lint_runner.js');

		var files = new jake.FileList();
		files.include('Jakefile');
		files.include('**/*.js');
		files.exclude('node_modules');

		var options = {
			node: true
		};

		lint.validateFileList(files.toArray(), options);
	});
}());
