"use strict";

var ask = require('../../');

exports.testCanConstructQueryOptions = function( test ) {
	var queryOptions = new ask.Language.QueryOptions( 100, 0 );

	test.equal( queryOptions.getLimit(), 100 );
	test.equal( queryOptions.getOffset(), 0 );

	test.done();
};

