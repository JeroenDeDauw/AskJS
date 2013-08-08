"use strict";

var ask = require('../../');

exports.testCanConstructPropertySelectionRequest = function( test ) {
	var propertyId = 42;
	var propertySelection = new ask.Language.PropertySelectionRequest(propertyId);

	test.equals(propertySelection.getPropertyId(), propertyId);

	test.done();
};
