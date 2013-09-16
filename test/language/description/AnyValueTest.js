"use strict";

var ask = require('../../../');

exports.testCanConstructAnyValue = function( test ) {
	var anyValue = new ask.language.description.AnyValue();

	test.equals(anyValue.getType(), 'anyValue');
	test.equals(anyValue.getSize(), 0);
	test.equals(anyValue.getDepth(), 0);

	test.done();
};
