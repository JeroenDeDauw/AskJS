"use strict";

var ask = require('../../');

exports.testCanConstructPropertyValueSortExpression = function( test ) {
	var direction = 'asc'; // TODO: use a constant
	var sortExpression = new ask.language.PropertyValueSortExpression( direction );

	test.equals( sortExpression.getDirection(), direction );

	test.done();
};
