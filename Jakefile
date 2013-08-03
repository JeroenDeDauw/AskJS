/* global desc, task, jake, fail, complete, directory*/

(function() {
	"use strict";

	task('default', ['lint']);

	task('lint', function() {
		var lint = require('./build/lint/lint_runner.js');
		lint.validateFile('Jakefile');
	});
}());
