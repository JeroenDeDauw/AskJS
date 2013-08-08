"use strict";

var ask = require('../../');

exports.testCanConstructPropertyValueSortExpression = function( test ) {
	var direction = 'asc'; // TODO: use a constant
	var propertyId = 42;

	var sortExpression = new ask.language.PropertyValueSortExpression( propertyId, direction );

	test.equals( sortExpression.getDirection(), direction );
	test.equals( sortExpression.getPropertyId(), propertyId );

	test.done();
};
