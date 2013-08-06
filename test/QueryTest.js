"use strict";

var ask = require('../');

exports.testCanConstructQuery = function(test) {
	var query = new ask.Query();
	test.done();
};

exports.testGetLimit = function(test) {
	var query = new ask.Query();
	test.equal(query.getLimit(), 42, 'getLimit returns the correct value');
	test.done();
};
