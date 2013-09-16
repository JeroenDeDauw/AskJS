"use strict";

var ask = require('../../');

exports.testCanConstructPropertySelectionRequest = function( test ) {
	var propertyId = 42;
	var value = 'foo';

	var propertySelection = new ask.language.PropertySelectionRequest(propertyId);

	test.equals(propertySelection.getPropertyId(), propertyId);

	test.done();
};
