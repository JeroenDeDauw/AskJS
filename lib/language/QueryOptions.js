"use strict";

function QueryOptions( limit, offset ) {
	this.limit = limit;
	this.offset = offset;
}

QueryOptions.prototype = {
	constructor: QueryOptions,

	getLimit: function () {
		return this.limit;
	},

	getOffset: function() {
		return this.offset;
	}
};

module.exports = QueryOptions;