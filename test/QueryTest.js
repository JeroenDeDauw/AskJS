"use strict";

var ask = require('./../src/Query.js');

exports.testCanConstructQuery = function(test) {
	var query = new ask.Query();
	test.done();
};

exports.testGetLimit = function(test) {
	var query = new ask.Query();
	test.equal(query.getLimit(), 42, 'dummy test');
	test.done();
};